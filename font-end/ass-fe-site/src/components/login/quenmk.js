import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { toast } from "react-toastify";
import "react-notifications/lib/notifications.css";
import text from "../../image/logo/Text-mailinh.png";
import { NavLink } from "react-router-dom";
import { MdAttachEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const QuenMatKhauForm = (props) => {
 

  const onFinish = (values) => {
    props.onFinish(values);
  };

  const onFinishFailed = (errorInfo) => {
    toast.error(errorInfo);
  };


  return (
   
    <div className="container h-custom">
      <div className="login row">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <div>
            <img
              alt=""
              src={text}
              style={{ paddingTop: "25px", paddingLeft: "40px" }}
            />
          </div>
          <img
            src="https://storage.googleapis.com/futa-busline-cms-dev/TVC_00aa29ba5b/TVC_00aa29ba5b.svg"
            className="img-fluid"
            alt="Sample image"
          />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-5 offset-xl-1">
          <div className="text-center">
            <h3
              style={{
                paddingTop: "20px",
                fontSize: "1.5rem",
                lineHeight: "2rem",
                marginTop:'20px'
              }}
            >
              Quên mật khẩu
            </h3>
            <Form
              name=""
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
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
              style={{marginTop:'40px'}}
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
                style={{width:'444px', height:'55px'}}
                prefix={<MdAttachEmail />}
                
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
                    Xác nhận
                  </Button>
                </Form.Item>
                  <NavLink exact to="/login" style={{marginLeft:'-14cm'}}>Quay lại</NavLink>
              </Form.Item>
              
            </Form>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuenMatKhauForm;
