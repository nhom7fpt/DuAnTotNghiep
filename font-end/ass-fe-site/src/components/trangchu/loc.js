import React, { useState, useEffect } from "react";
import "../../css/loc.css";
import pickup from "../../image/pickup.svg";
import station from "../../image/station.svg";
import deleteicon from "../../image/trangchu/delete.svg";
import { Drawer } from "antd";
import DatVeForm from "../datVe/DatVeForm";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";
import { loadDataFieldTC,loadDataFieldTCReturn } from "../../redux/actions/actionListTC";
function SeatSelection(props) {
  const {
    fieldDataTC,
  
    loadDataFieldTCReturn,
  } = props;

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

  const handleSeatModal = (trip) => {
    setCurrentTrip(trip);
    setIsSeatModalOpen(true);
  };
 
useEffect(() => {
 

}, []);


  return (
    <div>
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
      <div className="custom-container-loc">
        <div className="hidden-text">
          <span>Đà Nẵng - TP. Hồ Chí Minh</span>
        </div>
       
        <div className="chuyenxe-loc">
          <div className="info-container-loc">
            <span className="departure-time">10:15</span>
            <div className="location-details">
              <img src={pickup} alt="pickup" />
              <span className="separator">
                {" "}
                . . . . . . . . . . . . . . . . . . . . . . .{" "}
              </span>
              <span
                className="travel-duration"
                style={{ marginLeft: "-0.08cm" }}
              >
                <span style={{ marginLeft: "-0.3cm" }}>20 giờ </span>
                <br />
                <span className="small-text">(Asian/Ho Chi Minh)</span>
              </span>
              <span className="separator">
                . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
              </span>
              <img src={station} alt="station" />
            </div>
            <span className="arrival-time">06:15</span>
          </div>

          <div className="location-info">
            <div className="location">
              <span className="location-name"></span>
              <br />
              <span className="location-info-text text-gray"></span>
            </div>
            <div className="location text-right">
              <span className="location-name"></span>
              <br />
              <span className="location-info-text text-gray"></span>
            </div>
          </div>
       
          <hr className="divider my-3" />
          <div className="availability-info">
            <div className="availability-details">
              <span className="ticket-price text-orange">400.000đ</span>
              <div className="availability-dot"></div>
              <span className="seat-type">Giường</span>
              <div className="availability-dot"></div>
              <span className="available-seats text-orange">19 chỗ trống</span>
          
            <button type="button" className="custom-button">
            <span onClick={() => handleSeatModal("trip1")}>Chọn chuyến</span>
          </button>
            </div>
          
          </div>
        </div>
        <Drawer
          title="Đặt vé xe"
          placement="right"
          closable={false}
          onClose={onClose}
          open={isSeatModalOpen}
          key={currentTrip}
          size="large"
        >
          <DatVeForm onClose={onClose} />
        </Drawer>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  fieldDataTC: state.ListTCReducer.fieldDataTC,
});

const mapDispatchToProps = {
  loadDataFieldTC,
  
  loadDataFieldTCReturn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SeatSelection));
