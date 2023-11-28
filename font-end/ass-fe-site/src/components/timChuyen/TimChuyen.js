import React, { useEffect, useState } from "react";
import { Button, Col, Radio, Tabs } from "antd";
import "antd/dist/antd.css";
import MotChieu from "./MotChieu";
import KhuHoi from "./KhuHoi";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";
import { loadDataField } from "../../redux/actions/actionSearch";
import moment from "moment";
import {
  loadDataFieldTC,
  loadDataFieldTCReturn,
} from "../../redux/actions/actionListTC";
function TimChuyen(props) {
  const [startDate, setStartDate] = useState(moment());
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const { navigate } = props.router;
  const onClick = () => {
    props.loadDataFieldTCReturn(startLocation, endLocation, startDate);
  };

  const { fieldData } = props;
  const listData = fieldData.map((item) => ({
    label: item,
    value: item,
  }));

  const [selectedTab, setSelectedTab] = useState("1");

  const handleChange = (e) => {
    setSelectedTab(e.target.value);
    console.log(e.target.value);
  };

  const items = [
    {
      key: "1",
      label: (
        <Radio
          value="1"
          onChange={handleChange}
          checked={selectedTab === "1"}
          style={{ fontSize: "15px" }}
        >
          Một chiều
        </Radio>
      ),
      children: (
        <MotChieu
          setStart={setStartLocation}
          setEnd={setEndLocation}
          setDay={setStartDate}
          data={listData}
        />
      ),
    },
    {
      key: "2",
      label: (
        <Radio
          value="2"
          onChange={handleChange}
          checked={selectedTab === "2"}
          style={{ marginLeft: "-20px", fontSize: "15px" }}
        >
          Khứ hồi
        </Radio>
      ),
      children: <KhuHoi data={listData} />,
    },
  ];

  useEffect(() => {
    props.loadDataField();
  }, []);

  return (
    <Col className="timchuyen-ink-bar">
      <Tabs defaultActiveKey="1" items={items} />
      <Button className="tcx-button" onClick={onClick}>
        Tìm chuyến xe
      </Button>
    </Col>
  );
}

const mapStateToProps = (state) => ({
  fieldData: state.SearchReducer.fieldData,
  fieldDataTC: state.ListTCReducer.fieldDataTC,
});

const mapDispatchToProps = {
  loadDataField,

  loadDataFieldTCReturn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TimChuyen));
