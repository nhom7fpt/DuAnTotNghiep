import React from 'react';
import { connect } from 'react-redux';
import withRouter from '../../helpers/withRouter';

function Titledvtc (props)  {
  const { custom } = props;
  return (
   <article className="datvethanhcong">
   <div className="card-body" style={{ marginLeft: '4cm' }}>
     <div className="page-title-dv" style={{marginBottom:'10px', marginLeft:'-0.7cm'}}>Đặt chỗ thành công</div>
     <div className="content">
       <div className="notification-dvtc" style={{ width: '637px', marginLeft:'-1.6cm' }}>
         <span style={{width:'650px', textAlign:'justify', marginLeft:'20px'}}>
           Thông tin chuyến đi đã được gửi đến <strong >{custom.email}</strong>, bạn hãy kiểm tra nhé!
         </span>
       </div>
       <div className="subtitle" style={{ color: '#484848', marginTop: '10px', fontWeight: 700, lineHeight: '24px', width:'100px', marginLeft:'-0.3cm'}}>
         Thông tin vé
       </div>
       <div className="subtitle" style={{ marginTop: '10px',width:'100px', marginLeft:'-0.5cm'}}>
         Biển số xe
       </div>
       <div style={{ position: 'relative', marginTop: '5px', width:'120px',  marginLeft:'-0.1cm' }}>
         <button type="button" className="subtitle-bien">
           82B-004.85
         </button>
       </div>

       <div className="subtitle" style={{ marginTop: '10px',width:'100px' , marginLeft:'-0.3cm'}}>
         Số điện thoại
       </div>
       <div className="list-contact" style={{ position: 'static' }}>
         <div>
           <div>
             <div className="phone-number" style={{ marginBottom: '-20px',width:'70px' ,marginLeft:'-0.35cm', fontWeight:'bold'}}>
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
           <div className="phone-number" style={{width:'60px',marginLeft:'-0.2cm', marginBottom: '-20px',  fontWeight:'bold'}}>Hotline:</div>
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
  );
};


const mapStateToProps = (state) => ({
  custom: state.CustomReducer.custom,
});

export default connect(mapStateToProps)(withRouter(Titledvtc));
