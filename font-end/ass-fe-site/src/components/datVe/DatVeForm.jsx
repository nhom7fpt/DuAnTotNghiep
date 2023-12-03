import React, { useState } from "react";
import { Row, Steps, Col, Divider, Button } from "antd";
import ChonCho from "./ChonCho";
import ChonDiemTra from "./ChonDiemTra";
import ThongTinForm from "./ThongTinForm";
import pickup from "../../image/pickup.svg";
import station from "../../image/station.svg";
import { SeatSelectionProvider } from "./SeatSelectionContext";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";
import { listSearchOneWay,listSearchReturn,loadDataField } from "../../redux/actions/actionSearch";
const DatVeForm = (props) => {
  const [steps, setSteps] = useState(0);

  const onNext = () => {
    setSteps(steps + 1);
  };

  const onPrev = () => {
    setSteps(steps - 1);
  };

  const onClose = () => {
    props.onClose();
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
         {steps === 0 && <ChonCho />}
         {steps === 1 && <ChonDiemTra chuyen={chuyen}/>}
         {steps === 2 && <ThongTinForm />}
       </Col>
     </Row>
     <Divider />
     <Row style={{ float: "right" }}>
       {steps < 2 && (
         <Button type="primary" onClick={() => onNext()}>
           Tiếp tục
         </Button>
       )}
       {steps === 2 && <Button type="primary">Thanh toán</Button>}
       {steps > 0 && (
         <Button
           type="primary"
           style={{ margin: "0 8px" }}
           onClick={() => onPrev()}
         >
           Trở lại
         </Button>
       )}
       {steps === 0 && (
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
  listChuyenReturn1:state.SearchReducer.listChuyenReturn1,
  listChuyenReturn2:state.SearchReducer.listChuyenReturn2,
  fieldData: state.SearchReducer.fieldData,
  
});

const mapDispatchToProps = {
  listSearchOneWay,
  listSearchReturn,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DatVeForm));
