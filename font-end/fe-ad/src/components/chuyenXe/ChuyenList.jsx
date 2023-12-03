import { Button, Image, Popconfirm, Space, Table, Tooltip } from "antd";
import Column from "antd/es/table/Column";
import React, { Component } from "react";
import { BiEdit, BiSolidTrash } from "react-icons/bi";
import ImagesService from "../../services/ImagesService";
import { MdPreview } from "react-icons/md";
import withRouter from "../../helpers/withRouter";

class ChuyenList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      selectedCar: null,
    };
  }

  showProductDetail = (Car) => {
    this.setState({ previewVisible: true, selectedCar: Car });
  };

  closeProductDetail = () => {
    this.setState({ previewVisible: false, selectedCar: null });
  };

  render() {
    const { Cars } = this.props;
    console.log(Cars);

    return (
      <>
        <Table dataSource={Cars} rowKey="bienSoXe">
          <Column
            title="Biển Số Xe"
            key="bienSoXe"
            dataIndex="bienSoXe"
            align="center"
          ></Column>
          <Column
            title="Số Ghế"
            key="loaiXe"
            dataIndex="loaiXe"
            align="center"
            render={(text, record) => (
              <label>{record ? record.loaiXe.soGhe : ""}</label>
            )}
          ></Column>

          <Column
            title="Ngày Mua"
            key="ngayMua"
            dataIndex="ngayMua"
            align="center"
          />

          <Column
            title="Ngày Đăng Kiểm"
            key="ngayDangKiem"
            dataIndex="ngayDangKiem"
            align="center"
          />

          <Column
            title="Giá Mua"
            key="giaMua"
            dataIndex="giaMua"
            align="center"
          ></Column>

          <Column
            title="Nơi Mua"
            key="noiMua"
            dataIndex="noiMua"
            align="center"
          ></Column>
          <Column
            title="Thương Hiệu"
            key="thuongHieu"
            dataIndex="thuongHieu"
            align="center"
            render={(text, record) => (
              <label>{record.thuongHieu.tenThuongHieu}</label>
            )}
          ></Column>

          <Column
            title="Loại Xe"
            key="loaiXe"
            dataIndex="loaiXe"
            align="center"
            render={(text, record) => <label>{record.loaiXe.tenLoai}</label>}
          ></Column>

          <Column
            title="Action"
            key="action"
            align="center"
            width={200}
            render={(_, record) => (
              <Space size="middle">
                <Tooltip placement="top" title="Edit Product" color="blue">
                  <Button
                    key={record.key}
                    type="link"
                    size="small"
                    onClick={() => this.props.onEdit(record)}
                  >
                    <BiEdit color="blue" size={24} />
                  </Button>
                </Tooltip>
                <Tooltip placement="top" title="Delete Product" color="red">
                  <Popconfirm
                    key={record.key}
                    title="Delete the task"
                    description="Are you sure to delete this product?"
                    onConfirm={() => this.props.onConfirm(record)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button type="link" danger>
                      <BiSolidTrash size={24}></BiSolidTrash>
                    </Button>
                  </Popconfirm>
                </Tooltip>
              </Space>
            )}
          ></Column>
        </Table>
      </>
    );
  }
}

export default withRouter(ChuyenList);