import React, { useEffect } from "react";
import HeaderContent from "../common/HeaderContent";
import ListOrderDetail from "./ListOrderDetail";
import { connect } from "react-redux";
import { useParams } from "react-router-dom"; // Chú ý sử dụng react-router-dom thay vì react-router
import { getListOrderDetail } from "../../redux/actions/actionOrder";

const OrderDetail = ({ orderDetail, getListOrderDetail, navigate }) => {
  const { id } = useParams();

  useEffect(() => {
    getListOrderDetail(id);
  }, [id, getListOrderDetail]);
  console.log(orderDetail);
  return (
    <>
      <HeaderContent title="Order Detail" navigate={navigate} />
      <ListOrderDetail odd={orderDetail} />
    </>
  );
};

const mapStateToProps = (state) => ({
  orderDetail: state.OrderReducer.orderDetail,
});

const mapDispatchToProps = {
  getListOrderDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
