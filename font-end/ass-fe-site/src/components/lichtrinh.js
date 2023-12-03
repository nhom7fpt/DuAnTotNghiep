import React,{ useEffect } from 'react';
import '../css/lichtrinh.css';
import muiten from '../image/switch_location.svg';
import arrow from "../image/trangchu/ic_double_arrow.svg";
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
        <div className="info-label" style={{marginLeft:'-1.5cm'}}>Tuyến xe</div>
        <div className="info-label"  style={{marginLeft:'1.5cm'}}>Loại xe</div>
        <div className="info-label" style={{marginLeft:'0.5cm'}}>Quãng đường</div>
        <div className="info-label" style={{marginLeft:'0.7cm'}}>Thời gian hành trình</div>
        <div className="info-label-gv" style={{}}>Giá vé</div>
        <div className="info-label" ></div>
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-value-kh" style={{marginRight:'-1cm'}}> <span style={{color:'#ff6f00' , fontWeight:'600', fontSize:'16px'}}>An Nhơn</span> <img src={arrow}  style={{marginRight:'10px', marginLeft:'10px'}}/>TP. Hồ Chí Minh</div>
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
        <div className="info-value-kh" style={{marginRight:'-1cm'}}> <span style={{color:'#ff6f00' , fontWeight:'600', fontSize:'16px'}}>An Nhơn</span> <img src={arrow}  style={{marginRight:'10px', marginLeft:'10px'}}/>TP. Hồ Chí Minh</div>
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
        <div className="info-value-kh" style={{marginRight:'-1cm'}}> <span style={{color:'#ff6f00' , fontWeight:'600', fontSize:'16px'}}>An Nhơn</span> <img src={arrow}  style={{marginRight:'10px', marginLeft:'10px'}}/>TP. Hồ Chí Minh</div>
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
        <div className="info-value-kh" style={{marginRight:'-1cm'}}> <span style={{color:'#ff6f00' , fontWeight:'600', fontSize:'16px'}}>An Nhơn</span> <img src={arrow}  style={{marginRight:'10px', marginLeft:'10px'}}/>TP. Hồ Chí Minh</div>
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
        <div className="info-value-kh" style={{marginRight:'-1cm'}}> <span style={{color:'#ff6f00' , fontWeight:'600', fontSize:'16px'}}>An Nhơn</span> <img src={arrow}  style={{marginRight:'10px', marginLeft:'10px'}}/>TP. Hồ Chí Minh</div>
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
        <div className="info-value-kh" style={{marginRight:'-1cm'}}> <span style={{color:'#ff6f00' , fontWeight:'600', fontSize:'16px'}}>An Nhơn</span> <img src={arrow}  style={{marginRight:'10px', marginLeft:'10px'}}/>TP. Hồ Chí Minh</div>
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
        <div className="info-value-kh" style={{marginRight:'-1cm'}}> <span style={{color:'#ff6f00' , fontWeight:'600', fontSize:'16px'}}>An Nhơn</span> <img src={arrow}  style={{marginRight:'10px', marginLeft:'10px'}}/>TP. Hồ Chí Minh</div>
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
        <div className="info-value-kh" style={{marginRight:'-1cm'}}> <span style={{color:'#ff6f00' , fontWeight:'600', fontSize:'16px'}}>An Nhơn</span> <img src={arrow}  style={{marginRight:'10px', marginLeft:'10px'}}/>TP. Hồ Chí Minh</div>
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
        <div className="info-value-kh" style={{marginRight:'-1cm'}}> <span style={{color:'#ff6f00' , fontWeight:'600', fontSize:'16px'}}>An Nhơn</span> <img src={arrow}  style={{marginRight:'10px', marginLeft:'10px'}}/>TP. Hồ Chí Minh</div>
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
        <div className="info-value-kh" style={{marginRight:'-1cm'}}> <span style={{color:'#ff6f00' , fontWeight:'600', fontSize:'16px'}}>An Nhơn</span> <img src={arrow}  style={{marginRight:'10px', marginLeft:'10px'}}/>TP. Hồ Chí Minh</div>
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
        <div className="info-value-kh" style={{marginRight:'-1cm'}}> <span style={{color:'#ff6f00' , fontWeight:'600', fontSize:'16px'}}>An Nhơn</span> <img src={arrow}  style={{marginRight:'10px', marginLeft:'10px'}}/>TP. Hồ Chí Minh</div>
          <div className="info-value">Giường</div>
          <div className="info-value">639km</div>
          <div className="info-value">11 giờ 30 phút</div>
          <div className="info-value">280,000đ</div>
          <div className="info-value">
            <button className="search-button">Tìm chuyến xe</button>
          </div>
        </div>
        <div className="info-row">
        <div className="info-value-kh" style={{marginRight:'-1cm'}}> <span style={{color:'#ff6f00' , fontWeight:'600', fontSize:'16px'}}>An Nhơn</span> <img src={arrow}  style={{marginRight:'10px', marginLeft:'10px'}}/>TP. Hồ Chí Minh</div>
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
