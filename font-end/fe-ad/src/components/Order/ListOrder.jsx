import React, { Component } from "react";
import HeaderContent from "../common/HeaderContent";
import withRouter from "../../helpers/withRouter";
import OrderList from "./OrderList";
import { connect } from "react-redux";
import {
  getListOrder,
  getListOrderDetail,
} from "../../redux/actions/actionOrder";

export class ListOrder extends Component {
  componentDidMount = () => {
    this.props.getListOrder();
  };
  onGoDetail = (data) => {
    this.props.router.navigate(`/order/orderdetail/${data.id}`);
  };
  render() {
    const { navigate } = this.props.router;
    const { order } = this.props;

    return (
      <>
        <HeaderContent title="List Order" navigate={navigate} />

        <OrderList od={order} onGoDetail={this.onGoDetail}></OrderList>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  order: state.OrderReducer.order,
});

const mapDispatchToProps = {
  getListOrder,
  getListOrderDetail,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListOrder));
