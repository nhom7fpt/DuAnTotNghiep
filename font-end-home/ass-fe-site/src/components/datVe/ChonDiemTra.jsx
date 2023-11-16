import { Col, Divider, Radio, Row, Space } from "antd";
import React, { useState } from "react";
import { useSeatSelection } from "./SeatSelectionContext";
const ChonDiemTra = () => {
  const [value, setValue] = useState(1);
  const { selectedSeats } = useSeatSelection();
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <Row>
        <Col style={{ marginTop: "3%" }} md={11}>
          <h4>Điểm đón</h4>
          <Divider></Divider>
          <Radio checked="true">
            <div>17:00 Bến xe trung tâm Đà Nẵng</div>
          </Radio>
        </Col>
        <Col md={1}>
          <Divider type="vertical" />
        </Col>
        <Col style={{ marginTop: "3%" }} md={12}>
          <h4>Điểm trả</h4>
          <Divider />
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Option A</Radio>
              <Radio value={2}>Option B</Radio>
              <Radio value={3}>Option C</Radio>
            </Space>
          </Radio.Group>
        </Col>
      </Row>
    </>
  );
};

export default ChonDiemTra;
