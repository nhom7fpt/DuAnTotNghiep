import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import Column from "antd/es/table/Column";
import { Button, Modal, Skeleton, Space, Table, Tag } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { BiEdit, BiSolidTrash } from "react-icons/bi";
import { connect } from "react-redux";
import {
  getListCategory,
  clearList,
  deleteCategory,
} from "../../redux/actions/actionCategory";

class ListCategory extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount = () => {
    this.props.getListCategory();
  };

  componentWillUnmount = () => {
    this.props.clearList();
  };

  editCategory = (data) => {
    console.log(data);

    const { navigate } = this.props.router;
    navigate("/category/update/" + data.id);
  };

  openDeleteModal = (data) => {
    this.setState({ ...this.state, category: data });

    console.log(data);

    const message = "Do you want to delete the category " + data.name;

    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: () => this.handleDeleteCategory(data),
      okText: "Delete",
      cancelText: "Cancel",
    });
  };
  handleDeleteCategory = (data) => {
    this.props.deleteCategory(data.id);
  };

  render() {
    const { navigate } = this.props.router;
    const { categories, isLoading } = this.props;

    if (isLoading) {
      return (
        <>
          <HeaderContent title="List Category" navigate={navigate} />
          <Skeleton active />
        </>
      );
    }
    return (
      <div>
        <HeaderContent title="List Category" navigate={navigate} />

        <Table dataSource={categories} rowKey="id">
          <Column
            title="Category ID"
            key="id"
            dataIndex="id"
            align="center"
            width={40}
          ></Column>

          <Column
            title="Name"
            key="name"
            dataIndex="name"
            align="center"
          ></Column>

          <Column
            title="Status"
            key="status"
            dataIndex="status"
            align="center"
            render={(_, { status }) => {
              let color = status === "Visible" ? "green" : "volcano";
              return <Tag color={color}>{status}</Tag>;
            }}
          ></Column>

          <Column
            title="Action"
            key="action"
            align="center"
            width={200}
            render={(_, record) => (
              <Space size="middle">
                <Button
                  key={record.key}
                  type="primary"
                  size="small"
                  onClick={() => this.editCategory(record)}
                >
                  <BiEdit /> Edit
                </Button>
                <Button
                  key={record.key}
                  type="primary"
                  danger
                  size="small"
                  onClick={() => this.openDeleteModal(record)}
                >
                  <BiSolidTrash /> Delete
                </Button>
              </Space>
            )}
          ></Column>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.CategoryReducer.categories,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getListCategory,
  clearList,
  deleteCategory,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListCategory)
);
