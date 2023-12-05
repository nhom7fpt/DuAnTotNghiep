import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Button, Col, Divider, Row, Space, Steps } from "antd";
import CarService from "../../services/CarService";
import { SaveOutlined } from "@ant-design/icons";
import TuyenXeService from "../../services/TuyenXeService";
import { connect } from "react-redux";
import {
  insterChuyen,
  updateChuyen,
  clearChuyen,
} from "../../redux/actions/actionChuyen";
import FormChuyen from "./FormChuyen";
import { toast } from "react-toastify";
import TransferNhanVien from "./TransferNhanVien";
import NhanVienService from "../../services/NhanVienService";

class AddOrEditChuyen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      chuyen: {},
      NhanViens: [],
      nhanViensUpdate: [],
      listNhanVien: [],
      xe: [],
      tuyen: [],
    };
  }
  goNext = (values) => {
    const { xe, tuyen } = this.state;

    const xeChon = xe.find((item) => item.bienSoXe === values.xe);
    const tuyenChon = tuyen.find((item) => item.maTuyenXe === values.tuyenXe);

    const newChuyen = { ...values, xe: xeChon, tuyen: tuyenChon };
    console.log(newChuyen);
    this.setState({ ...this.state, chuyen: newChuyen, step: 1 });
  };
  goPrevi = () => {
    this.setState({ ...this.state, step: 0 });
  };

  componentDidMount = () => {
    this.loadData();
  };

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

  loadData = async () => {
    try {
      const carServer = new CarService();
      const tuyenService = new TuyenXeService();
      const nhanVienService = new NhanVienService();

      const XeRes = await carServer.getCar();
      const tuyenRes = await tuyenService.getTuyen();
      const nhanVienRes = await nhanVienService.getNhanVien();
      this.setState({
        ...this.state,
        listNhanVien: nhanVienRes.data,
        xe: XeRes.data,
        tuyen: tuyenRes.data,
      });
    } catch (error) {
      console.log(error);
      toast.error("Error: " + error);
    }
  };
  render() {
    const { navigate } = this.props.router;
    const { step, xe, tuyen, listNhanVien } = this.state;
    const { chuyen } = this.props;
    return (
      <>
        <HeaderContent
          title={
            chuyen && chuyen.maChuyen ? "Cập nhật chuyến" : "Thêm chuyến mới"
          }
          navigate={navigate}
        />

        <Row>
          <Col md={24}>
            <Steps
              current={step}
              items={[
                {
                  title: "Thông tin chuyến",
                },
                { title: "Nhân viên", description: "Chọn nhân viên chuyến xe" },
              ]}
            ></Steps>
          </Col>
        </Row>

        <Row>
          <Col md={24}>
            {step === 0 && (
              <>
                <Divider></Divider>
                <FormChuyen
                  chuyen={chuyen}
                  goNext={this.goNext}
                  xe={xe}
                  tuyen={tuyen}
                ></FormChuyen>
              </>
            )}
            {step === 1 && (
              <>
                <TransferNhanVien list={listNhanVien} />
                <Divider></Divider>
                <Row>
                  <Col md={24}>
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
  insterChuyen,
  updateChuyen,
  clearChuyen,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddOrEditChuyen));
