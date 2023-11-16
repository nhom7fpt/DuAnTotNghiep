import React, { useState } from 'react';
import '../css/lichsumuave.css';
import history from '../image/dangnhap/History.svg';
import address from '../image/dangnhap/Address.svg';
import pass from '../image/dangnhap/Password.svg';
import pro from '../image/dangnhap/Profile.svg';
import futa from '../image/dangnhap/futaPay.svg';
import log from '../image/dangnhap/Logout.svg';
import { NavLink } from 'react-router-dom';
// Import CSS cho DatePicker
function Menudangnap() {
    return (
        <div className="sidebar-dat-lai-mat-khau" style={{ marginTop: '1cm'}}>
            <ul>
                <li>
                    <NavLink exact to="/Mailinhpay">
                        <img src={futa} alt="MAILINHPay" /> MAILINHPay
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/thongttk">
                        <img src={pro} alt="Thông tin tài khoản" /> Thông tin tài khoản
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/Lsmuave">
                        <img src={history} alt="Lịch sử mua vé" /> Lịch sử mua vé
                    </NavLink>
                </li>
                <li>
                    <a href="#">
                        <img src={address} alt="Địa chỉ mua vé" /> Địa chỉ mua vé
                    </a>
                </li>
                <li>
                    <NavLink exact to="/doimk">
                        <img src={pass} alt="Đặt lại mật khẩu" /> Đặt lại mật khẩu
                    </NavLink>
                </li>
                <li>
                    <a href="#">
                        <img src={log} alt="Đăng xuất" /> Đăng xuất
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Menudangnap;
