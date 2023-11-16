import React, { useState, useEffect } from "react";
import "../css/loc.css";
import money from "../image/save_money.svg";
import seat from "../image/seat.svg";
import clock from "../image/clock.svg";
import pickup from "../image/pickup.svg";
import station from "../image/station.svg";
import { Modal } from "react-bootstrap";
import Timchuyen from "./timchuyen";
import baner1 from "../image/baner1.png";
import { Drawer } from "antd";
import DatVeForm from "./datVe/DatVeForm";
function SeatSelection() {
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [isSeatModalOpen, setIsSeatModalOpen] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [currentTrip, setCurrentTrip] = useState(null);

  const onClose = () => {
    setIsSeatModalOpen(false);
  };

  const handleIconClick = (iconName) => {
    if (selectedIcons.includes(iconName)) {
      setSelectedIcons(selectedIcons.filter((name) => name !== iconName));
    } else if (selectedIcons.length < 3) {
      setSelectedIcons([...selectedIcons, iconName]);
    }
  };


  const handleSeatModal = (trip) => {
    setCurrentTrip(trip);
    setIsSeatModalOpen(true);
  };



  return (
    <div>
      <section className="routes">
        <div className="large-image">
          <img src={baner1} alt="large" />
        </div>
        <Timchuyen />
      </section>
      <div className="container-loc" style={{ marginLeft: "5cm" }}>
        <div className="title">Bộ lọc tìm kiếm</div>
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
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" id="seat" />
                <div className="checkbox-custom"></div>
                <span className="checkbox-text">
                  Ghế
                  <span className="checkbox-checkmark"></span>
                </span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" id="bed" />
                <div className="checkbox-custom"></div>
                <span className="checkbox-text">
                  Giường
                  <span className="checkbox-checkmark"></span>
                </span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" id="cart" />
                <div className="checkbox-custom"></div>
                <span className="checkbox-text">
                  Limousine
                  <span className="checkbox-checkmark"></span>
                </span>
              </label>
            </div>
          </div>
          <div className="divide"></div>
          <div className="filter">
            <div className="filter-label">Hàng ghế</div>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" id="front" />
                <div className="checkbox-custom"></div>
                <span className="checkbox-text">
                  Hàng đầu
                  <span className="checkbox-checkmark"></span>
                </span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" id="middle" />
                <div className="checkbox-custom"></div>
                <span className="checkbox-text">
                  Hàng giữa
                  <span className="checkbox-checkmark"></span>
                </span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" id="back" />
                <div className="checkbox-custom"></div>
                <span className="checkbox-text">
                  Hàng cuối
                  <span className="checkbox-checkmark"></span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container-loc">
        <div className="hidden-text">
          <span>Đà Nẵng - TP. Hồ Chí Minh</span>
        </div>
        <div className="icon-container">
          <div
            className={`icon-gia-re custom-icon ${
              selectedIcons.includes("money") ? "active" : ""
            }`}
            onClick={() => handleIconClick("money")}
          >
            <img src={money} alt="Giá rẻ" />
            <span>Giá rẻ bất ngờ</span>
          </div>
          <div
            className={`icon-gio-khoi-hanh custom-icon ${
              selectedIcons.includes("clock") ? "active" : ""
            }`}
            onClick={() => handleIconClick("clock")}
          >
            <img src={clock} alt="Giờ khởi hành" />
            <span>Giờ khởi hành</span>
          </div>
          <div
            className={`icon-ghe-trong custom-icon ${
              selectedIcons.includes("seat") ? "active" : ""
            }`}
            onClick={() => handleIconClick("seat")}
          >
            <img src={seat} alt="Ghế trống" />
            <span>Ghế trống</span>
          </div>
        </div>
        <div className="chuyenxe-loc">
          <div className="info-container-loc">
            <span className="departure-time">10:15</span>
            <div className="location-details">
              <img src={pickup} alt="pickup" />
              <span className="separator">
                {" "}
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
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
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
              </span>
              <img src={station} alt="station" />
            </div>
            <span className="arrival-time">06:15</span>
          </div>

          <div className="location-info">
            <div className="location">
              <span className="location-name">Bến Xe Trung Tâm Đà Nẵng</span>
              <br />
              <span className="location-info-text text-gray"></span>
            </div>
            <div className="location text-right">
              <span className="location-name">Bến Xe Miền Tây</span>
              <br />
              <span className="location-info-text text-gray"></span>
            </div>
          </div>
          <div className="special-note text-yellow">
            <span className="underline">Lưu ý</span>: Quý Khách đang chọn tuyến
            xe có lộ trình đi Cao tốc Phan Thiết Dầu Giây- Cao tốc Long Thà
            <span className="read-more cursor-pointer lowercase">
              <span className="text-orange">...Xem thêm</span>
            </span>
          </div>
          <hr className="divider my-3" />
          <div className="availability-info">
            <div className="availability-details">
              <span className="ticket-price text-orange">400.000đ</span>
              <div className="availability-dot"></div>
              <span className="seat-type">Giường</span>
              <div className="availability-dot"></div>
              <span className="available-seats text-orange">19 chỗ trống</span>
              {/* <span
              className="choose-seat cursor-pointer text-blue-400 underline"
              onClick={() => handleSeatModal("trip1")}
            >
              Chọn ghế
            </span> */}
            </div>
            <button type="button" className="custom-button hidden sm:block">
              <span onClick={() => handleSeatModal("trip1")}>Chọn chuyến</span>
            </button>
          </div>
        </div>

        <div className="chuyenxe-loc">
          <div className="info-container-loc">
            <span className="departure-time">10:15</span>
            <div className="location-details">
              <img src={pickup} alt="pickup" />
              <span className="separator">
                {" "}
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
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
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
              </span>
              <img src={station} alt="station" />
            </div>
            <span className="arrival-time">06:15</span>
          </div>

          <div className="location-info">
            <div className="location">
              <span className="location-name">Bến Xe Trung Tâm Đà Nẵng</span>
              <br />
              <span className="location-info-text text-gray"></span>
            </div>
            <div className="location text-right">
              <span className="location-name">Bến Xe Miền Tây</span>
              <br />
              <span className="location-info-text text-gray"></span>
            </div>
          </div>
          <div className="special-note text-yellow">
            <span className="underline">Lưu ý</span>: Quý Khách đang chọn tuyến
            xe có lộ trình đi Cao tốc Phan Thiết Dầu Giây- Cao tốc Long Thà
            <span className="read-more cursor-pointer lowercase">
              <span className="text-orange">...Xem thêm</span>
            </span>
          </div>
          <hr className="divider my-3" />
          <div className="availability-info">
            <div className="availability-details">
              <span className="ticket-price text-orange">400.000đ</span>
              <div className="availability-dot"></div>
              <span className="seat-type">Giường</span>
              <div className="availability-dot"></div>
              <span className="available-seats text-orange">19 chỗ trống</span>
              <span
                className="choose-seat cursor-pointer text-blue-400 underline"
                onClick={() => handleSeatModal("trip2")}
              >
                Chọn ghế
              </span>
            </div>
            <button type="button" className="custom-button hidden sm:block">
              <span onClick={() => handleSeatModal("trip2")}>Chọn chuyến</span>
            </button>
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

export default SeatSelection;