import React, { useEffect, useState } from "react";
import { IoClipboard, IoClipboardOutline } from 'react-icons/io5';
import './Choncho.css';
import { useSeatSelection } from './SeatSelectionContext';
import { Checkbox, Col, Row, Card, message, Button } from "antd";

const ChonCho = (props) => {
    const [dataLower, setDataLower] = useState([]);
  const [dataUpper, setDataUpper] = useState([]);
 
  const [selectedSeatsLowerNgayDi, setSelectedSeatsLowerNgayDi] = useState([]);
  const [selectedSeatsUpperNgayDi, setSelectedSeatsUpperNgayDi] = useState([]);
  const [selectedSeatsLowerNgayVe, setSelectedSeatsLowerNgayVe] = useState([]);
  const [selectedSeatsUpperNgayVe, setSelectedSeatsUpperNgayVe] = useState([]);

  const dis = ['A1'];

  const onChange = (values, floor, tab) => {
    if (floor === 'lower' && tab === 'ngayDi') {
      setSelectedSeatsLowerNgayDi(values);
      const updatedDataLowerNgayDi = dataLower.map((item) => {
        if (values.includes(item.key) || dis.includes(item.key)) {
          return { ...item, label: <IoClipboard /> };
        } else {
          return { ...item, label: <IoClipboardOutline /> };
        }
      });
      setDataLower(updatedDataLowerNgayDi);
    } else if (floor === 'upper' && tab === 'ngayDi') {
      setSelectedSeatsUpperNgayDi(values);
      const updatedDataUpperNgayDi = dataUpper.map((item) => {
        if (values.includes(item.key) || dis.includes(item.key)) {
          return { ...item, label: <IoClipboard /> };
        } else {
          return { ...item, label: <IoClipboardOutline /> };
        }
      });
      setDataUpper(updatedDataUpperNgayDi);
    } else if (floor === 'lower' && tab === 'ngayVe') {
      setSelectedSeatsLowerNgayVe(values);
      const updatedDataLowerNgayVe = dataLower.map((item) => {
        if (values.includes(item.key) || dis.includes(item.key)) {
          return { ...item, label: <IoClipboard /> };
        } else {
          return { ...item, label: <IoClipboardOutline /> };
        }
      });
      setDataLower(updatedDataLowerNgayVe);
    } else if (floor === 'upper' && tab === 'ngayVe') {
      setSelectedSeatsUpperNgayVe(values);
      const updatedDataUpperNgayVe = dataUpper.map((item) => {
        if (values.includes(item.key) || dis.includes(item.key)) {
          return { ...item, label: <IoClipboard /> };
        } else {
          return { ...item, label: <IoClipboardOutline /> };
        }
      });
      setDataUpper(updatedDataUpperNgayVe);
    }
  };

  const onChangeNgayVe = (values, floor) => {
    if (floor === 'lower') {
      setSelectedSeatsLowerNgayVe(values);
      const updatedDataLowerNgayVe = dataLower.map((item) => {
        if (values.includes(item.key) || dis.includes(item.key)) {
          return { ...item, label: <IoClipboard /> };
        } else {
          return { ...item, label: <IoClipboardOutline /> };
        }
      });
      setDataLower(updatedDataLowerNgayVe);
    } else if (floor === 'upper') {
      setSelectedSeatsUpperNgayVe(values);
      const updatedDataUpperNgayVe = dataUpper.map((item) => {
        if (values.includes(item.key) || dis.includes(item.key)) {
          return { ...item, label: <IoClipboard /> };
        } else {
          return { ...item, label: <IoClipboardOutline /> };
        }
      });
      setDataUpper(updatedDataUpperNgayVe);
    }
  };

  const onNext = () => {
    props.onNext({ ngayDi: [...selectedSeatsLowerNgayDi, ...selectedSeatsUpperNgayDi], ngayVe: [...selectedSeatsLowerNgayVe, ...selectedSeatsUpperNgayVe] });
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
    const storedSelectedSeatsLowerNgayDi = JSON.parse(localStorage.getItem("selectedSeatsLowerNgayDi") || "[]");
    setSelectedSeatsLowerNgayDi(storedSelectedSeatsLowerNgayDi);

    const storedSelectedSeatsUpperNgayDi = JSON.parse(localStorage.getItem("selectedSeatsUpperNgayDi") || "[]");
    setSelectedSeatsUpperNgayDi(storedSelectedSeatsUpperNgayDi);

    const storedSelectedSeatsLowerNgayVe = JSON.parse(localStorage.getItem("selectedSeatsLowerNgayVe") || "[]");
    setSelectedSeatsLowerNgayVe(storedSelectedSeatsLowerNgayVe);

    const storedSelectedSeatsUpperNgayVe = JSON.parse(localStorage.getItem("selectedSeatsUpperNgayVe") || "[]");
    setSelectedSeatsUpperNgayVe(storedSelectedSeatsUpperNgayVe);
  }, []);

  return (
    <>
      <Row>
        <Col md={6} style={{ marginTop: '0.4cm', marginRight: '1.2cm' }}>
          <div className="seat-status">
            <Card title="chú thích">
              <p><IoClipboard /> Ghế đã được chọn</p>
              <p><IoClipboardOutline /> Ghế trống</p>
            </Card>
          </div>
        </Col>
        <Col md={8}>
          <label style={{ marginLeft: '1.5cm' }}>Tầng dưới - Ngày Đi</label>
          <Checkbox.Group
            options={dataLower.slice(0, 8)}
            onChange={(values) => onChange(values, 'lower', 'ngayDi')}
            value={selectedSeatsLowerNgayDi}
          />
        </Col>
        <Col md={8}>
          <label style={{ marginLeft: '1.5cm' }}>Tầng trên - Ngày Đi</label>
          <Checkbox.Group
            options={dataUpper.slice(8)}
            onChange={(values) => onChange(values, 'upper', 'ngayDi')}
            value={selectedSeatsUpperNgayDi}
          />
        </Col>
        <Col md={8}>
          {selectedSeatsLowerNgayDi.length > 0 && (
            <div className="selected-seats">
              <p>Đã chọn ghế tầng dưới - Ngày Đi: <span style={{ color: 'blue' }}>{selectedSeatsLowerNgayDi.join(", ")}</span></p>
            </div>
          )}
          {selectedSeatsUpperNgayDi.length > 0 && (
            <div className="selected-seats">
              <p>Đã chọn ghế tầng trên - Ngày Đi: <span style={{ color: 'blue' }}>{selectedSeatsUpperNgayDi.join(", ")}</span></p>
            </div>
          )}
          {selectedSeatsLowerNgayVe.length > 0 && (
            <div className="selected-seats">
              <p>Đã chọn ghế tầng dưới - Ngày Về: <span style={{ color: 'blue' }}>{selectedSeatsLowerNgayVe.join(", ")}</span></p>
            </div>
          )}
          {selectedSeatsUpperNgayVe.length > 0 && (
            <div className="selected-seats">
              <p>Đã chọn ghế tầng trên - Ngày Về: <span style={{ color: 'blue' }}>{selectedSeatsUpperNgayVe.join(", ")}</span></p>
            </div>
          )}
        </Col>
      </Row>

      <Row style={{marginLeft:'3cm'}}>
        <Col md={8} style={{ marginLeft:'2cm'}}>
          <label style={{ marginLeft: '2cm' , width:'300px'}}>Tầng dưới - Ngày Về</label>
          <Checkbox.Group
            options={dataLower.slice(0, 8)}
            onChange={(values) => onChangeNgayVe(values, 'lower')}
            value={selectedSeatsLowerNgayVe}
            style={{marginRight:'-1cm', marginLeft:'0.5cm'}}
          />
        </Col>
        <Col md={8} style={{marginLeft:'2.5cm'}}>
          <label style={{  width:'300px' }}>Tầng trên - Ngày Về</label>
          <Checkbox.Group
            options={dataUpper.slice(8)}
            onChange={(values) => onChangeNgayVe(values, 'upper')}
            value={selectedSeatsUpperNgayVe}
              style={{marginRight:'-1cm'}}
          />
        </Col>

      </Row>

      <Row style={{ float: "right" }}>
        <Button type="primary" onClick={() => onNext()}>
          Tiếp tục
        </Button>

        <Button type="primary" style={{ margin: "0 8px" }} onClick={() => props.onClose()}>
          Hủy
        </Button>
      </Row>
    </>
  );
};

export default ChonCho;
