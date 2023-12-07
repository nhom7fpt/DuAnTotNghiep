import React, { useEffect, useState } from 'react';
import '../css/datlaimatkhau.css';
import Menudangnhap from '../components/menudangnhap';
import { fillAccount } from "../redux/actions/actionCusstom";
import  withRouter  from '../helpers/withRouter';
import { connect } from 'react-redux';
import { change } from '../redux/actions/actionAccount';
import { Form, Input, Button } from 'antd';

function PasswordResetPage (props) {
  const { navigate } = props.router;
  const user = localStorage.getItem("username");
  const { account } = props;

  const handleFormSubmit = async (values) => {
   
     props.change(user, values, navigate)
  };
  const { custom } = props;
  useEffect(() => {
  }, []);

  return (
    <div>
      <div className="container-dat-lai-mat-khau">
        <Menudangnhap />
        <div className="dat-lai-mat-khau" style={{ marginLeft: '10cm' }}>
          <div className="password-reset-form" style={{width:'900px'}}>
            <div className="top-text">Đặt lại mật khẩu</div>
            <div className="bottom-text">
              Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
            </div>
            <div className="form-dat-lai-mat-khau">
            <div className="text-center" name="tenTaiKhoan" style={{width:'400px'}}>(+84) {user}</div>
              <Form onFinish={handleFormSubmit} style={{marginTop:'0.5cm'}}>
              <label className="old-password-lable">
              Mật khẩu cũ
            </label>
                  <Form.Item
                    name="matKhau"
                    id="matKhau"
                    className='lable-d'
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu cũ!' }]}
                  >
                    <Input.Password 
                    placeholder="Nhập mật khẩu cũ" 
                    className='mkc-dlmk'
                    />
                  </Form.Item>
                  <label className="old-password-lable" >
                  Mật khẩu mới
                </label>
                  <Form.Item
                    name="newPassword"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới!' }]}
                  >
                    <Input.Password 
                    placeholder="Nhập mật khẩu mới" 
                    className='mkc-dlmk'
                 
                    />
                  </Form.Item>
                  <label className="old-password-lable" >
                  Xác nhận mật khẩu
                </label>
                  <Form.Item
                  name="confirmNewPassword"
                  rules={[
                    { required: true, message: 'Vui lòng xác nhận mật khẩu mới!' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('newPassword') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                      },
                    }),
                  ]}
                >
                  <Input.Password 
                  placeholder="Xác nhận mật khẩu" 
                  className='mkc-dlmk'
                  />
                </Form.Item>
                  <Form.Item>
                  <Button type="primary" htmlType="submit" className='btn-dmk'>
                  Xác nhận
                  </Button>
              </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  custom: state.CustomReducer.custom,
  account: state.AccountReducer.accoust,
});

const mapDispatchToProps = {
  change,
  fillAccount
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PasswordResetPage));
