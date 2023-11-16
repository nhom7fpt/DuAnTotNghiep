import React, { Component } from "react";
import HeaderContent from "../common/HeaderContent";
import { Button } from "antd";
import ProductList from "./ProductList";
import withRouter from "../../helpers/withRouter";
import { connect } from "react-redux";
import {
  productEditData,
  getListProduct,
  deleteProduct,
} from "../../redux/actions/actionProduct";

class ListProduct extends Component {
  onEdit = (data) => {
    this.props.productEditData(data, this.props.router.navigate);
  };
  onConfirm = (data) => {
    this.props.deleteProduct(data.id);
  };
  componentDidMount = () => {
    this.props.getListProduct();
  };
  render() {
    const { products } = this.props;

    const { navigate } = this.props.router;
    return (
      <>
        <HeaderContent title="List Product" navigate={navigate} />

        <Button
          type="primary"
          onClick={() => {
            navigate("/product/add");
          }}
        >
          New Product
        </Button>

        <ProductList
          Products={products}
          onEdit={this.onEdit}
          onConfirm={this.onConfirm}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.ProductReducer.product,
  products: state.ProductReducer.products,
});

const mapDispatchToProps = {
  productEditData,
  getListProduct,
  deleteProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListProduct));
