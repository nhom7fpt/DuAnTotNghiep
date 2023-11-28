import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Button, Col, Divider, Row, Space, Steps } from "antd";
import FormProduct from "./FormProduct";
import UploadImage from "./UploadImage";
import { SaveOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { insterCar, updateCar, clearCars } from "../../redux/actions/actionCar";

class AddOrEditProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      chuyen: {},
      NhanViens: [],
      nhanViensUpdate: [],
      listNhanVien: [],
    };
  }
  goNext = (values) => {
    this.setState({ ...this.state, chuyen: values, step: 1 });
  };
  goPrevi = () => {
    this.setState({ ...this.state, step: 0 });
  };

  // componentDidMount = () => {
  //   this.loadData();
  // };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (
  //     nextProps.product &&
  //     nextProps.product.images &&
  //     nextProps.product.images.length > 0
  //   ) {
  //     let productImages = [];

  //     if (nextProps.product.images) {
  //       productImages = nextProps.product.images.map((item) => ({
  //         ...item,
  //         uid: item.id,
  //         url: ProductService.getProductImageUrl(item.fileName),
  //         status: "done",
  //       }));
  //     }
  //     return { ...prevState, productImages: productImages };
  //   }
  //   return null;
  // }

  saveProduct = () => {};

  updateProduct = () => {};

  // loadData = async () => {
  //   try {
  //     const categoryService = new CategoryService();
  //     const categoryRes = await categoryService.getCategory();

  //     this.setState({
  //       ...this.state,
  //       categories: categoryRes.data,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Error: " + error);
  //   }
  // };
  render() {
    const { navigate } = this.props.router;
    const { step, listNhanVien, NhanViens } = this.state;
    const { chuyen } = this.props;
    return (
      <>
        <HeaderContent
          title={
            chuyen && chuyen.maChuyen ? "Update Product" : "Add New Product"
          }
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
                  product={chuyen}
                  goNext={this.goNext}
                  categories={listNhanVien}
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
                      fileList={NhanViens}
                    ></UploadImage>
                    <Divider></Divider>
                    <div style={{ float: "right" }}>
                      <Space>
                        <Button type="primary" onClick={this.goPrevi}>
                          Previous
                        </Button>
                        {chuyen && chuyen.maChuyen ? (
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
  chuyen: state.ChuyenReducer.chuyen,
});

const mapDispatchToProps = {
  insterCar,
  updateCar,
  clearCars,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddOrEditProduct));
