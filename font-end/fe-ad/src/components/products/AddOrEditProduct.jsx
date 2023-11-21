import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Button, Col, Divider, Row, Space, Steps, notification } from "antd";
import FormProduct from "./FormProduct";
import UploadImage from "./UploadImage";
import { SaveOutlined } from "@ant-design/icons";
import LoaiXeServer from "../../services/LoaiXeService"


import { toast } from "react-toastify";
import { connect } from "react-redux";
import {
  insterCar,
  updateCar,
} from "../../redux/actions/actionCar";


class AddOrEditProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {

      Car: {},
      thuongHieu: [],
      loaiXe: [],
    };
  }

  componentDidMount = () => {
    this.loadData()
  }



  goNext = (values) => {
    const { navigate } = this.props.router;
    console.log(values);
    // this.props.insterCar(values, navigate);
    // this.setState({ ...this.state, Car: {} });

  };

  loadData = async () => {
    try {
      const loaiXeServer = new LoaiXeServer();
      // const thuongHieuService = new ThuongHieuService();
      const loaiXeRes = await loaiXeServer.getLoaiXe();

      this.setState({
        ...this.state,
        loaiXe: loaiXeRes.data,
      });
    } catch (error) {
      console.log(error);
      toast.error("Error: " + error);
    }
  };
  render() {
    const { navigate } = this.props.router;
    const { loaiXe } = this.state;
    const { Car } = this.props;
    return (
      <>
        <HeaderContent
          title={Car && Car.bienSoXe ? "Update Product" : "Add New Product"}
          navigate={navigate}
        />



        <Row>
          <Col md={24}>


            <Divider></Divider>
            <FormProduct
              Car={Car}
              goNext={this.goNext}
              loaiXe={loaiXe}


            ></FormProduct>


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