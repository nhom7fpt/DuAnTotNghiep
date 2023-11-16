import React, { useState } from 'react';
import '../css/thongtintaikhoan.css';
import 'antd/dist/antd.css';
import demo from '../image/anhdemo.jpg';
import Menudangnhap from '../components/menudangnhap';

function Thongtintaikhoan() {
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

    return (
        <div className="container-dat-lai-mat-khau">
            <Menudangnhap />

            {/* Password Reset Form */}
            <div className="thong-tin-tai-khoan"style={{marginTop:'30px', marginLeft:'12cm'}}>
                <div className="account-information-form">
                    <div className="top-text">Thông tin tài khoản</div>
                    <div className="bottom-text">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                    <div className="form-thong-tin-tai-khoan">
                        <div className="left-side">
                            <img src={profileImage || demo} alt="Profile Image" id="profile-image" />
                            <input type="file" id="image-upload" accept="image/*" onChange={handleImageUpload} />
                            <p className="text">Dung lượng file tối đa 1 MB. Định dạng: .JPEG, .PNG</p>
                        </div>
                        <div className="right-side-tttk">
                            <form id="account-information">
                                <div className="form-group">
                                    <label htmlFor="full-name">Họ và tên :</label>
                                    <input type="text" id="full-name" name="full-name" className="no-border" value={user} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Số điện thoại:</label>
                                    <input type="tel" id="phone" name="phone" placeholder="0123456789" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="gender">Giới tính:</label>
                                    <select id="gender" name="gender">
                                        <option value="male">Nam</option>
                                        <option value="female">Nữ</option>
                                        <option value="other">Khác</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" placeholder="kiuoanh@gmail.com" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="dob">Ngày sinh:</label>
                                    <input type="date" id="dob" name="dob" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address">Địa chỉ:</label>
                                    <textarea id="address" name="address" rows="4" placeholder="Đà Nẵng" required></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="occupation">Nghề nghiệp:</label>
                                    <input type="text" id="occupation" name="occupation" required />
                                </div>

                                <div className="cap-nhat">
                                    <button type="submit">Cập nhật</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thongtintaikhoan;
