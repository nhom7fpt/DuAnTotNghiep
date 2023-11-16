import { Col, Form, Input, Row } from "antd";
import React, { Component } from "react";

const ThongTinForm = () => (
  <Row>
    <Col style={{ marginTop: "3%" }} md={24}>
      <Form layout="vertical" className="formDV" size="middle">
        <Form.Item label="Họ tên">
          <Input></Input>
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input></Input>
        </Form.Item>
        <Form.Item label="Email">
          <Input></Input>
        </Form.Item>
      </Form>
    </Col>
  </Row>
);

export default ThongTinForm;
