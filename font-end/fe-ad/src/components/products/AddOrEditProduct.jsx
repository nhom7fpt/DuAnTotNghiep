import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Button, Col, Divider, Row, Space, Steps, notification } from "antd";
import FormProduct from "./FormProduct";
import UploadImage from "./UploadImage";
import { SaveOutlined } from "@ant-design/icons";

import { toast } from "react-toastify";
import { connect } from "react-redux";
import { insterCar, updateCar } from "../../redux/actions/actionCar";
import ImagesService from "../../services/ImagesService";

class AddOrEditProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      Car: {},
      Images: [],
      updateImages: [],
      categories: [],
    };
  }
  goNext = (values) => {
    this.setState({ ...this.state, Car: values, step: 1 });
  };
  goPrevi = () => {
    this.setState({ ...this.state, step: 0 });
  };

  componentDidMount = () => {
    // this.loadData();
  };
  onUploadFile = (fileList) => {
    this.setState({ ...this.state, updateImages: fileList });
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.Car &&
      nextProps.Car.images &&
      nextProps.Car.images.length > 0
    ) {
      let Images = [];

      if (nextProps.Car.images) {
        Images = nextProps.Car.images.map((item) => ({
          ...item,
          uid: item.id,
          url: ImagesService.getImageUrl(item.fileName),
          status: "done",
        }));
      }
      return { ...prevState, Images: Images };
    }
    return null;
  }

  saveCar = () => {
    const { Car, Images, updateImages } = this.state;
    const newCar = {
      ...Car,
      images:
        updateImages && updateImages.length > 0
          ? updateImages.map((item) => {
            if (item.id) {
              return { ...item };
            }

            return item.response;
          })
          : Images.map((item) => {
            if (item.id) {
              return { ...item };
            }

            return item.response;
          }),
    };

    if (newCar.images && newCar.images.length > 0) {
      const uploading = newCar.images.filter((item) => item.status !== "done");

      if (uploading && uploading.length > 0) {
        notification.error({
          message: "Error",
          description: "Product images are uploading. Please wait...",
          duration: 10,
        });
        return;
      }
    } else if (newCar.images.length === 0) {
      notification.error({
        message: "Error",
        description:
          "Product images are not choose. Please choose image before saving",
        duration: 10,
      });
      return;
    }

    const { navigate } = this.props.router;

    this.props.insterProduct(newCar, navigate);

    this.setState({ ...this.state, Car: {}, Images: [] });
  };

  updateCar = () => {
    const { Car, Images, updateImages } = this.state;
    const newCar = {
      ...Car,
      images:
        updateImages && updateImages.length > 0
          ? updateImages.map((item) => {
            if (item.id) {
              return { ...item };
            }

            return item.response;
          })
          : Images.map((item) => {
            if (item.id) {
              return { ...item };
            }

            return item.response;
          }),
    };

    if (newCar.images && newCar.images.length > 0) {
      const uploading = newCar.images.filter((item) => item.status !== "done");

      if (uploading && uploading.length > 0) {
        notification.error({
          message: "Error",
          description: "Product images are uploading. Please wait...",
          duration: 10,
        });
        return;
      }
    } else if (newCar.images.length === 0) {
      notification.error({
        message: "Error",
        description:
          "Car images are not choose. Please choose image before saving",
        duration: 10,
      });
      return;
    }

    const { navigate } = this.props.router;

    this.props.updateProduct(newCar.id, newCar, navigate);

    this.setState({ ...this.state, Car: {}, Images: [] });
  };

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
    const { step, categories, Images } = this.state;
    const { Car } = this.props;
    return (
      <>
        <HeaderContent
          title={Car && Car.bienSoXe ? "Update Product" : "Add New Product"}
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
                {/* <FormProduct
                  product={Car}
                  goNext={this.goNext}
                  categories={categories}
                ></FormProduct> */}
              </>
            )}
            {step === 1 && (
              <>
                <Divider></Divider>
                <Row>
                  <Col md={24}>
                    <UploadImage
                      onUploadFile={this.onUploadFile}
                      fileList={Images}
                    ></UploadImage>
                    <Divider></Divider>
                    <div style={{ float: "right" }}>
                      <Space>
                        <Button type="primary" onClick={this.goPrevi}>
                          Previous
                        </Button>
                        {Car && Car.bienSoXe ? (
                          <Button type="primary" onClick={this.updateCar}>
                            <SaveOutlined /> Update
                          </Button>
                        ) : (
                          <Button type="primary" onClick={this.saveCar}>
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
  Car: state.CarReducer.Car,
});

const mapDispatchToProps = {
  insterCar,
  updateCar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddOrEditProduct));
