import React, { useState, useEffect } from "react";
import "../../css/loc.css";
import pickup from "../../image/pickup.svg";
import station from "../../image/station.svg";
import deleteicon from "../../image/trangchu/delete.svg";
import { Col, Drawer, Row,Pagination  } from "antd";
import DatVeForm from "../datVe/DatVeForm";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";
import { listSearchOneWay,listSearchReturn,loadDataField } from "../../redux/actions/actionSearch";

function SeatSelection(props) {

  const [selectedChuyen, setSelectedChuyen] = useState()
  const [selectedCar, setSelectedCar] = useState([]);
  const [selectedChar, setSelectedChar] = useState([]);
  const [isSeatModalOpen, setIsSeatModalOpen] = useState(false);

  const [selectedFloor, setSelectedFloor] = useState([]);

  const [currentTrip, setCurrentTrip] = useState(null);
  const onClose = () => {
    setIsSeatModalOpen(false);
  };

  const handlecarClick = (button) => {
    if (selectedCar.includes(button)) {
      setSelectedCar(selectedCar.filter((name) => name !== button));
    } else if (selectedCar.length < 3) {
      setSelectedCar([...selectedCar, button]);
    }
  };
  const handlecharClick = (button) => {
    if (selectedChar.includes(button)) {
      setSelectedChar(selectedChar.filter((name) => name !== button));
    } else if (selectedChar.length < 3) {
      setSelectedChar([...selectedChar, button]);
    }
  };
  const handlefloorClick = (button) => {
    if (selectedFloor.includes(button)) {
      setSelectedFloor(selectedFloor.filter((name) => name !== button));
    } else if (selectedFloor.length < 3) {
      setSelectedFloor([...selectedFloor, button]);
    }
  };

  const handleSeatModal = (data) => {
    setCurrentTrip();
    setIsSeatModalOpen(true);
    setSelectedChuyen(data);
  };
  const { listChuyen } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return listChuyen.slice(startIndex, endIndex);
  };
  
  const totalPages = Math.ceil(listChuyen.length / pageSize);
  
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
useEffect(() => {
 
}, []);

let isLocationDisplayed = false;
  return (
<div className="grid-container-loc">
 
      <div className="container-loc" style={{ marginLeft: "5cm" }}>
         <div className="title" style={{marginLeft:'0.5cm'}}>Bộ lọc tìm kiếm</div>
       
        <div class="flex cursor-pointer gap-2 text-[#E12424]" style={{marginLeft:'7cm', marginTop:'-1cm'}}>Bỏ lọc<img src={deleteicon} width="22" height="22" alt="delete"/></div>
        <div className="divide"></div>
        <div className="filter">
          <div className="filter-label">Giờ đi</div>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" id="morning" />
              <div className="checkbox-custom"></div>
              <span className="checkbox-text">
                Sáng sớm 00:00 - 06:00
                <span className="checkbox-checkmark"></span>
              </span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" id="morning2" />
              <div className="checkbox-custom"></div>
              <span className="checkbox-text">
                Buổi sáng 06:00 - 12:00
                <span className="checkbox-checkmark"></span>
              </span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                id="afternoon"
              />
              <div className="checkbox-custom"></div>
              <span className="checkbox-text">
                Buổi chiều 12:00 - 18:00
                <span className="checkbox-checkmark"></span>
              </span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" id="evening" />
              <div className="checkbox-custom"></div>
              <span className="checkbox-text">
                Buổi tối 18:00 - 24:00
                <span className="checkbox-checkmark"></span>
              </span>
            </label>
          </div>
          <div className="divide"></div>
          <div className="filter">
          <div className="filter-label">Loại xe</div>
          <div className="checkbox-group-loaixe">
            <button
              className={`checkbox-button-loaixe ${selectedCar.includes("seat1") ? "active" : ""}`}
              onClick={() => handlecarClick("seat1")}
              style={{width:'51px', marginLeft:'20px'}}
            >
              Ghế
            </button>
            <button
              className={`checkbox-button-loaixe ${selectedCar.includes("bed") ? "active" : ""}`}
              onClick={() => handlecarClick("bed")}
              style={{width:'70px'}}
            >
              Giường
            </button>
            <button
              className={`checkbox-button-loaixe ${selectedCar.includes("cart") ? "active" : ""}`}
              onClick={() => handlecarClick("cart")}
              style={{width:'88px'}}
            >
              Limousine
            </button>
          </div>
        </div>

          <div className="divide"></div>
          <div className="filter">
            <div className="filter-label">Hàng ghế</div>
            <div className="checkbox-group-loaixe">
            <button
              className={`checkbox-button-loaixe ${selectedChar.includes("seat1") ? "active" : ""}`}
              onClick={() => handlecharClick("seat1")}
              style={{width:'88px', marginLeft:'20px'}}
            >
              Hàng đầu
            </button>
            <button
              className={`checkbox-button-loaixe ${selectedChar.includes("bed") ? "active" : ""}`}
              onClick={() => handlecharClick("bed")}
              style={{width:'92px'}}
            >
            Hàng Giữa
            </button>
            <button
              className={`checkbox-button-loaixe ${selectedChar.includes("cart") ? "active" : ""}`}
              onClick={() => handlecharClick("cart")}
              style={{width:'88px'}}
            >
            Hàng Cuối
            </button>
          </div>
          </div>
          <div className="divide"></div>
          <div className="filter">
          <div className="filter-label">Tầng</div>
          <div className="checkbox-group-loaixe">
          <button
            className={`checkbox-button-loaixe ${selectedFloor.includes("seat1") ? "active" : ""}`}
            onClick={() => handlefloorClick("seat1")}
            style={{width:'88px', marginLeft:'20px'}}
          >
            Tầng trên
          </button>
          <button
            className={`checkbox-button-loaixe ${selectedFloor.includes("bed") ? "active" : ""}`}
            onClick={() => handlefloorClick("bed")}
            style={{width:'92px'}}
          >
          Tầng dưới
          </button>
         
        </div>
        </div>
        </div>
        </div>
     {getCurrentPageData().map((item, index)=>(
      <Row className="custom-container-loc" key={item.maChuyen}>
      {index === 0 && (
        <div className="hidden-text">
          <span>{item.tuyenXe.diemDi} - {item.tuyenXe.diemDen}</span>
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
            <span className="location-name">{item.tuyenXe.noiDon}</span>
            <br />
            <span className="location-info-text text-gray"></span>
          </div>
          <div className="location text-right">
            <span className="location-name">{item.tuyenXe.noiTra}</span>
            <br />
            <span className="location-info-text text-gray"></span>
          </div>
        </div>
          <hr className="divider my-3" />
          <Col span={24} className="availability-info">
            <div className="availability-details">
            <span className="ticket-price text-orange">{item.tuyenXe.gia}</span>
              <div className="availability-dot"></div>
              <span className="seat-type">Giường</span>
              <div className="availability-dot"></div>
              <span className="available-seats text-orange">19 chỗ trống</span>
              <span className="btn" style={{color:'blue'}} onClick={() => handleSeatModal(item)}>chọn ghế</span>
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
     )
        
      )

     }

    
     </div>
  );
}


const mapStateToProps = (state) => ({
  listChuyen:state.SearchReducer.listChuyen,
  listChuyenReturn1:state.SearchReducer.listChuyenReturn1,
  listChuyenReturn2:state.SearchReducer.listChuyenReturn2,
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
