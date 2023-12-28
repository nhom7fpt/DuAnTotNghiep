import React, { useState, useEffect } from "react";
import "../../css/loc.css";
import pickup from "../../image/pickup.svg";
import station from "../../image/station.svg";
import deleteicon from "../../image/trangchu/delete.svg";
import { Col, Drawer, Row,Pagination, Result, Button  } from "antd";
import DatVeForm from "../datVe/DatVeForm";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";
import { listSearchOneWay,listSearchReturn,loadDataField } from "../../redux/actions/actionSearch";
import Boloc from"./boloc"
import SearchService from "../../services/SearchService";
function SeatSelection(props) {
  const [hasData, setHasData] = useState(true);

  const [selectedChuyen, setSelectedChuyen] = useState()
  const [isSeatModalOpen, setIsSeatModalOpen] = useState(false);
  const [currentTrip, setCurrentTrip] = useState(null);
  const onClose = () => {
    setIsSeatModalOpen(false);
  };


  const handleSeatModal = (data) => {
    setCurrentTrip();
    setIsSeatModalOpen(true);
    setSelectedChuyen(data);
  };
  const { listChuyen, listTuyen } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  
 
  
  const totalPages = Math.ceil(listChuyen.length / pageSize);
  

  function formatCurrency(value) {
    return value ? value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : '---';
  }
   
  
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newList = listChuyen.map(i=>{
      const tuyen = listTuyen.find(t=> i.tuyenXe === t.maTuyenXe);
      return ({
        ...i,
        tuyenXe : tuyen
      })
    })
    console.log(listTuyen);
    console.log(newList);
    console.log(listChuyen);
    return newList.slice(startIndex, endIndex);
  };

let isLocationDisplayed = false;
  return (
<div className="grid-listtuyen-container-loc">
     <Boloc />
  
     {listChuyen.length === 0 ? (
      <Result
        status="404"
        title="Rất tiếc, MaiLinhTour không tìm thấy kết quả cho bạn"
      
        subTitle="không có chuyến đi nào được tìm thấy."
        extra={<Button type="primary">Quay lại trang chủ</Button>}
        className="listtuyen-404"
      />
    ) : (
      getCurrentPageData().map((item, index) => (
        
        <Row className="custom-container-loc" key={item.maChuyen}>
        {index === 0 && (
          <div className="hidden-text">
            <span>{item.tuyenXe.diemDi} - {item.tuyenXe.diemDen} ({listChuyen.length})</span>
          
          </div>
        )}
        <Col>
          <div className="chuyenxe-loc">
            <Col span={24} className="info-container-loc">
              <span className="departure-time">{item.tuyenXe.tgDi}</span>
              <div className="location-details">
                <img src={pickup} alt="pickup" />
                <span className="separator">
                  {" "}
                  . . . . . . . . . . . . . . . . . . . . . . .
                </span>
                <span
                  className="travel-duration"
                  style={{ marginLeft: "-0.08cm" }}
                >
                  <span style={{ marginLeft: "-0.3cm" }}>{item.tuyenXe.tgDi}</span>
                  <br />
                  <span className="small-text">(Asian/Ho Chi Minh)</span>
                </span>
                <span className="separator">
                  . . . . . . . . . . . . . . . . . . . . . . . . .
                </span>
                <img src={station} alt="station" />
              </div>
              <span className="arrival-time">{item.tuyenXe.tgDen}</span>
            </Col>
            <div className="location-info">
            <div className="location">
              <span className="location-name">{item.tuyenXe.diemDi}</span>
              <br />
              <span className="location-info-text text-gray"></span>
            </div>
            <div className="location text-right">
              <span className="location-name">{item.tuyenXe.diemDen}</span>
              <br />
              <span className="location-info-text text-gray"></span>
            </div>
          </div>
            <hr className="divider my-3" />
            <Col span={24} className="availability-info">
              <div className="availability-details">
              <span className="ticket-price text-orange">{formatCurrency(item.tuyenXe.gia)}</span>
                <div className="availability-dot"></div>
                <span className="seat-type">Giường</span>
                <div className="availability-dot"></div>
                <span className="available-seats text-orange" style={{width:'120px'}}>19 chỗ trống</span>
                <span className="btn-gialisttuyen" style={{color:'blue', width:'120px'}} onClick={() => handleSeatModal(item)}>chọn ghế</span>
                <button type="button" className="custom-button">
                  <span onClick={() => handleSeatModal(item)}>Chọn chuyến</span>
                </button>
              </div>
            </Col>
          </div>
        </Col>
        {index === 0 && (
          <div className="pagesizeloc">
          <Pagination
            current={currentPage}
            total={listChuyen.length}
            pageSize={pageSize}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
        )}
        <Col span={24}>
          <Drawer
            title="Đặt vé xe"
            placement="right"
            closable={false}
            onClose={onClose}
            open={isSeatModalOpen}
            key={currentTrip}
            size="large"
          >
            <DatVeForm chuyen = {selectedChuyen} onClose={onClose} />
          </Drawer>
        </Col>
      </Row>
      ))
    )}
    
     </div>
  );
}


const mapStateToProps = (state) => ({
  listChuyen:state.SearchReducer.listChuyen,
  listChuyenReturn1:state.SearchReducer.listChuyenReturn1,
  listChuyenReturn2:state.SearchReducer.listChuyenReturn2,
  listTuyen: state.SearchReducer.listTuyen,
  fieldData: state.SearchReducer.fieldData,
  
});

const mapDispatchToProps = {
  listSearchOneWay,
  listSearchReturn,
  loadDataField,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SeatSelection));
