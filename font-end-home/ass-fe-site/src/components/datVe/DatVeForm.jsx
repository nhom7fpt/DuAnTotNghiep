import React, { useState } from "react";
import { Row, Steps, Col, Divider, Button } from "antd";
import ChonCho from "./ChonCho";
import ChonDiemTra from "./ChonDiemTra";
import ThongTinForm from "./ThongTinForm";
import pickup from "../../image/pickup.svg";
import station from "../../image/station.svg";
import { SeatSelectionProvider } from "./SeatSelectionContext";
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

  return (
   
     <SeatSelectionProvider>
    <div className="info-container-loc">
    <span className="departure-time">10:15</span>
    <div className="location-details">
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
    </div>
    <span className="arrival-time">06:15</span>
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
          {steps === 1 && <ChonDiemTra />}
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
export default DatVeForm;
