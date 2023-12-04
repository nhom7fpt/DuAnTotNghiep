import React, { useEffect,useState } from "react";
import { Col, Form, Input, Row } from "antd";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";

const ThongTinForm = (props) => {
  const { custom } = props;
  const user = localStorage.getItem("username");
  const { navigate } = props.router;
  useEffect(() => {
    
}, []);
console.log();
  return(
  <Row>
    <Col style={{ marginTop: "3%" }} md={24}>
      <Form layout="vertical" className="formDV" size="middle">
        <Form.Item label="Họ tên" name="hoTen" initialValue={custom?.hoTen || ""}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="Số điện thoại"name="id"initialValue={user}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="Email" name="email"initialValue={custom?.email || ''}>
          <Input></Input>
        </Form.Item>
      </Form>
    </Col>
  </Row>
  )
  };


const mapStateToProps = (state) => ({
  custom: state.CustomReducer.custom,
  
});
const mapDispatchToProps = {

};


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(withRouter(ThongTinForm));
