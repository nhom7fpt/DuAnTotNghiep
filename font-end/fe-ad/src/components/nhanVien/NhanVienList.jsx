import { Button, Image, Popconfirm, Space, Table, Tooltip } from "antd";
import Column from "antd/es/table/Column";
import React, { Component } from "react";
import { BiEdit, BiSolidTrash } from "react-icons/bi";
import ImagesService from "../../services/ImagesService";
import { MdPreview } from "react-icons/md";
import withRouter from "../../helpers/withRouter";

class NhanVienList extends Component {
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
    const { list } = this.props;
    console.log(list);

    return (
      <>
        <Table dataSource={list} rowKey="soCCCD">
          <Column
            title="Ảnh"
            key="anhDaLuu"
            align="center"
            width={90}
            render={(_, record) => (
              <Space size="middle">
                {record.anhDaLuu ? (
                  <Image
                    width="100%"
                    src={ImagesService.getImageUrl(record.anhDaLuu.tenTep)}
                  />
                ) : (
                  <Image
                    width="100%"
                    src="https://t3.ftcdn.net/jpg/04/34/72/82/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                  />
                )}
              </Space>
            )}
          ></Column>

          <Column
            title="Họ tên"
            key="hoTen"
            dataIndex="hoTen"
            align="center"
          ></Column>
          <Column
            title="Số CCCD"
            key="soCCCD"
            dataIndex="soCCCD"
            align="center"
          ></Column>

          <Column
            title="Số điện thoại"
            key="sdt"
            dataIndex="sdt"
            align="center"
          />

          <Column
            title="Địa chỉ"
            key="diaChi"
            dataIndex="diaChi"
            align="center"
          />

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

export default withRouter(NhanVienList);
