// FormManufacturer.js

import React, { Component } from "react";
import { DatePicker, Form, Input, InputNumber, Modal, TimePicker } from "antd";
import { createRef } from "react";

import { toast } from "react-toastify";
import ManufacturerService from "../../services/ManufacturerService";

class FormManufacturer extends Component {
  form = createRef();

  onDeleteData = (values) => {
    this.props.onCreate(values);
  };

  render() {
    const { open, onCancel } = this.props;
    const { manufacturer } = this.props;
    const format = "HH:mm";

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
              this.onDeleteData(values);
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
          key={manufacturer.maChuyenXe}
        >
          <Form.Item
            name="maChuyenXe"
            label="Ma chuyen xe"
            initialValue={manufacturer.maChuyenXe}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name="diemDi" label="Diem Di">
            <Input />
          </Form.Item>
          <Form.Item name="diemDen" label="DiemDen">
            <Input />
          </Form.Item>
          <Form.Item name="noiDon" label="Noi don">
            <Input />
          </Form.Item>
          <Form.Item name="noiTra" label="Noi Tra">
            <Input />
          </Form.Item>
          <Form.Item name="tgDi" label="Thoi gian di">
            <TimePicker format={format} />
          </Form.Item>
          <Form.Item name="tgDen" label="Thoi gian den">
            <TimePicker format={format} />
          </Form.Item>
          <Form.Item name="gia" label="Gia">
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default FormManufacturer;
