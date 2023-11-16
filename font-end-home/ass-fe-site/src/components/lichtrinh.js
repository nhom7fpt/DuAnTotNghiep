import React,{ useEffect } from 'react';
import '../css/lichtrinh.css';
import muiten from '../image/switch_location.svg';
function Lichtrinhpage() {
  useEffect(() => {
    document.title = 'Lịch Trình';
  }, []);
  return (
    <div className="schedule-container-lt">
      <div className="info-header-search-lt">
        <div className="search-input-container-lt" style={{marginRight:'-0.05cm',marginLeft:'-0.5cm'}}>
          <input

            className="search-input"
            placeholder="Nhập điểm đi"
            style={{ width: '560px' }}
          />

        </div>
        <img className="location-image" src={muiten} alt="" />
        <div className="search-input-container-lt"style={{marginLeft:'-0.3cm'}}>
          <input

            className="search-input"
            placeholder="Nhập điểm đến"
            style={{ width: '560px' }}
          />
        </div>
      </div>

      <br />
      <div className="info-header">
        <div className="info-label">Tuyến xe</div>
        <div className="info-label">Loại xe</div>
        <div className="info-label">Quãng đường</div>
        <div className="info-label">Thời gian hành trình</div>
        <div className="info-label">Giá vé</div>
        <div className="info-label"></div>
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
  
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
    
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
     
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
      
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
     
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
       
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
      
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
      
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
      
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
      
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
      
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
       
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
      
      </div>

      <div className="info-container">
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
        <div className="info-row">
          <div className="info-value">An Nhơn<br />TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Lichtrinhpage;
