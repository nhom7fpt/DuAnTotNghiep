import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Upload,
} from "antd";
import React, { Component } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space } from "antd";

import ImagesService from "../../services/ImagesService";
dayjs.extend(customParseFormat);
const dateFormat = "dd-MM-YYYY";
class FormChuyen extends Component {
  form = React.createRef();

  goNext = () => {
    this.form.current
      .validateFields()
      .then((values) => {
        this.props.goNext(values);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
        // Xử lý khi validation không thành công nếu cần
      });
  };

  componentDidUpdate(prevProps) {
    // Kiểm tra nếu dữ liệu product đã được cập nhật
    if (this.props.Car !== prevProps.Car) {
      this.goNext();
    }
  }

  render() {
    const { chuyen, xe, tuyen } = this.props;
    const listXe = xe.map((item) => {
      const loai = {
        label: item.bienSoXe,
        value: item.bienSoXe,
      };
      return loai;
    });
    const listTuyen = tuyen.map((item) => {
      const data = {
        label: `${item.diemDi} - ${item.diemDen} (${item.tgDi})`,
        value: item.maTuyenXe,
      };
      return data;
    });

    const XeId = chuyen ? "" : chuyen.xe.bienSoXe;
    const Tuyen = chuyen ? "" : chuyen.tuyenXe.maTuyen;

    return (
      <>
        <Form layout="vertical" className="form" size="middle" ref={this.form}>
          <Row>
            <Col md={12}>
              <Form.Item
                label="Mã Chuyến xe"
                name="maChuyen"
                initialValue={chuyen.id}
              >
                <Input disabled={true}></Input>
              </Form.Item>

              <Form.Item
                label="Số khách"
                name="soKhach"
                initialValue={chuyen.soKhach}
              >
                <Input></Input>
              </Form.Item>
              <Form.Item label="Xe" name="xe">
                <Select options={listXe} defaultValue={XeId}></Select>
              </Form.Item>
              <Form.Item label="Tuyến xe chạy" name="tuyenXe">
                <Select options={listTuyen} defaultValue={Tuyen}></Select>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Divider></Divider>
            <Col md={24}>
              {" "}
              <Button
                type="primary"
                onClick={this.goNext}
                style={{ float: "right" }}
              >
                Tiếp tục
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export default FormChuyen;
