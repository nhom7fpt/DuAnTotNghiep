import { Col, DatePicker, Row, Select, Space } from "antd";
import React, { useState } from "react";
import moment from "moment";
import muiten from "../../image/switch_location.svg";
import '../../css/routes.scss';
const { RangePicker } = DatePicker;

const KhuHoi = (props) => {
  const [startDate, setStartDate] = useState(moment());
  const [returnDate, setReturnDate] = useState(null);

  const disabledDate = (current) => {
    // So sánh current với ngày hiện tại, nếu current trước ngày hiện tại thì trả về true (vô hiệu hóa), ngược lại trả về false (có thể chọn)
    return current.isBefore(moment().startOf("day"));
  };
  const onChange = (value) => {
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
        <span>Ngày đi - Ngày về</span>
        <Space direction="vertical">
          <RangePicker
            placeholder={["Ngày đi", "Ngày về"]}
            onChange={onChange}
            format="DD/MM/YYYY"
            style={{marginLeft:'-0.5cm'}}
          />
        </Space>
      </Col>
    </Row>
  );
};

export default KhuHoi;
