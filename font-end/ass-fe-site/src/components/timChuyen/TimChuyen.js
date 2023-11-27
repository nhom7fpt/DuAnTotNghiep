import React, { useEffect, useState } from "react";
import { Button, Col, Radio, Tabs } from "antd";
import "antd/dist/antd.css";
import MotChieu from "./MotChieu";
import KhuHoi from "./KhuHoi";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";
import { loadDataField } from "../../redux/actions/actionSearch";

function TimChuyen(props) {
  const { navigate } = props.router;
  const onClick = () => {
    navigate("/timchuyen");
  };
  const { fieldData } = props;
  const listData = fieldData.map((item) => ({
    label: item,
    value: item,
  }));

  const [selectedTab, setSelectedTab] = useState("1");

  const handleChange = (e) => {
    setSelectedTab(e.target.value);
  };

  const items = [
    {
      key: "1",
      label: (
        <Radio value="1" onChange={handleChange} checked={selectedTab === "1"} style={{ fontSize:'15px'}}>
          Một chiều
        </Radio>
      ),
      children: <MotChieu data={listData} />,
    },
    {
      key: "2",
      label: (
        <Radio value="2" onChange={handleChange} checked={selectedTab === "2"} style={{marginLeft:'-20px', fontSize:'15px'}}>
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
});

const mapDispatchToProps = {
  loadDataField,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TimChuyen));
