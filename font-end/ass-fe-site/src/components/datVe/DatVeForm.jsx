import React, { useState } from "react";
import { Row, Steps, Col, Divider, Button } from "antd";
import ChonCho from "./ChonCho";
import ChonDiemTra from "./ChonDiemTra";
import ThongTinForm from "./ThongTinForm";
import pickup from "../../image/pickup.svg";
import station from "../../image/station.svg";
import { SeatSelectionProvider } from "./SeatSelectionContext";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/vi";
import withRouter from "../../helpers/withRouter";

import { listSearchOneWay,listSearchReturn,loadDataField } from "../../redux/actions/actionSearch";
const DatVeForm = (props) => {
  const [steps, setSteps] = useState(0);
  const [choNgoi,setChoNgoi] = useState([]);
  const [noiTra,setNoiTra] = useState("");
  const [custom, setCustom] = useState(props.custom || "");
  const user = localStorage.getItem("username");
  const onNext = (values) => {
    switch (steps) {
      case 0:
        setChoNgoi(values);  
        console.log(values); 
        break;
      case 1:
        setNoiTra(values);
        console.log(values);
        break 
      default:
        break;
    }
    setSteps(steps + 1);
  };

  const updateCustom = (newCustom) => {
    setCustom(newCustom);
  };

  const onPrev = () => {
    setSteps(steps - 1);
  };

  const onClose = () => {
    props.onClose();
  };
  const handlePayment = () => {
    const { chuyen } = props;
    const tongTien = chuyen.tuyenXe.gia * choNgoi.length;

    const currentDate = moment(); // Lấy ngày hiện tại sử dụng moment
    const formattedDate = currentDate.format("YYYY-MM-DD"); // Format ngày giống với ngày trả về từ máy chủ

    if (custom.anhDaLuu) {
      const newCus = { hoTen: custom.hoTen, email: custom.email, soDT: custom.soDT };
      setCustom(newCus);
    }

    const newData = {
      chuyen: chuyen,
      noiTra: noiTra,
      info: { ...custom, ngayDatVe: formattedDate },
      tongTien: tongTien,
      choNgoi: choNgoi
    };

    console.log("Dữ liệu đi:", newData);
  };

  const { chuyen} = props;
  return (
   
    <SeatSelectionProvider>

    
   <div className="info-container-loc" key={chuyen.maChuyen}>
  
     <div className="location-details">
     <span className="departure-time">{chuyen.tuyenXe.tgDi}</span>
       <img src={pickup} alt="pickup" />
       <span className="separator">
         {" "}
         . . . . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
       </span>
       <span
         className="travel-duration"
         style={{ marginLeft: "-0.08cm" }}
       >
         <span style={{ marginLeft: "0.8cm" }}>20 giờ </span>
         <br />
         <span className="small-text">(Asian/Ho Chi Minh)</span>
       </span>
       <span className="separator">
         . . . . . . . . . . . . . . . . . . . . . . . . . . . {" "}
       </span>
       <img src={station} alt="station" />
       <span className="arrival-time">{chuyen.tuyenXe.tgDen}</span>
     </div>
      
 

  
 </div>

     <Row>
       <Col md={24}>
         <Steps
           current={steps}
           items={[
             {
               title: "Chỗ mong muốn",
             },
             {
               title: "Điểm đón trả",
             },
             {
               title: "Nhập thông tin",
             },
           ]}
         />
       </Col>
     </Row>
     <Row>
       <Col md={24}>
         {steps === 0 && <ChonCho onClose={onClose} onNext={onNext}/>}
         {steps === 1 && <ChonDiemTra chuyen={chuyen} onNext={onNext} onPrev={onPrev}/>}
         {steps === 2 && <ThongTinForm custom={custom} updateCustom={updateCustom}/>}
       </Col>
     </Row>
   
     <Row style={{ float: "right" }}>
      
       {steps === 2 && <Button type="primary" onClick={handlePayment}>Thanh toán</Button>}
       {steps === 2 && (
         <Button
           type="primary"
           style={{ margin: "0 8px" }}
           onClick={() => onPrev()}
         >
           Trở lại
         </Button>
       )}
       {steps === 2 && (
         <Button type="primary" style={{ margin: "0 8px" }} onClick={onClose}>
           Hủy
         </Button>
       )}
     </Row>
     </SeatSelectionProvider>

  );
};

const mapStateToProps = (state) => ({
  listChuyen:state.SearchReducer.listChuyen,
  custom: state.CustomReducer.custom,
  listChuyenReturn1:state.SearchReducer.listChuyenReturn1,
  listChuyenReturn2:state.SearchReducer.listChuyenReturn2,
  fieldData: state.SearchReducer.fieldData,
  listData: state.Oderhistory.listData,
  
});

const mapDispatchToProps = {
  listSearchOneWay,
  listSearchReturn,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DatVeForm));
