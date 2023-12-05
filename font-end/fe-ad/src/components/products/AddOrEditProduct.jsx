import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Button, Col, Divider, Row, Space, Steps, notification } from "antd";
import FormProduct from "./FormProduct";
import UploadImage from "./UploadImage";
import { SaveOutlined } from "@ant-design/icons";
import LoaiXeServer from "../../services/LoaiXeService";
import ManufuactureService from "../../services/ManufacturerService";

import { toast } from "react-toastify";
import { connect } from "react-redux";
import { insterCar, updateCar, clearCars } from "../../redux/actions/actionCar";

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
    this.loadData();
  };

  clearform = () => {
    const { navigate } = this.props.router;
    this.props.clearCars();
    navigate("/xe/them");
  };

  goNext = async (values) => {
    const { navigate } = this.props.router;
    const { insterCar, updateCar, Car } = this.props;
    const { loaiXe, thuongHieu } = this.state;

    const lx = loaiXe.find((item) => item.id === values.loaiXe);
    const th = thuongHieu.find((item) => item.id === values.thuongHieu);

    let newCar = { ...values, loaiXe: lx, thuongHieu: th };

    if (Car && Car.bienSoXe) {
      await updateCar(newCar.bienSoXe, newCar, navigate);
    } else {
      await insterCar(newCar, navigate);
    }
  };

  loadData = async () => {
    try {
      const loaiXeServer = new LoaiXeServer();
      const thuongHieuService = new ManufuactureService();
      const loaiXeRes = await loaiXeServer.getLoaiXe();

      const dataRes = await thuongHieuService.getManufacturer();

      this.setState({
        ...this.state,
        thuongHieu: dataRes.data,
        loaiXe: loaiXeRes.data,
      });
    } catch (error) {
      console.log(error);
      toast.error("Error: " + error);
    }
  };

  render() {
    const { navigate } = this.props.router;
    const { loaiXe, thuongHieu } = this.state;
    const { Car } = this.props;
    return (
      <>
        <HeaderContent
          title={Car && Car.bienSoXe ? "Cập nhật  xe" : "Thêm xe mới"}
          navigate={navigate}
        />

        <Button
          type="primary"
          onClick={() => {
            this.clearform();
          }}
        >
          Mới
        </Button>

        <Row>
          <Col md={24}>
            <Divider></Divider>
            <FormProduct
              Car={Car}
              goNext={this.goNext}
              loaiXe={loaiXe}
              thuongHieu={thuongHieu}
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
  clearCars,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddOrEditProduct));
