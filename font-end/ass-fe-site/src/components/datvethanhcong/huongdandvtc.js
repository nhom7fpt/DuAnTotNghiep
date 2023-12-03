import React from 'react';

import './dvtc.css'; 

const Huongdandvtc = () => {
  return (
   <>
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

 <article className="payment-info" style={{ width: '700px', marginLeft: '4.3cm' }}>
   <div className="page-title-dv">Hướng dẫn thanh toán</div>
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
  </>
  );
};

export default Huongdandvtc;
