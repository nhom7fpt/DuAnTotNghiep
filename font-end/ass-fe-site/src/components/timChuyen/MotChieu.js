import { Col, DatePicker, Row, Select, Space } from "antd";
import React, { useState } from "react";
import moment from "moment";
import muiten from "../../image/switch_location.svg";
import '../../css/routes.scss';
const MotChieu = (props) => {
  const [startDate, setStartDate] = useState(moment());
  const [returnDate, setReturnDate] = useState(null);

  const disabledDate = (current) => {
    // So sánh current với ngày hiện tại, nếu current trước ngày hiện tại thì trả về true (vô hiệu hóa), ngược lại trả về false (có thể chọn)
    return current.isBefore(moment().startOf("day"));
  };
  const onChange = (value) => {
    console.log(value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const data = props.data;
  return (
    <Row>
      <Col md={7}>
        <span>Điểm đi</span>
        <Select
          showSearch
          placeholder="Chọn điểm đi"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={filterOption}
          options={data}
      
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
          onChange={onChange}
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
            value={startDate}
            onChange={onChange} // Gọi sự kiện khi thay đổi thanh điều hướng
            format="DD/MM/YYYY" // Định dạng ngày/tháng/năm đầy đủ
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
