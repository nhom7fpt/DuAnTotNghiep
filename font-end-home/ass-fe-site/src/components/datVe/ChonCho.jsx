import { Checkbox, Col, Row, Card, message } from "antd";
import React, { useEffect, useState } from "react";
import { IoClipboard, IoClipboardOutline } from 'react-icons/io5';
import './Choncho.css';
import { useSeatSelection } from './SeatSelectionContext';

const ChonCho = () => {
  const [dataLower, setDataLower] = useState([]);
  const [dataUpper, setDataUpper] = useState([]);
  const [selectedSeatsLower, setSelectedSeatsLower] = useState([]);
  const [selectedSeatsUpper, setSelectedSeatsUpper] = useState([]);
  const dis = [5, 7, 9];

  const onChange = (values, floor) => {
    if (floor === 'lower') {
      setSelectedSeatsLower(values);
      const updatedDataLower = dataLower.map((item) => {
        if (values.includes(item.key) || dis.includes(item.key)) {
          return { ...item, label: <IoClipboard /> };
        } else {
          return { ...item, label: <IoClipboardOutline /> };
        }
      });
      setDataLower(updatedDataLower);
    } else if (floor === 'upper') {
      setSelectedSeatsUpper(values);
      const updatedDataUpper = dataUpper.map((item) => {
        if (values.includes(item.key) || dis.includes(item.key)) {
          return { ...item, label: <IoClipboard /> };
        } else {
          return { ...item, label: <IoClipboardOutline /> };
        }
      });
      setDataUpper(updatedDataUpper);
    }

    // Lưu trạng thái ghế đã chọn vào localStorage
    localStorage.setItem("selectedSeatsLower", JSON.stringify(selectedSeatsLower));
    localStorage.setItem("selectedSeatsUpper", JSON.stringify(selectedSeatsUpper));
  };

  const createData = () => {
    let numRows = 8;
    const dataCreate = [];
    for (let i = 1; i <= numRows; i++) {
      dataCreate.push({
        label: <IoClipboardOutline />,
        value: `A${i}`,
        key: `A${i}`,
        disabled: false,
      });
    }
    for (let i = 1; i <= numRows; i++) {
      dataCreate.push({
        label: <IoClipboardOutline />,
        value: `B${i}`,
        key: `B${i}`,
        disabled: false,
      });
    }
    const newDataLower = dataCreate.map((item) => {
      if (dis.includes(item.key)) {
        return { ...item, label: <IoClipboard />, disabled: true };
      }
      return item;
    });
    const newDataUpper = dataCreate.map((item) => {
      if (dis.includes(item.key)) {
        return { ...item, label: <IoClipboard />, disabled: true };
      }
      return item;
    });
    setDataLower(newDataLower);
    setDataUpper(newDataUpper);
  };

  useEffect(() => {
    createData();

    // Lấy trạng thái ghế đã chọn từ localStorage khi tải component
    const storedSelectedSeatsLower = JSON.parse(localStorage.getItem("selectedSeatsLower") || "[]");
    setSelectedSeatsLower(storedSelectedSeatsLower);

    const storedSelectedSeatsUpper = JSON.parse(localStorage.getItem("selectedSeatsUpper") || "[]");
    setSelectedSeatsUpper(storedSelectedSeatsUpper);
  }, []);

  return (
    <Row>
      <Col md={6} style={{marginTop:'0.4cm', marginRight:'1.2cm'}}>
        <div className="seat-status">
          <Card title="chú thích">
            <p><IoClipboard /> Ghế đã được chọn</p>
            <p><IoClipboardOutline /> Ghế trống</p>
          </Card>
        </div>
      </Col>
      <Col md={8}>
        <label style={{ marginLeft: '1.5cm' }}>Tầng dưới</label>
        <Checkbox.Group
          options={dataLower.slice(0, 8)}
          onChange={(values) => onChange(values, 'lower')}
          value={selectedSeatsLower}
        />
      </Col>
      <Col md={8}>
        <label style={{ marginLeft: '1.5cm' }}>Tầng trên</label>
        <Checkbox.Group
          options={dataUpper.slice(8)}
          onChange={(values) => onChange(values, 'upper')}
          value={selectedSeatsUpper}
        />
      </Col>
      <Col md={8}>
        {selectedSeatsLower.length > 0 && (
          <div className="selected-seats">
            <p>Đã chọn ghế tầng dưới: <span style={{ color: 'blue' }}>{selectedSeatsLower.join(", ")}</span></p>
          </div>
        )}
        {selectedSeatsUpper.length > 0 && (
          <div className="selected-seats">
            <p>Đã chọn ghế tầng trên: <span style={{ color: 'blue' }}>{selectedSeatsUpper.join(", ")}</span></p>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default ChonCho;