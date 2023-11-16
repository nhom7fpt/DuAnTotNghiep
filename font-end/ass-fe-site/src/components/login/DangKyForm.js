
import React from "react";
import { Button, Form, Input } from "antd";
import { BsTelephoneFill } from "react-icons/bs";
import { PiPasswordFill } from "react-icons/pi";
import { toast } from "react-toastify";
import { BiSolidUserPin } from "react-icons/bi";
const DangKyForm = (props) => {
  const onFinish = (values) => {
    props.onFinish(values);
  };
  const onFinishFailed = (errorInfo) => {
    toast.error(errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="tenTaiKhoan"
        rules={[
          {
            required: true,
            message: "Nhập số điện thoại",
          },
        ]}
      >
        <Input
          placeholder="Nhập số điện thoại"
          prefix={<BsTelephoneFill />}
          className="input-form"
        />
      </Form.Item>

      <Form.Item
        name="matkhau"
        rules={[
          {
            required: true,
            message: "Nhập mật khẩu",
          },
        ]}
      >
        <Input.Password
          placeholder="Nhập mật khẩu"
          prefix={<PiPasswordFill />}
          className="input-form"
        />
      </Form.Item>

      <Form.Item
        name="hoten"
        rules={[
          {
            required: true,
            message: "Nhập họ tên",
          },
        ]}
      >
        <Input placeholder="Nhập họ tên" 
        prefix={<BiSolidUserPin />}
        className="input-form" 
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit" className="btn-login">
            Đăng ký
          </Button>
        </Form.Item>
      </Form.Item>
    </Form>
  );
};

export default DangKyForm;
