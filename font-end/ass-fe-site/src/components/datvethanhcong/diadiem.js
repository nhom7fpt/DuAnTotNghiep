import React from 'react';

import './dvtc.css'; 

const Diadiem = () => {
  return (
   <>
    <div className="điemon-dv" style={{ width: '700px', marginLeft: '4.6cm' }}>
    <div className="">
      <div className="">
        <div className="page-title-dv" style={{width:'100px', marginLeft:'-0.45cm'}}>Điểm đón</div>
        <div className="title"style={{ textAlign: 'justify', width:'200px', marginLeft:'-0.4cm',  fontSize:'13px',fontWeight:'500px', lineHeight:'21px' }}>Bến xe trung tâm Đà Nẵng</div>
        <div className="" style={{ textAlign: 'justify', marginLeft:'-0.3cm', fontSize:'11px', marginBottom:'10px', marginTop:'10px'}}>
          185 Tôn Đức Thắng
        </div>
        <a href="https://www.google.com/maps/search/?api=1&amp;query=16.0565364,108.1725454" target="_blank" className="StyledComponents__Link-sc-1fcpe3g-12 eomUrd" style={{marginLeft:'-17cm',textAlign: 'justify'}}>
          Xem bản đồ
        </a>
        <div className="" style={{ marginTop: '14px' }}>
          <p style={{marginLeft:'-13.8cm'}}>Đón lúc: <strong>21:15 • T7, 16/09/2023</strong></p>
        </div>
      </div>
    </div>
  </div>
  <div className="điemtra-dv"style={{ width: '700px', marginLeft: '4.6cm' }}>
    <div className="page-title-dv" style={{textAlign: 'justify',marginLeft:'-0.2cm'}}>Điểm trả</div>
    <div className="" style={{width:'140px', marginLeft:'-0.2cm', marginTop:'10px'}}>Khu du lịch Măng Đen</div>
    <div className="" style={{width:'280px', marginLeft:'-1cm',  fontSize:'11px', marginBottom:'10px', marginTop:'10px'}} >
      Đường Số 8, Thôn Măng Đen, Xã Đắk Long
    </div>
    <a href="https://www.google.com/maps/search/?api=1&amp;query=14.6028953,108.2911189" target="_blank" className="StyledComponents__Link-sc-1fcpe3g-12 eomUrd" style={{marginLeft:'-17cm'}}>
      Xem bản đồ
    </a>
    <div className="StyledComponents__Content-sc-1fcpe3g-10 bQzlse" style={{ marginTop: '14px' }}>
      <p style={{marginLeft:'-14cm'}}>Trả lúc: <strong>06:45 • CN, 17/09/2023</strong></p>
    </div>
  </div>
  </>
  );
};

export default Diadiem;
