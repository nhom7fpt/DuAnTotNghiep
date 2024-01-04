import { Col, DatePicker, Row, Select, Space } from "antd";
import React, { useState } from "react";
import moment from "moment";
import muiten from "../../image/switch_location.svg";
import '../../css/routes.scss';
const { RangePicker } = DatePicker;

const KhuHoi = (props) => {
  const [startDate, setStartDate] = useState(moment());
  const [returnDate, setReturnDate] = useState(null);
  const [ngayDi, setNgayDi] = useState(moment());
  const [ngayVe, setNgayVe] = useState(moment());
  const [defaultNgayDi, setDefaultNgayDi] = useState(moment());

  const disabledDate = (current) => {
    return current.isBefore(moment().startOf("day"));
  };

  const onChange1 = (value) => {
    props.setNgayDi(value.format("YYYY-MM-DD"));
  };

  const onChange2 = (value) => {
    props.setNgayVe(value.format("YYYY-MM-DD"));
  };

  const onLocationChange = (value, type) => {
    if (type === "start") {
      props.setStart(value);
    } else {
      props.setEnd(value);
    }
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const data = props.data;
 
  return (
    <Row>
      <Col md={5}>
        <span>Điểm đi</span>
        <Select
          placeholder="Chọn điểm đi"
          onChange={(value) => onLocationChange(value, "start")}
          filterOption={filterOption}
          options={data}
          className="khuhoiinput"
           style={{
            width:'258px'
           }}
        />
      </Col>
      <Col md={2} className="location-image">
        <img src={muiten} alt="" className="image" style={{ marginRight: '-0.4cm' }} />
      </Col>
      <Col md={5}>
        <span>Điểm đến</span>
        <Select
          showSearch
          placeholder="Chọn điểm đến"
          optionFilterProp="children"
          onChange={(value) => onLocationChange(value, "end")}
          filterOption={filterOption}
          options={data}
          className="khuhoiinput"
          style={{ marginLeft: '-0.6cm' }}
        />
      </Col>
      <Col md={1}></Col>
      <Col md={5}>
        <span>Ngày đi</span>
        <Space direction="vertical">
          <DatePicker
            format="DD/MM/YYYY"
            onChange={onChange1}
            id="datepickerStart" // Đổi ID để tránh trùng lặp
            disabledDate={disabledDate}
            picker="date"
            placeholder="Chọn thời gian đi"
            className="khuhoiinput"
            style={{ marginLeft: '-0.5cm' }}
          />
        </Space>
      </Col>
      <Col md={1}></Col>
      <Col md={5}>
        <span>Ngày Về</span>
        <Space direction="vertical">
          <DatePicker
            format="DD/MM/YYYY"
            onChange={onChange2}
            showTimeSelect
          
            id="datepickerEnd" // Đổi ID để tránh trùng lặp
            disabledDate={disabledDate}
            picker="date"
            placeholder="Chọn thời gian về"
            className="khuhoiinput"
            style={{ marginLeft: '-0.5cm' }}
          />
        </Space>
      </Col>
    </Row>
  );
};

export default KhuHoi;



