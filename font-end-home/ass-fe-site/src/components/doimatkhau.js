import React, { useState } from 'react';
import '../css/datlaimatkhau.css';
import history from '../image/dangnhap/History.svg';
import address from '../image/dangnhap/Address.svg';
import pass from '../image/dangnhap/Password.svg';
import pro from '../image/dangnhap/Profile.svg';
import futa from '../image/dangnhap/futaPay.svg';
import log from '../image/dangnhap/Logout.svg';
import Menudangnhap from'../components/menudangnhap'
// Import các biểu tượng từ thư viện react-icons
import { FiEye, FiEyeOff } from 'react-icons/fi';

function PasswordResetPage() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === 'old') {
      setShowOldPassword(!showOldPassword);
    } else if (field === 'new') {
      setShowNewPassword(!showNewPassword);
    } else if (field === 'confirm') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('Mật khẩu mới và xác nhận mật khẩu không khớp.');
    } else {
      // Đặt logic xử lý đặt lại mật khẩu ở đây

      alert('Mật khẩu đã được đặt lại thành công.');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div>
      <div className="container-dat-lai-mat-khau">
         <Menudangnhap/>

        {/* Form đặt lại mật khẩu */}
        <div className="dat-lai-mat-khau" style={{marginLeft:'10cm'}}>
          <div className="password-reset-form">
            <div className="top-text">Đặt lại mật khẩu</div>
            <div className="bottom-text">
              Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
            </div>
            <div className="form-dat-lai-mat-khau">
              <form onSubmit={handleFormSubmit}>
                <div className="text-center">(+84) 0123456789</div>

                <div className="form-check">
                  <div className="old-password">
                    <label className="old-password" style={{ textAlign: 'left', fontSize: '12px', marginLeft: '0.4cm' }}>
                      Mật khẩu cũ:
                    </label>
                    <input
                      type={showOldPassword ? 'text' : 'password'}
                      id="old-password"
                      name="old-password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                    {showOldPassword ? (
                      <FiEyeOff onClick={() => togglePasswordVisibility('old')} style={{marginLeft:'-0.6cm'}}/>
                    ) : (
                      <FiEye onClick={() => togglePasswordVisibility('old')} style={{marginLeft:'-0.6cm'}} />
                    )}
                  </div>

                  <div className="password-input">
                    <label
                      className="new-password"
                      style={{ textAlign: 'left', fontSize: '12px', marginLeft: '0.4cm' }}
                    >
                      Mật khẩu mới:
                    </label>
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      id="new-password"
                      name="new-password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {showNewPassword ? (
                      <FiEyeOff onClick={() => togglePasswordVisibility('new')} style={{marginLeft:'-0.6cm'}}/>
                    ) : (
                      <FiEye onClick={() => togglePasswordVisibility('new')} style={{marginLeft:'-0.6cm'}}/>
                    )}
                  </div>

                  <div className="confirm-password">
                    <label
                      className="confirm-password"
                      style={{ textAlign: 'left', fontSize: '12px', marginLeft: '0.4cm' }}
                    >
                      Xác nhận mật khẩu:
                    </label>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirm-password"
                      name="confirm-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {showConfirmPassword ? (
                      <FiEyeOff onClick={() => togglePasswordVisibility('confirm')} style={{marginLeft:'-0.6cm'}}/>
                    ) : (
                      <FiEye onClick={() => togglePasswordVisibility('confirm')} style={{marginLeft:'-0.6cm'}}/>
                    )}
                  </div>

                  <div className="button-container">
                    <button className="btn btn-cancel" type="button">
                      Hủy
                    </button>
                    <button className="btn btn-confirm" type="submit">
                      Xác nhận
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordResetPage;
