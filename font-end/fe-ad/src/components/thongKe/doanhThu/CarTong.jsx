import React from "react";
import { Card, Col, Row, Space, Statistic } from "antd";
const CarTong = () => (
  <Row gutter={16}>
    <Col span={24}>
      <Card bordered={false}>
        <Statistic
          title="Tổng doanh thu"
          value={12345}
          precision={2}
          suffix="VND"
        />
      </Card>
    </Col>
  </Row>
);
export default CarTong;
