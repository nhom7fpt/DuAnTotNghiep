// FormManufacturer.js

import React, { Component } from "react";
import { Form, Input, InputNumber, Modal, TimePicker } from "antd";
import { createRef } from "react";
import dayjs from "dayjs";
import { toast } from "react-toastify";
const format = "HH:mm";
class FormManufacturer extends Component {
  form = createRef();

  onSendData = (values) => {
    console.log(values);
    if (values.maTuyenXe) {
      this.props.onEdit(values);
    } else {
      this.props.onCreate(values);
    }
  };

  // componentDidUpdate(prevProps) {
  //   // Kiểm tra xem prop manufacturer có thay đổi hay không
  //   if (this.props.tuyenXe !== prevProps.tuyenXe.maTuyenXe) {
  //     // Cập nhật form với các giá trị ban đầu mới
  //     this.form.current.setFieldsValue({
  //       maTuyenXe: this.props.tuyenXe.maTuyenXe,
  //       gia: this.props.tuyenXe.gia,
  //       tgDen: this.props.tuyenXe.tgDen,
  //       tgDi: this.props.tuyenXe.tgDi,
  //       noiTra: this.props.tuyenXe.noiTra,
  //       noiDon: this.props.tuyenXe.noiDon,
  //       diemDen: this.props.tuyenXe.diemDen,
  //       diemDi: this.props.tuyenXe.diemDi,
  //     });
  //   }
  // }

  render() {
    const { open, onCancel } = this.props;
    const { tuyenXe } = this.props;
    const di = tuyenXe.tgDi ? dayjs(tuyenXe.tgDi, format) : "";
    const den = tuyenXe.tgDen ? dayjs(tuyenXe.tgDen, format) : "";
    return (
      <Modal
        open={open}
        title={"Test date time"}
        okText={"Send"}
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          this.form.current
            .validateFields()
            .then((values) => {
              this.form.current.resetFields();
              this.onSendData(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
              toast.error("please don't leave it blank");
            });
        }}
      >
        <Form
          ref={this.form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
          key={tuyenXe.maTuyenXe}
        >
          <Form.Item
            name="maTuyenXe"
            label="Mã tuyến xe"
            initialValue={tuyenXe.maTuyenXe}
          >
            <Input readOnly />
          </Form.Item>
          <Form.Item name="gia" label="Giá vé" initialValue={tuyenXe.gia}>
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="diemDi"
            label="Điểm đi"
            initialValue={tuyenXe.diemDi}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="diemDen"
            label="Điểm đến"
            initialValue={tuyenXe.diemDen}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="noiDon"
            label="Nơi đón"
            initialValue={tuyenXe.noiDon}
          >
            <Input />
          </Form.Item>
          <Form.Item name="noiTra" label="noiTra" initialValue={tuyenXe.noiTra}>
            <Input />
          </Form.Item>
          <Form.Item name="tgDi" label="Thời gian đi">
            <TimePicker defaultValue={di} format={format} />
          </Form.Item>
          <Form.Item name="tgDen" label="Thời gian đến">
            <TimePicker defaultValue={den} format={format} />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default FormManufacturer;
