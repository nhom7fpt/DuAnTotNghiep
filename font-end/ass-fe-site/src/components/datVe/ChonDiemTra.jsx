import { Col, Divider, Radio, Row, Space } from "antd";
import React, { useState } from "react";
import { useSeatSelection } from "./SeatSelectionContext";
import { listSearchOneWay,listSearchReturn,loadDataField } from "../../redux/actions/actionSearch";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";
const ChonDiemTra = (props) => {
  const [value, setValue] = useState(1);
  const { selectedSeats } = useSeatSelection();
  const {listChuyen} = props;
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
    {listChuyen.map((item, index)=>(
      <Row  key={item.maChuyen}>
        <Col style={{ marginTop: "3%" }} md={11}>
          <h4>Điểm đón</h4>
          <Divider></Divider>
          <Radio checked="true">
            <div>{item.tuyenXe.noiDon}</div>
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
              <Radio value={1}>{item.tuyenXe.noiTra}</Radio>
              <Radio value={2}>Option B</Radio>
              <Radio value={3}>Option C</Radio>
            </Space>
          </Radio.Group>
        </Col>
      </Row>
      )
        
      )

     }

    </>
  );
};
const mapStateToProps = (state) => ({
  listChuyen:state.SearchReducer.listChuyen,
  listChuyenReturn1:state.SearchReducer.listChuyenReturn1,
  listChuyenReturn2:state.SearchReducer.listChuyenReturn2,
  fieldData: state.SearchReducer.fieldData,
  
});

const mapDispatchToProps = {
  listSearchOneWay,
  listSearchReturn,
  loadDataField,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChonDiemTra));


