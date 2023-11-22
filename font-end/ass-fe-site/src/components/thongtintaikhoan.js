import React, { useState,useEffect } from 'react';
import '../css/thongtintaikhoan.css';
import 'antd/dist/antd.css';
import demo from '../image/anhdemo.jpg';
import Menudangnhap from '../components/menudangnhap';
import { connect } from "react-redux";
import withRouter from '../helpers/withRouter';
import { updateCustom } from "../redux/actions/actionCusstom";
import { fillAccount } from "../redux/actions/actionCusstom";
import { Col, Input, Row, Button, DatePicker } from 'antd';
import { Form } from 'antd';

function Thongtintaikhoan(props) {
    const [profileImage, setProfileImage] = useState('');
    const user = localStorage.getItem("username");
   
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfileImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFormSubmit = (values) => {
        console.log(values);
       props.updateCustom(user, values, navigate);
      
    };

    const { custom } = props;
    const { navigate } = props.router;
    useEffect(() => {
        // Call fillAccount when the component mounts
        props.fillAccount(user, {}, navigate);
    }, []);
    return (
        <div className="container-dat-lai-mat-khau">
            <Menudangnhap />
            <div className="thong-tin-tai-khoan" style={{ marginTop: '30px', marginLeft: '12cm' }}>
                <div className="account-information-form">
                    <div className="top-text">Thông tin tài khoản</div>
                    <div className="bottom-text">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                    <div className="form-thong-tin-tai-khoan">
                        <Row gutter={16}>
                            <Col span={8}>
                                <div className="left-side" style={{marginTop:'2cm'}}>
                                    <img src={profileImage || demo} alt="Profile Image" id="profile-image" />
                                    <input type="file" id="image-upload" accept="image/*" onChange={handleImageUpload} />
                                    <p className="text">Dung lượng file tối đa 1 MB. Định dạng: .JPEG, .PNG</p>
                                </div>
                            </Col>
                            <Col >
                                <Form 
                                    id="account-information"
                                    onFinish={handleFormSubmit}
                                    style={{marginLeft:'8cm', marginTop:'-12cm'}}
                                >
                                    <Form.Item label="Họ và tên :" name="hoTen"  initialValue={custom?.hoTen || ""} >
                                        <Input  style={{ width: '340px',  marginLeft:'20px', height: '45px'}} />
                                        
                                    </Form.Item>
                                    <Form.Item label="Số điện thoại:" name="id" initialValue={user} >
                                        <Input placeholder="0123456789" style={{ width: '340px',  height: '45px'}}/>
                                    </Form.Item>
                                    <Form.Item label="Email:" name="email" initialValue={custom?.email || ''}>
                                        <Input placeholder="kiuoanh@gmail.com" style={{ width: '340px',  marginLeft:'45px', height: '45px'}}/>
                                    </Form.Item>
                                    <Form.Item label="Ngày sinh:" name="dob">
                                        <DatePicker 
                                        placeholder={["Ngày sinh"]}
                                        format="DD/MM/YYYY"
                                        className='ngaysinh' 
                                        />
                                    </Form.Item>
                                    <Form.Item label="Địa chỉ:" name="diaChi" >
                                        <Input.TextArea  placeholder="Đà Nẵng" style={{height:'80px',marginLeft:'50px', width: '340px'}} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className='btn-capnhat'>
                                            Cập nhật
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    custom: state.CustomReducer.custom,
});

const mapDispatchToProps = {
    updateCustom,
    fillAccount

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Thongtintaikhoan));
