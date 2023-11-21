// FormManufacturer.js

import React, { Component } from "react";
import { Form, Input, Modal } from "antd";
import { createRef } from "react";

import { toast } from "react-toastify";

class FormManufacturer extends Component {
  form = createRef();

  onSendData = (values) => {
    if (values.id === "") {
      this.props.onCreate(values);
    } else {
      this.props.onEdit(values);
    }
  };

  componentDidUpdate(prevProps) {
    // Kiểm tra xem prop manufacturer có thay đổi hay không
    if (this.props.manufacturer !== prevProps.manufacturer) {
      // Cập nhật form với các giá trị ban đầu mới
      this.form.current.setFieldsValue({
        id: this.props.manufacturer.id,
        tenThuongHieu: this.props.manufacturer.tenThuongHieu,
      });
    }
  }

  render() {
    const { open, onCancel } = this.props;
    const { manufacturer } = this.props;
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
          key={manufacturer.maChuyenXe}
        >
          <Form.Item name="id" label="id" initialValue={manufacturer.id}>
            <Input readOnly />
          </Form.Item>
          <Form.Item
            name="tenThuongHieu"
            label="Tên thương hiệu"
            initialValue={manufacturer.tenThuongHieu}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default FormManufacturer;
