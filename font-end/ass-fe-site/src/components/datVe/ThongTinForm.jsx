import React, { useEffect,useState } from "react";
import { Col, Form, Input, Radio, Row } from "antd";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";

const ThongTinForm = (props) => {
  const { custom, updateCustom } = props;
  console.log(custom);
  const user = localStorage.getItem("username");
  const { navigate } = props.router;

  const handleFormChange = (changedValues, allValues) => {
    // Cập nhật giá trị custom
    updateCustom(allValues);
  };

  return(
  <Row>
    <Col style={{ marginTop: "3%" }} md={24}>
      <Form layout="vertical" className="formDV" size="middle" onValuesChange={handleFormChange}>
        <Form.Item label="Họ tên" name="hoTen" initialValue={custom?custom.hoTen : ""}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="Số điện thoại" name="soDT"initialValue={user}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="Email" name="email"initialValue={custom?custom.email : ''}>
          <Input></Input>
        </Form.Item>
     
      </Form>
     
    </Col>
  </Row>
  )
  };





export default withRouter(ThongTinForm);
