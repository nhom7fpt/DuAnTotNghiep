import { Col, DatePicker, Row, Select, Space } from "antd";
import React, { useState } from "react";
import moment from "moment";
import muiten from "../../image/switch_location.svg";
import '../../css/routes.scss';
const MotChieu = (props) => {

  const disabledDate = (current) => {
    return current.isBefore(moment().startOf("day"));
  };
  const onChange = (value) => {
    props.setDay(value);
    console.log(value);

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
      <Col md={7}>
        <span>Điểm đi</span>
        <Select
        
          placeholder="Chọn điểm đi"
        
          onChange={(value) => onLocationChange(value, "start")}
          filterOption={filterOption}
          options={data}
          dropdownClassName="custom-dropdown-timchuyen" 
        />
      </Col>
      <Col md={2} className="location-image">
        <img src={muiten} alt="" className="image" style={{marginRight:'-0.4cm'}}/>
        
      </Col>
     
      <Col md={7}>
        <span>Điểm đến</span>
        <Select
          showSearch
          placeholder="Chọn điểm đến"
          optionFilterProp="children"
          onChange={(value) => onLocationChange(value, "end")}
          filterOption={filterOption}
          options={data}
          style={{marginLeft:'-0.6cm'}}
        />
      </Col>
      <Col md={1}></Col>
      <Col md={7}>
        <span>Ngày đi</span>
        <Space direction="vertical">
          <DatePicker
     
            onChange={onChange}
            format="DD/MM/YYYY" 
            showTimeSelect
            timeFormat="HH:mm:ss"
            id="datepicker"
            disabledDate={disabledDate}
            picker="date"
            placeholder="Chọn thời gian đi"
          
            style={{marginLeft:'-0.5cm'}}
          />
        </Space>
      </Col>
    </Row>
  );
};

export default MotChieu;
