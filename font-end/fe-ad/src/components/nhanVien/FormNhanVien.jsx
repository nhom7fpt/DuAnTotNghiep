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
class FormProduct extends Component {
  form = React.createRef();

  goNext = () => {
    this.form.current
      .validateFields()
      .then((values) => {
        const newValues = {
          ...values,

          anhDaLuu: values.anhDaLuu[0].response,
        };

        this.props.goNext(newValues);
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

  hanldeImageRemove = (info) => {
    console.log("info: ", info);

    if (info.filename) {
      ImagesService.deleteImage(info.fileName);
    } else if (info.response && info.response.fileName) {
      ImagesService.deleteImage(info.response.fileName);
    }
  };

  normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    if (e.fileList.length > 1) {
      return [e.fileList[1]];
    }

    return e && e.fileList;
  };
  render() {
    const { nhanVien } = this.props;

    return (
      <>
        <Form layout="vertical" className="form" size="middle" ref={this.form}>
          <Row>
            <Col md={12}>
              <Form.Item
                label="Số CCCD"
                name="soCCCD"
                initialValue={nhanVien.soCCCD}
              >
                <Input disabled={nhanVien.soCCCD ? true : false}></Input>
              </Form.Item>

              <Form.Item
                label="Họ tên"
                name="hoTen"
                initialValue={nhanVien.hoTen}
              >
                <Input></Input>
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="sdt"
                initialValue={nhanVien.sdt}
              >
                <Input></Input>
              </Form.Item>
              <Form.Item
                label="Địa chỉ"
                name="diaChi"
                initialValue={nhanVien.diaChi}
              >
                <Input></Input>
              </Form.Item>

              <Form.Item
                label="Main Image"
                name="anhDaLuu"
                initialValue={
                  nhanVien.anhDaLuu
                    ? [
                        {
                          ...nhanVien.anhDaLuu,
                          url: ImagesService.getImageUrl(
                            nhanVien.anhDaLuu.tenTep
                          ),
                        },
                      ]
                    : []
                }
                rules={[{ required: true }]}
                hasFeedback
                valuePropName="fileList"
                getValueFromEvent={this.normFile}
              >
                <Upload
                  listType="picture"
                  accept=".jpg, .png, .gif"
                  maxCount={1}
                  onRemove={this.hanldeImageRemove}
                  action={ImagesService.getImageUploadUrl()}
                >
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
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
                Lưu
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export default FormProduct;
