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

import { listSearchOneWay, listSearchReturn, loadDataField } from "../../redux/actions/actionSearch";
import PayService from "../../services/PayService";
import Thongtinchuyendi from "../datvethanhcong/thongtinchuyendi";

const DatVeForm = (props) => {
  const [steps, setSteps] = useState(0);
  const [choNgoi, setChoNgoi] = useState([]);
  const [noiTra, setNoiTra] = useState("");
  const [custom, setCustom] = useState(props.custom || "");
  const [chuyenTab1, setChuyenTab1] = useState(props.chuyenTab1);
  const [chuyenTab2, setChuyenTab2] = useState(props.chuyenTab2);
  const user = localStorage.getItem("username");
  const { navigate } = props.router;
  const [tongTien, setTongTien] = useState(0);

  const onNext = (values) => {
    switch (steps) {
      case 0:
        setChoNgoi(values);
        console.log(values);
        break;
      case 1:
        setNoiTra(values);
        console.log(values);
        break;
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

  const handlePayment = async () => {
    const tongTien = chuyenTab1.tuyenXe.gia * choNgoi.length;
    setTongTien(tongTien);

    const currentDate = moment();
    const formattedDate = currentDate.format("YYYY-MM-DD");

    if (custom.anhDaLuu) {
      const newCus = { hoTen: custom.hoTen, email: custom.email, soDT: custom.soDT };
      setCustom(newCus);
    }

    const sl = choNgoi && choNgoi.length;

    const newData = {
      chuyenXe: chuyenTab1,
      chuyenXeVe: chuyenTab2, // Thêm chuyenXeVe vào dữ liệu
      noiTra: noiTra,
      info: { ...custom, ngayDatVe: formattedDate },
      tongTien: tongTien,
      choNgoi: choNgoi,
      soLuong: sl,
    };

    console.log("Dữ liệu đi:", newData);

    const service = new PayService();
    const res = await service.creatpay(newData);

    try {
      if (res && res.data) {
        window.location.href = res.data;
      } else {
        console.error("URL thanh toán không khả dụng!");
      }
    } catch (error) {
      console.error("Lỗi khi gọi loadDataPay:", error);
    }
  };
  return (
    <SeatSelectionProvider>
      {/* Hiển thị thông tin từ chuyenTab1 */}
      <div className="info-container-loc" key={props.chuyenTab1.maChuyen}>
        <span className="departure-time">{props.chuyenTab1.tuyenXe.tgDi}</span>
        <img src={pickup} alt="pickup" />
        <span className="separator">
        {" "}
          . . . . . . . . . . . . . . . . . . . . 
          {" "}
        </span>
        <span className="travel-duration" style={{ marginLeft: "-0.08cm" }}>
          <span style={{ marginLeft: "0.8cm" }}>20 giờ </span>
          <br />
          <span className="small-text">(Asian/Ho Chi Minh)</span>
        </span>
        <span className="separator">
          . . . . . . . . . . . . . .
          . . . . . . . . . . . . {" "}
          </span>
        <img src={station} alt="station" />
        <span className="arrival-time">{props.chuyenTab1.tuyenXe.tgDen}</span>
      </div>

      {/* Hiển thị thông tin từ chuyenTab2 */}
      <div className="info-container-loc" key={props.chuyenTab2.maChuyen}>
        <span className="departure-time">{props.chuyenTab2.tuyenXe.tgDi}</span>
        <img src={pickup} alt="pickup" />
        <span className="separator">
          {" "}
          . . . . . . . . . . . . . . . . . . . . 
          {" "}
          </span>
          <span className="travel-duration" style={{ marginLeft: "-0.08cm" }}>
          <span style={{ marginLeft: "0.8cm" }}>20 giờ </span>
          <br />
          <span className="small-text">(Asian/Ho Chi Minh)</span>
          </span>
          <span className="separator">
          . . . . . . . . . . . . . .
          . . . . . . . . . . . . {" "}
          </span>
          <img src={station} alt="station" />
          <span className="arrival-time">{props.chuyenTab2.tuyenXe.tgDen}</span>
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
            {steps === 0 && <ChonCho onClose={onClose} onNext={onNext} />}
            {steps === 1 && <ChonDiemTra chuyen={props.chuyenTab1 || props.chuyenTab2} onNext={onNext} onPrev={onPrev} />}
            {steps === 2 && <ThongTinForm custom={custom} updateCustom={updateCustom} />}
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
  listChuyen: state.SearchReducer.listChuyen,
  custom: state.CustomReducer.custom,
  listChuyenReturn1: state.SearchReducer.listChuyenReturn1,
  listChuyenReturn2: state.SearchReducer.listChuyenReturn2,
  fieldData: state.SearchReducer.fieldData,
  listData: state.Oderhistory.listData,
  loadData: state.PayReducer.loadData,
});

const mapDispatchToProps = {
  listSearchOneWay,
  listSearchReturn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DatVeForm));