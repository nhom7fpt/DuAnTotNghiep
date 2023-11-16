import Column from "antd/es/table/Column";
import React, { Component } from "react";
import ProductService from "../../services/ProductService";
import { Card, Col, Divider, Image, Row, Space, Statistic, Table } from "antd";

export class ListOrderDetail extends Component {
  render() {
    const { odd } = this.props;

    const totalFunds = odd.reduce((total, item) => total + item.price, 0);
    const totalQuantity = odd.reduce((total, item) => total + item.quantity, 0);
    return (
      <>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Funds"
                value={totalFunds}
                precision={2}
                suffix="VND"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total quantity"
                value={totalQuantity}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
              />
            </Card>
          </Col>
        </Row>
        <Divider></Divider>
        {odd !== null ? (
          <Table dataSource={odd} rowKey="id">
            <Column
              title="Image"
              key="fileName"
              align="center"
              width={90}
              render={(_, record) => (
                <Space size="middle">
                  <Image
                    width="100%"
                    src={ProductService.getProductImageUrl(
                      record.product.image.fileName
                    )}
                  />
                </Space>
              )}
            ></Column>

            <Column
              title="Name"
              key="name"
              dataIndex="name"
              align="center"
              render={(_, record) => record.product.name}
            ></Column>

            <Column
              title="Quantity"
              key="quantity"
              dataIndex="quantity"
              align="center"
            ></Column>

            <Column
              title="Price"
              key="price"
              dataIndex="price"
              align="center"
            ></Column>
          </Table>
        ) : null}
      </>
    );
  }
}

export default ListOrderDetail;
