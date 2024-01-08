import { Checkbox, Col, Row, Card, message, Button } from "antd";
import React, { useEffect, useState } from "react";
import { IoClipboard, IoClipboardOutline } from "react-icons/io5";
import "./Choncho.css";
import { useSeatSelection } from "./SeatSelectionContext";
import SearchService from "../../services/SearchService";
const ChonCho = (props) => {
  const [dataLower, setDataLower] = useState([]);
  const [dataUpper, setDataUpper] = useState([]);
  const [selectedSeatsLower, setSelectedSeatsLower] = useState([]);
  const [selectedSeatsUpper, setSelectedSeatsUpper] = useState([]);
  const { soGhe, disList } = props;
  const [khoaGhe, setKhoaGhe] = useState({ lower: [], upper: [] });
  const [disabledSeats, setDisabledSeats] = useState([]);
  const [emptySeats, setEmptySeats] = useState([]);

  const onChange = (values, floor) => {
    if (floor === "lower") {
      setSelectedSeatsLower(values);
      const updatedDataLower = dataLower.map((item, index) => {
        const isDisabled = values.includes(item.key) || disabledSeats.includes(item.key) || khoaGhe.lower[index];
        return {
          ...item,
          label: isDisabled ? <IoClipboard /> : <IoClipboardOutline />,
        };
      });
      setDataLower(updatedDataLower);
    } else if (floor === "upper") {
      setSelectedSeatsUpper(values);
      const updatedDataUpper = dataUpper.map((item, index) => {
        const isDisabled = values.includes(item.key) || disabledSeats.includes(item.key) || khoaGhe.upper[index];
        return {
          ...item,
          label: isDisabled ? <IoClipboard /> : <IoClipboardOutline />,
        };
      });
      setDataUpper(updatedDataUpper);
    }
  };

  const onNext = () => {
    const newData = selectedSeatsLower.concat(selectedSeatsUpper);
    console.log("Ghế đã chọn:", newData); // In ra console
    props.onNext(newData);
  };

  const createData = () => {
    let numRows = soGhe / 2;
    const dataCreateLower = [];
    const dataCreateUpper = [];
    const khoaGheLower = Array(numRows).fill(false);
    const khoaGheUpper = Array(numRows).fill(false);
    const disabledSeatsLower = [];
  
    for (let i = 1; i <= numRows; i++) {
      const seatKeyLower = `A${i}`;
      const isDisabled = disList.includes(seatKeyLower) || khoaGheLower[i - 1];
      dataCreateLower.push({
        label: isDisabled ? <IoClipboard /> : <IoClipboardOutline />,
        value: seatKeyLower,
        key: seatKeyLower,
        disabled: isDisabled,
      });
  
      if (isDisabled) {
        disabledSeatsLower.push(seatKeyLower);
      } else {
        // Ghế không bị disable, thì thêm vào danh sách ghế trống
        setEmptySeats((prevEmptySeats) => [...prevEmptySeats, seatKeyLower]);
      }
    }
  
    const disabledSeatsUpper = [];
    for (let i = 1; i <= numRows; i++) {
      const seatKeyUpper = `B${i}`;
      const isDisabled = disList.includes(seatKeyUpper) || khoaGheUpper[i - 1];
      dataCreateUpper.push({
        label: isDisabled ? <IoClipboard /> : <IoClipboardOutline />,
        value: seatKeyUpper,
        key: seatKeyUpper,
        disabled: isDisabled,
      });
  
      if (isDisabled) {
        disabledSeatsUpper.push(seatKeyUpper);
      } else {
       
        setEmptySeats((prevEmptySeats) => [...prevEmptySeats, seatKeyUpper]);
      }
    }
  
    console.log("Ghế đã bị disable (tầng dưới):", disabledSeatsLower);
    console.log("Ghế đã bị disable (tầng trên):", disabledSeatsUpper);
    console.log("Ghế trống:", emptySeats);
  
    setDataLower(dataCreateLower);
    setDataUpper(dataCreateUpper);
    setKhoaGhe({ lower: khoaGheLower, upper: khoaGheUpper });
    setDisabledSeats(disabledSeatsLower.concat(disabledSeatsUpper));
  };
  
  useEffect(() => {
    createData(soGhe);
  }, [soGhe, disList]);


  return (
    <>
    
      <Row>
        <Col md={6} style={{ marginTop: "0.4cm", marginRight: "1.2cm" }}>
          <div className="seat-status">
            <Card title="chú thích">
              <p>
                <IoClipboard /> Ghế đã được chọn
              </p>
              <p>
                <IoClipboardOutline /> Ghế trống
              </p>
            </Card>
          </div>
        </Col>
        <Col md={8}>
          <label style={{ marginLeft: "1.5cm" }}>Tầng dưới</label>
          <Checkbox.Group
            options={dataLower.slice()}
            onChange={(values) => onChange(values, "lower")}
            value={selectedSeatsLower}
          />
        </Col>
        <Col md={8}>
          <label style={{ marginLeft: "1.5cm" }}>Tầng trên</label>
          <Checkbox.Group
            options={dataUpper.slice()}
            onChange={(values) => onChange(values, "upper")}
            value={selectedSeatsUpper}
          />
        </Col>
        <Col md={8}>
          {selectedSeatsLower.length > 0 && (
            <div className="selected-seats">
              <p>
                Đã chọn ghế tầng dưới:{" "}
                <span style={{ color: "blue" }}>
                  {selectedSeatsLower.join(", ")}
                </span>
              </p>
            </div>
          )}
          {selectedSeatsUpper.length > 0 && (
            <div className="selected-seats">
              <p>
                Đã chọn ghế tầng trên:{" "}
                <span style={{ color: "blue" }}>
                  {selectedSeatsUpper.join(", ")}
                </span>
              </p>
            </div>
          )}
        </Col>
      </Row>
      <Row style={{ float: "right" }}>
        <Button type="primary" onClick={() => onNext()}>
          Tiếp tục
        </Button>

        <Button
          type="primary"
          style={{ margin: "0 8px" }}
          onClick={() => props.onClose()}
        >
          Hủy
        </Button>
      </Row>
    </>
  );
};

export default ChonCho;
