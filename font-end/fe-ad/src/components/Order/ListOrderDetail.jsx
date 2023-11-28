import Column from "antd/es/table/Column";
import React, { Component } from "react";
// import ProductService from "../../services/ProductService";
import { Card, Col, Divider, Image, Row, Space, Statistic, Table } from "antd";

export class ListOrderDetail extends Component {
  render() {
    const { odd, total } = this.props;

    const totalFunds = odd.reduce((total, item) => total + item.price, 0);
    const quantity = odd.length;
    const giaVe = total / quantity;
    return (
      <>
        <Row gutter={16}>
          <Col span={8}>
            <Card bordered={false}>
              <Statistic title="Giá vé" value={giaVe} suffix="VND" />
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <Statistic
                title="Số lượng vé"
                value={quantity}
                valueStyle={{
                  color: "#3f8600",
                }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <Statistic
                title="Tổng tiền"
                value={total}
                valueStyle={{
                  color: "red",
                }}
                suffix="VND"
              />
            </Card>
          </Col>
        </Row>
        <Divider></Divider>
        {odd !== null ? (
          <Table dataSource={odd} rowKey="id">
            <Column
              title="Người mua"
              key="nguoiMua"
              dataIndex="nguoiMua"
              align="center"
            ></Column>

            <Column
              title="Số điện thoại"
              key="sdt"
              dataIndex="sdt"
              align="center"
            ></Column>

            <Column
              title="Ngày đi"
              key="ngayDi"
              dataIndex="ngayDi"
              align="center"
            ></Column>
            <Column
              title="Thời gian đi"
              key="thoiGianDi"
              dataIndex="thoiGianDi"
              align="center"
            ></Column>
            <Column
              title="Vị trí ngồi"
              key="viTriNgoi"
              dataIndex="viTriNgoi"
              align="center"
            ></Column>
          </Table>
        ) : null}
      </>
    );
  }
}

export default ListOrderDetail;
