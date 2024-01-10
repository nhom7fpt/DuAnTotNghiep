import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Col, Row } from "antd";
import CarTong from "./CarTong";
import DoanhThu from "./DoanhThu";
import DoanhThuQuy from "./DoanhThuQuy";
import ThongKeService from "../../../services/ThongKeService";

const ThongKe = () => {
  const [data, setData] = useState([]);
  const [quy, setQuy] = useState([]);
  const [tong, setTong] = useState(0);
  useEffect(() => {
    const loadData = async () => {
      const service = new ThongKeService();
      const res = await service.getDoanhThu();
      console.log(res);
      const resQuy = await service.getDoanhThuQuy();
      if (res && res.data) {
        const list = res.data.map((i) => ({
          type: `Tháng ${i[0]}`,
          sales: i[1],
        }));

        setData(list);
      }

      resQuy && resQuy.data && setQuy(resQuy.data);
    };

    loadData();
  }, []);

  return (
    <>
      <Row>
        <Col md={24}>
          <CarTong />
        </Col>
      </Row>
      <Row>
        <Col md={24}>
          <DoanhThu data={data} />
        </Col>
      </Row>
      <Row>
        <Col md={24}>
          <DoanhThuQuy quy={quy} />
        </Col>
      </Row>
    </>
  );
};

export default ThongKe;
