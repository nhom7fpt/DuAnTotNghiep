import React from "react";
import {
  Modal,
  Form,
  Row,
  Col,
  Input,
  InputNumber,
  Divider,
  Checkbox,
  Image,
} from "antd";

import TextArea from "antd/es/input/TextArea";
import ProductService from "../../services/ProductService";

const ProductDetail = ({ visible, product, onClose }) => {
  return (
    <Modal
      open={visible}
      title="Product Detail"
      footer={null}
      onCancel={onClose}
      width={700}
      centered
    >
      {product !== null && (
        <Form layout="vertical" className="form" size="middle">
          <Row>
            <Col md={12}>
              <Form.Item>
                <Image
                  src={ProductService.getProductImageUrl(
                    product.image.fileName
                  )}
                ></Image>
              </Form.Item>
              <Form.Item
                label="Id"
                name="id"
                initialValue={product.id ? product.id : null}
              >
                <Input readOnly></Input>
              </Form.Item>
              <Form.Item label="Name" name="name" initialValue={product.name}>
                <Input readOnly></Input>
              </Form.Item>
            </Col>
            <Col md={1}>
              <Divider type="vertical" style={{ height: "100%" }}></Divider>
            </Col>
            <Col md={11}>
              <Form.Item
                label="Quantity"
                name="quantity"
                initialValue={product.quantity}
              >
                <InputNumber readOnly min={0} style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                initialValue={product.price}
              >
                <InputNumber
                  min={0}
                  style={{ width: "100%" }}
                  addonAfter={"VND"}
                  readOnly
                ></InputNumber>
              </Form.Item>
              <Form.Item
                label="Discount"
                name="discount"
                initialValue={product.discount}
              >
                <InputNumber
                  min={0}
                  style={{ width: "100%" }}
                  addonAfter={"%"}
                  readOnly
                ></InputNumber>
              </Form.Item>
              <Form.Item
                label="Status"
                name="status"
                initialValue={product.status}
              >
                <Input readOnly></Input>
              </Form.Item>

              <Form.Item
                label="Category"
                name="category"
                initialValue={product.category.name}
              >
                <Input readOnly></Input>
              </Form.Item>

              <Form.Item
                label="Featured"
                name="isFeatured"
                initialValue={product.isFeatured ? product.isFeatured : false}
                valuePropName="checked"
              >
                <Checkbox readOnly>True</Checkbox>
              </Form.Item>
              {/* <Form.Item
                label="Main Image"
                name="image"
                initialValue={
                  product.image
                    ? [
                        {
                          ...product.image,
                          url: ProductService.getProductImageUrl(
                            product.image.filename
                          ),
                        },
                      ]
                    : []
                }
                  
                 
                valuePropName="fileList"
              >
                <Upload
                  listType="picture"
                  accept=".jpg, .png, .gif"
                  maxCount={1}
                  action={ProductService.getProductImageUploadUrl()}
                ></Upload>
              </Form.Item> */}
            </Col>
          </Row>
          <Row>
            <Col md={24}>
              <Form.Item
                label="Brief"
                name="brief"
                initialValue={product.brief ? product.brief : null}
              >
                <Input readOnly></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col md={24}>
              <Form.Item
                label="description"
                name="description"
                initialValue={product.description}
              >
                <TextArea readOnly></TextArea>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </Modal>
  );
};

export default ProductDetail;
