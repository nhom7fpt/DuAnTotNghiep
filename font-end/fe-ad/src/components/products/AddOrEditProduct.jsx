import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Button, Col, Divider, Row, Space, Steps, notification } from "antd";
import FormProduct from "./FormProduct";
import UploadImage from "./UploadImage";
import { SaveOutlined } from "@ant-design/icons";
import CategoryService from "../../services/CategoryService";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import {
  insterProduct,
  updateProduct,
} from "../../redux/actions/actionProduct";
import ProductService from "../../services/ProductService";

class AddOrEditProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      product: {},
      productImages: [],
      updateProductImages: [],
      categories: [],
    };
  }
  goNext = (values) => {
    this.setState({ ...this.state, product: values, step: 1 });
  };
  goPrevi = () => {
    this.setState({ ...this.state, step: 0 });
  };

  componentDidMount = () => {
    this.loadData();
  };
  onUploadFile = (fileList) => {
    this.setState({ ...this.state, updateProductImages: fileList });
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.product &&
      nextProps.product.images &&
      nextProps.product.images.length > 0
    ) {
      let productImages = [];

      if (nextProps.product.images) {
        productImages = nextProps.product.images.map((item) => ({
          ...item,
          uid: item.id,
          url: ProductService.getProductImageUrl(item.fileName),
          status: "done",
        }));
      }
      return { ...prevState, productImages: productImages };
    }
    return null;
  }

  saveProduct = () => {
    const { product, productImages, updateProductImages } = this.state;
    const newProduct = {
      ...product,
      images:
        updateProductImages && updateProductImages.length > 0
          ? updateProductImages.map((item) => {
              if (item.id) {
                return { ...item };
              }

              return item.response;
            })
          : productImages.map((item) => {
              if (item.id) {
                return { ...item };
              }

              return item.response;
            }),
    };

    if (newProduct.images && newProduct.images.length > 0) {
      const uploading = newProduct.images.filter(
        (item) => item.status !== "done"
      );

      if (uploading && uploading.length > 0) {
        notification.error({
          message: "Error",
          description: "Product images are uploading. Please wait...",
          duration: 10,
        });
        return;
      }
    } else if (newProduct.images.length === 0) {
      notification.error({
        message: "Error",
        description:
          "Product images are not choose. Please choose image before saving",
        duration: 10,
      });
      return;
    }

    const { navigate } = this.props.router;

    this.props.insterProduct(newProduct, navigate);

    this.setState({ ...this.state, product: {}, productImages: [] });
  };

  updateProduct = () => {
    const { product, productImages, updateProductImages } = this.state;
    const newProduct = {
      ...product,
      images:
        updateProductImages && updateProductImages.length > 0
          ? updateProductImages.map((item) => {
              if (item.id) {
                return { ...item };
              }

              return item.response;
            })
          : productImages.map((item) => {
              if (item.id) {
                return { ...item };
              }

              return item.response;
            }),
    };

    if (newProduct.images && newProduct.images.length > 0) {
      const uploading = newProduct.images.filter(
        (item) => item.status !== "done"
      );

      if (uploading && uploading.length > 0) {
        notification.error({
          message: "Error",
          description: "Product images are uploading. Please wait...",
          duration: 10,
        });
        return;
      }
    } else if (newProduct.images.length === 0) {
      notification.error({
        message: "Error",
        description:
          "Product images are not choose. Please choose image before saving",
        duration: 10,
      });
      return;
    }

    const { navigate } = this.props.router;

    this.props.updateProduct(newProduct.id, newProduct, navigate);

    this.setState({ ...this.state, product: {}, productImages: [] });
  };

  loadData = async () => {
    try {
      const categoryService = new CategoryService();
      const categoryRes = await categoryService.getCategory();

      this.setState({
        ...this.state,
        categories: categoryRes.data,
      });
    } catch (error) {
      console.log(error);
      toast.error("Error: " + error);
    }
  };
  render() {
    const { navigate } = this.props.router;
    const { step, categories, productImages } = this.state;
    const { product } = this.props;
    return (
      <>
        <HeaderContent
          title={product && product.id ? "Update Product" : "Add New Product"}
          navigate={navigate}
        />

        <Row>
          <Col md={24}>
            <Steps
              current={step}
              items={[
                {
                  title: "Base Information",
                  description: "Fill basic Information",
                },
                { title: "Images", description: "Choose the list images" },
              ]}
            ></Steps>
          </Col>
        </Row>

        <Row>
          <Col md={24}>
            {step === 0 && (
              <>
                <Divider></Divider>
                <FormProduct
                  product={product}
                  goNext={this.goNext}
                  categories={categories}
                ></FormProduct>
              </>
            )}
            {step === 1 && (
              <>
                <Divider></Divider>
                <Row>
                  <Col md={24}>
                    <UploadImage
                      onUploadFile={this.onUploadFile}
                      fileList={productImages}
                    ></UploadImage>
                    <Divider></Divider>
                    <div style={{ float: "right" }}>
                      <Space>
                        <Button type="primary" onClick={this.goPrevi}>
                          Previous
                        </Button>
                        {product && product.id ? (
                          <Button type="primary" onClick={this.updateProduct}>
                            <SaveOutlined /> Update
                          </Button>
                        ) : (
                          <Button type="primary" onClick={this.saveProduct}>
                            <SaveOutlined /> Save
                          </Button>
                        )}
                      </Space>
                    </div>
                  </Col>
                </Row>
              </>
            )}
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.ProductReducer.product,
});

const mapDispatchToProps = {
  insterProduct,
  updateProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddOrEditProduct));
