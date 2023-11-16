import React, { Component } from "react";

import Column from "antd/es/table/Column";
import { Button, Image, Skeleton, Space, Table } from "antd";

import { BiEdit, BiSolidTrash } from "react-icons/bi";

import ManufacturerService from "../../services/ManufacturerService";

class ListManufacturer extends Component {
  render() {
    const { dataSource, isLoading } = this.props;

    if (isLoading) {
      return (
        <>
          <Skeleton active />
        </>
      );
    }
    return (
      <div>
        <Table dataSource={dataSource} rowKey="id">
          <Column
            title="Logo"
            key="logo"
            dataIndex="logo"
            align="center"
            width={100}
            render={(_, record) => (
              <Space size="middle">
                <Image
                  width="100%"
                  src={ManufacturerService.getManufacturerLogo(record.logo)}
                />
              </Space>
            )}
          ></Column>

          <Column
            title="ID"
            key="id"
            dataIndex="id"
            align="center"
            width={50}
          ></Column>

          <Column
            title="Name"
            key="name"
            dataIndex="name"
            align="center"
          ></Column>

          <Column
            title="Action"
            key="action"
            align="center"
            width={400}
            render={(_, record) => (
              <Space size="middle">
                <Button
                  key={record.key}
                  type="primary"
                  size="small"
                  onClick={() => this.props.editManu(record)}
                >
                  <BiEdit /> Edit
                </Button>
                <Button
                  key={record.key}
                  type="primary"
                  danger
                  size="small"
                  onClick={() => this.props.openDeleteModal(record)}
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

export default ListManufacturer;
