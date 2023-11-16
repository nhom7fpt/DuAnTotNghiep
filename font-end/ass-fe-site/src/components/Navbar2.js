import React, { useState, useEffect } from 'react';
import '../css/navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../image/Mailinhlogo.png';
import { FaHistory, FaCog, FaWrench } from 'react-icons/fa';
import history from '../image/dangnhap/History.svg';
import address from '../image/dangnhap/Address.svg';
import pass from '../image/dangnhap/Password.svg';
import pro from '../image/dangnhap/Profile.svg';
import futa from '../image/dangnhap/futaPay.svg';
import log from '../image/dangnhap/Logout.svg';
import { ACCOUNT_SET } from '../redux/actions/actionType';
import { toast } from "react-toastify";
import 'react-notifications/lib/notifications.css';
import { useNavigate } from 'react-router-dom';
import { logout } from "../redux/actions/actionAccount";
import dropdown from '../image/dangnhap/dropdown-menu.svg';
import withRouter from '../helpers/withRouter';


function Navbar(props) {
 const {navigate} = props.router;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.AccountReducer.loggedInUser);
  const account = useSelector((state) => state.AccountReducer.account);
  const user = localStorage.getItem("username");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleLogout = () => {
    dispatch(logout(navigate));
  };
  
  useEffect(() => {
    setIsDropdownOpen((loggedInUser || account) && user !== null);
    return () => {
      const activeNavLink = document.querySelector('#navbar li a.active');
      if (activeNavLink) {
        activeNavLink.classList.remove('active');
      }
    };
  }, [loggedInUser, account, user]);
  return (
    <nav className="navbar-container">
      <ul id="navbar">
        <li className="logo">
          <img src={logo} alt="brand" />
        </li>

        <li>
          <NavLink to="/" activeClassName="active">
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink to="/lichtrinh" activeClassName="active">
            Lịch Trình
          </NavLink>
        </li>
        <li>
          <NavLink to="/tracuu" activeClassName="active">
            Tra cứu vé
          </NavLink>
        </li>
        <li>
          <NavLink to="/tintuc" activeClassName="active">
            Tin Tức
          </NavLink>
        </li>
        <li>
          <NavLink to="/lienhe" activeClassName="active">
            Liên Hệ
          </NavLink>
        </li>
        <li>
          <NavLink to="/vechungtoi" activeClassName="active">
            Về Chúng Tôi
          </NavLink>
        </li>
        <li className="dropdown-container">
        {user == null ? (
          <NavLink to="/login" activeClassName="active" exact>
            Đăng nhập
          </NavLink>
        ) : (
          <NavLink to="#" activeClassName="active" onClick={toggleDropdown}>
            Xin chào {user}  <img src={dropdown} alt="" style={{width:'36px', height:'36px', marginTop:'-10px'}}/> 
          </NavLink>
        )}
        {isDropdownOpen && (
          <div className="dropdown">
            <NavLink exact to="/Mailinhpay">
              <img src={futa} alt="MAILINHPay" /> MAILINHPay
            </NavLink>
            <NavLink exact to="/thongttk">
              <img src={pro} alt="Thông tin tài khoản" /> Thông tin tài khoản
            </NavLink>
            <NavLink exact to="/Lsmuave">
              <img src={history} alt="Lịch sử mua vé" /> Lịch sử mua vé
            </NavLink>
            <NavLink exact to="#">
              <img src={address} alt="Địa chỉ mua vé" /> Địa chỉ mua vé
            </NavLink>
            <NavLink exact to="/doimk">
              <img src={pass} alt="Đặt lại mật khẩu" /> Đặt lại mật khẩu
            </NavLink>
            <a onClick={handleLogout}>
              <img src={log} alt="Đăng xuất" /> Đăng xuất
            </a>
          </div>
        )}
      </li>
      </ul>
    </nav>
  );
}

export default withRouter(Navbar);
