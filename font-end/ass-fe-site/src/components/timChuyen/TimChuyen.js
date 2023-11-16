import React, { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Thêm CSS cho Carousel
import { Button, Col, Tabs } from "antd";
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

  const items = [
    {
      key: "1",
      label: "Một chiều",
      children: <MotChieu data={fieldData} />,
    },
    {
      key: "2",
      label: "Khứ hồi",
      children: <KhuHoi data={fieldData} />,
    },
  ];

  useEffect(() => {
    props.loadDataField();
  }, []);

  return (
    <>
      <Col>
        <Tabs defaultActiveKey="1" items={items} />
        <Button className="tcx-button" onClick={onClick}>
          Tìm chuyến xe
        </Button>
      </Col>
    </>
  );
}

const mapStateToProps = (state) => ({
  fieldData: state.SearchReducer.fieldData,
});

const mapDispatchToProps = {
  loadDataField,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TimChuyen));
