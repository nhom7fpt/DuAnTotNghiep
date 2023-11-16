import { Button, Image, Popconfirm, Space, Table, Tooltip } from "antd";
import Column from "antd/es/table/Column";
import React, { Component } from "react";
import { BiEdit, BiSolidTrash } from "react-icons/bi";
import { MdPreview } from "react-icons/md";
import AccountDetail from "../Account/AccountDetail";
import ProductService from "../../services/ProductService";
import AccountEdit from "./AccountEdit";

export class AccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      selectedAcc: null,
      previewVisibleEdit: false,
    };
  }

  onOkUpdate = (data) => {
    this.closeAccEdit();
    this.props.onOkUpdateAcc(data);
  };

  showAccDetail = (acc) => {
    this.setState({ previewVisible: true, selectedAcc: acc });
  };

  closeAccDetail = () => {
    this.setState({ previewVisible: false, selectedAcc: null });
  };

  showAccEdit = (acc) => {
    this.setState({ previewVisibleEdit: true, selectedAcc: acc });
  };

  closeAccEdit = () => {
    this.setState({ previewVisibleEdit: false, selectedAcc: null });
  };

  render() {
    const { acc } = this.props;
    return (
      <>
        <Table dataSource={acc} rowKey="username">
          <Column
            title="Image"
            key="fileName"
            align="center"
            width={90}
            render={(_, record) => (
              <Space size="middle">
                {record.photoImage ? (
                  <Image
                    width="100%"
                    src={ProductService.getProductImageUrl(
                      record.photoImage.fileName
                    )}
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
            title="UserName"
            key="username"
            dataIndex="username"
            align="center"
          ></Column>

          <Column
            title="Password"
            key="password"
            dataIndex="password"
            align="center"
          ></Column>

          <Column
            title="Account Roles"
            key="accountRoles"
            dataIndex="accountRoles"
            align="center"
          ></Column>

          <Column
            title="Action"
            key="action"
            align="center"
            width={200}
            render={(_, record) => (
              <Space size="middle">
                <Tooltip
                  placement="top"
                  title="View Account Detail"
                  color="green"
                >
                  <Button
                    key={record.key}
                    type="link"
                    size="small"
                    onClick={() => this.showAccDetail(record)} // Hiển thị chi tiết sản phẩm
                  >
                    <MdPreview color="green" size={24}></MdPreview>
                  </Button>
                </Tooltip>
                <Tooltip placement="top" title="Edit Account" color="blue">
                  <Button
                    key={record.key}
                    type="link"
                    size="small"
                    onClick={() => this.showAccEdit(record)}
                  >
                    <BiEdit color="blue" size={24} />
                  </Button>
                </Tooltip>
                <Tooltip placement="top" title="Delete Account" color="red">
                  <Popconfirm
                    key={record.key}
                    title="Delete the task"
                    description="Are you sure to delete this account?"
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

        <AccountDetail
          visible={this.state.previewVisible}
          cus={this.state.selectedAcc}
          onClose={this.closeAccDetail}
        />
        <AccountEdit
          onOkUpdate={this.onOkUpdate}
          visible={this.state.previewVisibleEdit}
          acc={this.state.selectedAcc}
          onClose={this.closeAccEdit}
        />
      </>
    );
  }
}

export default AccountList;
