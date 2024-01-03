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
  const onChange = (values, floor) => {
    if (floor === "lower") {
      setSelectedSeatsLower(values);
      const updatedDataLower = dataLower.map((item) => {
        if (values.includes(item.key) || disList.includes(item.key)) {
          return { ...item, label: <IoClipboard /> };
        } else {
          return { ...item, label: <IoClipboardOutline /> };
        }
      });
      setDataLower(updatedDataLower);
    } else if (floor === "upper") {
      setSelectedSeatsUpper(values);
      const updatedDataUpper = dataUpper.map((item) => {
        if (values.includes(item.key || disList.includes(item.key))) {
          return { ...item, label: <IoClipboard /> };
        } else {
          return { ...item, label: <IoClipboardOutline /> };
        }
      });
      setDataUpper(updatedDataUpper);
    }
    // localStorage.setItem(
    //   "selectedSeatsLower",
    //   JSON.stringify(selectedSeatsLower)
    // );
    // localStorage.setItem(
    //   "selectedSeatsUpper",
    //   JSON.stringify(selectedSeatsUpper)
    // );
  };

  const onNext = () => {
    const newData = selectedSeatsLower.concat(selectedSeatsUpper);

    props.onNext(newData);
  };

  const createData = () => {
    let numRows = soGhe / 2;
    const dataCreateLower = [];
    const dataCreateUpper = [];
    for (let i = 1; i <= numRows; i++) {
      dataCreateLower.push({
        label: <IoClipboardOutline />,
        value: `A${i}`,
        key: `A${i}`,
        disabled: false,
      });
    }
    for (let i = 1; i <= numRows; i++) {
      dataCreateUpper.push({
        label: <IoClipboardOutline />,
        value: `B${i}`,
        key: `B${i}`,
        disabled: false,
      });
    }
    const newDataLower = dataCreateLower.map((item) => {
      if (disList.includes(item.key)) {
        return { ...item, label: <IoClipboard />, disabled: true };
      }
      return item;
    });
    const newDataUpper = dataCreateUpper.map((item) => {
      if (disList.includes(item.key)) {
        return { ...item, label: <IoClipboard />, disabled: true };
      }
      return item;
    });
    setDataLower(newDataLower);
    setDataUpper(newDataUpper);
  };

  useEffect(() => {
    createData(soGhe);
    // const storedSelectedSeatsLower = JSON.parse(
    //   localStorage.getItem("selectedSeatsLower") || "[]"
    // );
    // setSelectedSeatsLower(storedSelectedSeatsLower);

    // const storedSelectedSeatsUpper = JSON.parse(
    //   localStorage.getItem("selectedSeatsUpper") || "[]"
    // );
    // setSelectedSeatsUpper(storedSelectedSeatsUpper);
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
