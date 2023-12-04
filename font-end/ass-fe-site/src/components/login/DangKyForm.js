
import React, { useState,useEffect } from 'react';
import { Button, Form, Input } from "antd";
import { BsTelephoneFill } from "react-icons/bs";
import { PiPasswordFill } from "react-icons/pi";
import { toast } from "react-toastify";
import { BiSolidUserPin } from "react-icons/bi";
import { MdAttachEmail } from "react-icons/md";
const DangKyForm = (props) => {

  const [hoTenValue, setHoTenValue] = useState('');
  const onFinish = (values) => {
    // Kiểm tra chiều dài của hoTen trước khi submit
    if (hoTenValue.length > 25) {
      // Thông báo hoặc xử lý theo nhu cầu của bạn
      toast.error('Họ tên không được vượt quá 25 ký tự.');
    } else {
      props.onFinish(values);
    }
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
         style={{height:'35px'}}
         className="dangki-tenTaiKhoan"
           
        />
      </Form.Item>

      <Form.Item
        name="matKhau"
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
       
          style={{height:'35px'}}
          className="dangki-tenTaiKhoan"
        />
      </Form.Item>
      <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Email không hợp lệ",
                  },
                  {
                    required: true,
                    message: "Nhập địa chỉ email",
                  },
                ]}
              >
                <Input placeholder="Nhập địa chỉ email" 
                style={{width:'444px', height:'35px'}}
                prefix={<MdAttachEmail />}
           
                />
              </Form.Item>
      
              <Form.Item
              name="hoTen"
              rules={[
                {
                  required: true,
                  message: "Nhập họ tên",
                },
                {
                  max: 25,
                  message: 'Họ tên không được vượt quá 25 ký tự!',
                },
              ]}
            >
        <Input placeholder="Nhập họ tên" 
        prefix={<BiSolidUserPin />}
        style={{height:'35px'}}
        className="dangki-tenTaiKhoan"
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
