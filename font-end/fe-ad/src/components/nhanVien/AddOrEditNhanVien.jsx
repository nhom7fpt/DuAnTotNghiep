import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Button, Col, Divider, Row, Space, Steps, notification } from "antd";
import FormNhanVien from "./FormNhanVien";
import { SaveOutlined } from "@ant-design/icons";

import { toast } from "react-toastify";
import { connect } from "react-redux";
import {
  insterNhanVien,
  updateNhanVien,
  clearNhanVien,
} from "../../redux/actions/actionNhanVien";

class AddOrEditNhanVien extends Component {
  clearform = () => {
    const { navigate } = this.props.router;
    this.props.clearNhanVien();
    navigate("/nhanvien/them");
  };

  goNext = async (values) => {
    const { navigate } = this.props.router;
    const { insterNhanVien, updateNhanVien, nhanVien } = this.props;

    if (nhanVien && nhanVien.soCCCD) {
      await updateNhanVien(nhanVien.soCCCD, values, navigate);
    } else {
      await insterNhanVien(values, navigate);
    }
  };

  render() {
    const { navigate } = this.props.router;
    const { nhanVien } = this.props;
    return (
      <>
        <HeaderContent
          title={
            nhanVien && nhanVien.soCCCD ? "Update Product" : "Add New Product"
          }
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
            <FormNhanVien
              nhanVien={nhanVien}
              goNext={this.goNext}
            ></FormNhanVien>
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  nhanVien: state.NhanVienReducer.nhanVien,
});

const mapDispatchToProps = {
  insterNhanVien,
  updateNhanVien,
  clearNhanVien,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddOrEditNhanVien));
