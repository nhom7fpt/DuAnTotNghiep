import React, { useState } from "react";
import { Modal, Form, Row, Col, Input, Select } from "antd";

const AccountEdit = ({ visible, acc, onClose, onOkUpdate }) => {
  const [formData, setFormData] = useState({
    username: acc ? acc.username : "",
    accountRoles: acc ? acc.accountRoles : "",
  });

  const handleFormChange = (value) => {
    setFormData((prevData) => ({
      username: acc.username,
      password: acc.password,
      customers: acc.customers,
      accountRoles: value,
    }));
  };
  return (
    <Modal
      open={visible}
      title="Customers Update"
      okText="Update"
      onCancel={onClose}
      onOk={() => onOkUpdate(formData)}
      width={300}
      centered
    >
      {acc !== null && (
        <Form layout="vertical" className="form" size="middle">
          <Row>
            <Col md={24}>
              <Form.Item
                label="User Name"
                name="username"
                initialValue={acc.username}
              >
                <Input readOnly></Input>
              </Form.Item>
              <Form.Item
                label="Status"
                name="status"
                initialValue={acc.accountRoles}
                rules={[{ required: true }]}
                hasFeedback
              >
                <Select
                  placeholder="Select Status"
                  value={formData.accountRoles}
                  onChange={(value) => handleFormChange(value)}
                >
                  <Select.Option value="ADMIN">ADMIN</Select.Option>
                  <Select.Option value="GUEST">GUEST</Select.Option>
                  <Select.Option value="USER">USER</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </Modal>
  );
};

export default AccountEdit;
