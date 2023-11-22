import React from 'react';
import './dvtc.css'; 

const Datvethanhcong = () => {
  return (
    <div className='pagedatvethanhcong'>
      <article className="datvethanhcong">
        <div className="card-body" style={{ marginLeft: '4cm' }}>
          <div className="page-title-dv" style={{marginBottom:'10px', marginLeft:'-0.5cm'}}>Đặt chỗ thành công</div>
          <div className="content">
            <div className="notification-dvtc" style={{ width: '637px', marginLeft:'-1.55cm' }}>
              <span>
                Thông tin chuyến đi đã được gửi đến <strong>kieuoanh@gmail.com</strong>, bạn hãy kiểm tra nhé!
              </span>
            </div>
            <div className="subtitle" style={{ color: '#484848', marginTop: '10px', fontWeight: 700, lineHeight: '24px', width:'100px', marginLeft:'-0.3cm'}}>
              Thông tin vé
            </div>
            <div className="subtitle" style={{ marginTop: '10px',width:'100px', marginLeft:'-0.5cm'}}>
              Biển số xe
            </div>
            <div style={{ position: 'relative', marginTop: '5px', width:'120px',  marginLeft:'-0.1cm' }}>
              <button type="button" className="subtitle-bien">s
                82B-004.85
              </button>
            </div>

            <div className="subtitle" style={{ marginTop: '10px',width:'100px' , marginLeft:'-0.3cm'}}>
              Số điện thoại
            </div>
            <div className="list-contact" style={{ position: 'static' }}>
              <div>
                <div>
                  <div className="phone-number" style={{ marginBottom: '-20px',width:'70px' ,marginLeft:'-0.35cm'}}>
                    Tài xế 1
                  </div>
                  <div className="phone-number" style={{ marginLeft: '5cm', width: '130px'}}>
                    <a href="tel:0379882881">
                      <img src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/phone.svg" width="16px" height="16px" alt="phone icon" />
                      0379882881
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="phone-number" style={{width:'60px',marginLeft:'-0.25cm', marginBottom: '-20px'}}>Hotline:</div>
                <div className="phone-number" style={{ marginLeft: '5.1cm', width: '130px' }}>
                  <a href="tel:0949839839">
                    <img src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/phone.svg" width="16px" height="16px" alt="phone icon" />
                    0949 839 839
                  </a>
                </div>
              </div>
              <br />
              <div className="subtitle" style={{ width: '637px', fontSize: '14px', fontWeight:'500',lineHeight:'21px',textAlign: 'justify'}}>
                <b>Lưu ý:</b> Mọi thông tin về chuyến đi (bao gồm biển số xe, số điện thoại tài xế,...) sẽ được Vexere thông báo đến quý khách qua
                email ngay sau khi nhà xe cập nhật thông tin. Thông thường nhà xe sẽ cập nhật thông tin này trễ nhất 15-30 phút trước giờ khởi hành tùy thuộc vào kế hoạch của nhà xe.
              </div>

              <div className="subtitle" style={{  width: '637px', fontSize: '14px', fontWeight:'500',lineHeight:'21px',textAlign: 'justify' }}>Nếu gặp vấn đề khi ra xe, quý khách vui lòng liên hệ theo số Hotline nhà xe.</div>
            </div>
          </div>
        </div>
      </article>

      <article className="card-lenxe">
        <div className="body-lenxe">
          <div className="page-title-dv">
            <div className="" style={{marginLeft:'-1.2cm'}}>Hướng dẫn lên xe</div>
            <div className="title-lenxe" style={{width:'637px',textAlign: 'justify'}}>
              <span style={{ fontSize: '14px' ,fontWeight:'500',lineHeight:'21px',color:'black'}}>
                Bạn cần ra điểm đón trước 15 phút, đưa email xác nhận thanh toán của Vexere cho nhân viên văn phòng vé để đổi chứng từ giấy
              </span>
               <br />
              <span style={{ fontSize: '14px',fontWeight:'500',lineHeight:'21px',color:'black'}}>
                Khi lên xe, bạn xuất trình chứng từ giấy cho tài xế hoặc phụ xe.
              </span>
            </div>
          </div>
        </div>
      </article>

      <article className="payment-info" style={{ width: '700px', marginLeft: '4.5cm' }}>
        <div className="page-title-dv" style={{marginLeft:'-0.2cm'}}>Hướng dẫn thanh toán</div>
        <div className="">
          <p style={{width:'280px'}}>1. Bạn đến một trong các địa điểm dưới đây:</p>
          <p className="toggle-bus-agent" style={{width:'200px'}}>Xem địa chỉ văn phòng nhà xe</p>
        </div>
        <div className="">
          <p style={{width:'610px'}}>2. Báo với nhân viên là bạn cần thanh toán vé xe đã đặt ở Vexere và làm theo hướng dẫn của họ.</p>
        </div>
        <div className="" style={{width:'45px', fontWeight:'bold',lineHeight:'21px'}}>Lưu ý:</div>
        <div className=""style={{ fontWeight:'500',lineHeight:'21px',textAlign: 'justify' }}>
          <p>Vé của bạn chỉ được giữ chỗ đến <strong>17:16 • T5, 16/11/2023</strong>. Vui lòng thanh toán trước thời điểm này, nếu không vé của bạn sẽ bị hủy.</p>
        </div>
      </article>
      <div className="điemon-dv" style={{ width: '700px', marginLeft: '4.6cm' }}>
        <div className="">
          <div className="">
            <div className="page-title-dv" style={{width:'100px', marginLeft:'-0.45cm'}}>Điểm đón</div>
            <div className="title"style={{ textAlign: 'justify', width:'200px', marginLeft:'-0.4cm',  fontSize:'13px',fontWeight:'500px', lineHeight:'21px' }}>Bến xe trung tâm Đà Nẵng</div>
            <div className="" style={{ textAlign: 'justify', marginLeft:'-0.3cm'}}>
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
      <div className="điemtra-dv">
        <div className="page-title-dv" style={{marginLeft:'-1.8cm'}}>Điểm trả</div>
        <div className="" style={{width:'140px', marginLeft:'-0.2cm'}}>Khu du lịch Măng Đen</div>
        <div className="" style={{width:'280px', marginLeft:'-0.3cm'}} >
          Đường Số 8, Thôn Măng Đen, Xã Đắk Long
        </div>
        <a href="https://www.google.com/maps/search/?api=1&amp;query=14.6028953,108.2911189" target="_blank" className="StyledComponents__Link-sc-1fcpe3g-12 eomUrd" style={{marginLeft:'-17cm'}}>
          Xem bản đồ
        </a>
        <div className="StyledComponents__Content-sc-1fcpe3g-10 bQzlse" style={{ marginTop: '14px' }}>
          <p style={{marginLeft:'-14cm'}}>Trả lúc: <strong>06:45 • CN, 17/09/2023</strong></p>
        </div>
      </div>

      <div className="thongtinchuyendi" style={{ marginRight: '5cm', marginTop: '-28.5cm', width:'317px' }}>
        <article className="card ticket-info">
          <div className="card-header">
            <h5 className="card-title">Thông tin chuyến đi</h5>
          </div>
          <div className="card-body">
          <div className="info-row-dvtc">
          <div>MÃ ĐƠN HÀNG</div>
          <div>45T9Q0G</div>
        </div>
        <div className="info-row-dvtc">
          <div>HỌ TÊN</div>
          <div>Kiều Oanh</div>
        </div>
        <div className="info-row-dvtc">
          <div>SỐ ĐIỆN THOẠI</div>
          <div>0337316703</div>
        </div>
        <div className="info-row-dvtc">
          <div >SỐ CMND/CCCD</div>
          <div></div>
        </div>
        <div className="info-row-dvtc">
          <div>EMAIL</div>
          <div >kieuoanh@gmail.com</div>
        </div>
        <div className="info-row-dvtc">
          <div>NHÀ XE</div>
          <div>Phượng Thu</div>
        </div>
        <div className="info-row-dvtc">
          <div>TUYẾN ĐƯỜNG</div>
          <div>Đà Nẵng - Kon Tum</div>
        </div>
        <div className="info-row-dvtc">
          <div>LOẠI XE</div>
          <div>Giường nằm 44 chỗ</div>
        </div>
        <div className="info-row-dvtc" >
          <div>MÃ GHẾ</div>
          <div >B3</div>
        </div>
          </div>
        </article>

        <article className="card transaction-info">
          <div className="card-header">
            <h5 className="card-title">Thông tin giao dịch</h5>
          </div>
          <div className="card-body">
            <section className="info-row-dvtc">
              <div>Phương thức thanh toán</div>
              <div>Thẻ thanh toán quốc tế</div>
            </section>
            <section className="info-row-dvtc">
              <div>Trạng thái</div>
              <div>Đặt chỗ thành công</div>
            </section>
            <section className="info-row-dvtc">
              <div>Giá vé</div>
              <div style={{ marginTop: '-1cm' }}>
                <div style={{ height: '50px' }}>
                  <div style={{ textAlign: 'right' }}>1 x 250.000 ₫</div>
                  <div style={{ color: 'rgb(77, 77, 77)', textAlign: 'right' }}>Giường B3</div>
                </div>
              </div>
            </section>
            <section className="info-row-dvtc">
              <div style={{ fontSize: '14px', color: 'black' }}>Tổng tiền</div>
              <div style={{ fontSize: '14px', color: '#000' }}>250.000 ₫</div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Datvethanhcong;
