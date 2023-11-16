import React, { Component } from "react";
import { Button, Popconfirm, Space, Table, Tooltip } from "antd";
import Column from "antd/es/table/Column";
import { MdPreview } from "react-icons/md";
import { BiSolidTrash } from "react-icons/bi";

export class OrderList extends Component {
  render() {
    const { od } = this.props;
    return (
      <>
        <Table dataSource={od} rowKey="id">
          <Column title="ID" key="id" dataIndex="id" align="center"></Column>

          <Column
            title="CustomerId"
            key="cusId"
            dataIndex="cusId"
            align="center"
          ></Column>

          <Column
            title="Address"
            key="address"
            dataIndex="address"
            align="center"
          ></Column>

          <Column
            title="Buy Date"
            key="createDate"
            dataIndex="createDate"
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
                  title="View Order Detail"
                  color="green"
                >
                  <Button
                    key={record.key}
                    type="link"
                    size="small"
                    onClick={() => this.props.onGoDetail(record)} // Hiển thị chi tiết sản phẩm
                  >
                    <MdPreview color="green" size={24}></MdPreview>
                  </Button>
                </Tooltip>

                <Tooltip placement="top" title="Delete Order" color="red">
                  <Popconfirm
                    key={record.key}
                    title="Delete the task"
                    description="Are you sure to delete this order?"
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

export default OrderList;
