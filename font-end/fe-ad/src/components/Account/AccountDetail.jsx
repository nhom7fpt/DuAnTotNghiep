import React from "react";
import { Modal, Form, Row, Col, Input, Divider, Image } from "antd";

import ProductService from "../../services/ProductService";

const AccountDetail = ({ visible, cus, onClose }) => {
  return (
    <Modal
      open={visible}
      title="Customers Detail"
      footer={null}
      onCancel={onClose}
      width={700}
      centered
    >
      {cus !== null && (
        <Form layout="vertical" className="form" size="middle">
          <Row>
            <Col md={12}>
              <Form.Item>
                {cus.photoImage ? (
                  <Image
                    src={ProductService.getProductImageUrl(
                      cus.photoImage.fileName
                    )}
                  ></Image>
                ) : (
                  <Image src="https://t3.ftcdn.net/jpg/04/34/72/82/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"></Image>
                )}
              </Form.Item>
              <Col md={1}>
                <Divider type="vertical" style={{ height: "100%" }}></Divider>
              </Col>
            </Col>

            <Col md={11}>
              <Form.Item
                label="Full Name"
                name="fullname"
                initialValue={cus.fullname}
              >
                <Input readOnly></Input>
              </Form.Item>
              <Form.Item label="Email" name="email" initialValue={cus.email}>
                <Input readOnly />
              </Form.Item>
              <Form.Item label="Phone" name="phone" initialValue={cus.phone}>
                <Input readOnly></Input>
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
                initialValue={cus.address}
              >
                <Input readOnly></Input>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </Modal>
  );
};

export default AccountDetail;
