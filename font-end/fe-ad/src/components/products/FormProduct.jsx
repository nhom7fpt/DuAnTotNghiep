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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { MdOutlineCategory } from "react-icons/md";
import ProductService from "../../services/ProductService";
class FormProduct extends Component {
  form = React.createRef();

  state = {
    descriptionCkData: "",
  };

  goNext = () => {
    this.form.current
      .validateFields()
      .then((values) => {
        const newValues = {
          ...values,
          description: this.state.descriptionCkData,
          image: values.image[0].response,
        };

        this.props.goNext(newValues);
      })
      .catch((info) => {
        console.log(info);
        toast.error("Data validation Error. Please check your input fields");
      });
  };

  componentDidUpdate(prevProps) {
    // Kiểm tra nếu dữ liệu product đã được cập nhật
    if (this.props.product !== prevProps.product) {
      this.goNext();
    }
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      descriptionCkData: this.props.product.description
        ? this.props.product.description
        : null,
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.product.description && !prevState.descriptionCkData) {
      return {
        ...prevState,
        descriptionCkData: nextProps.product.description,
      };
    }
    return prevState;
  }

  hanldeImageRemove = (info) => {
    console.log("info: ", info);

    if (info.filename) {
      ProductService.deleteProductImage(info.fileName);
    } else if (info.response && info.response.fileName) {
      ProductService.deleteProductImage(info.response.fileName);
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
    const { product, categories } = this.props;
    const { descriptionCkData } = this.state;
    return (
      <>
        <Form layout="vertical" className="form" size="middle" ref={this.form}>
          <Row>
            <Col md={12}>
              <Form.Item
                label="Id"
                name="id"
                initialValue={product.id ? product.id : null}
              >
                <Input readOnly></Input>
              </Form.Item>
              <Form.Item
                label="Name"
                name="name"
                initialValue={product.name}
                rules={[{ required: true, min: 2 }]}
                hasFeedback
              >
                <Input></Input>
              </Form.Item>
              <Form.Item
                label="Quantity"
                name="quantity"
                initialValue={product.quantity}
                rules={[{ required: true }]}
                hasFeedback
              >
                <InputNumber min={0} style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                initialValue={product.price}
                rules={[{ required: true }]}
                hasFeedback
              >
                <InputNumber
                  min={0}
                  style={{ width: "100%" }}
                  addonAfter={"VND"}
                ></InputNumber>
              </Form.Item>
              <Form.Item
                label="Discount"
                name="discount"
                initialValue={product.discount}
                rules={[{ required: true }]}
                hasFeedback
              >
                <InputNumber
                  min={0}
                  style={{ width: "100%" }}
                  addonAfter={"%"}
                ></InputNumber>
              </Form.Item>
            </Col>
            <Col md={1}>
              <Divider type="vertical" style={{ height: "100%" }}></Divider>
            </Col>
            <Col md={11}>
              <Form.Item
                label="Status"
                name="status"
                initialValue={product.status}
                rules={[{ required: true }]}
                hasFeedback
              >
                <Select placeholder="Select Status">
                  <Select.Option value="InStock">In Stock</Select.Option>
                  <Select.Option value="OutOfStock">Out Of Stock</Select.Option>
                  <Select.Option value="Discontinued">
                    Discontinue
                  </Select.Option>
                  <Select.Option value="OnBackOrder">
                    On Backorder
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Category"
                name="categoryId"
                initialValue={
                  product.category ? product.category.id : product.categoryId
                }
                rules={[{ required: true }]}
                hasFeedback
              >
                <Select
                  placeholder="Select category"
                  suffixIcon={<MdOutlineCategory />}
                  defaultValue={product.category ? product.category.id : 1}
                >
                  {categories &&
                    categories.map((item) => (
                      <Select.Option value={item.id} key={"cake" + item.id}>
                        {item.name}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Featured"
                name="isFeatured"
                initialValue={product.isFeatured ? product.isFeatured : false}
                valuePropName="checked"
                hasFeedback
              >
                <Checkbox>True</Checkbox>
              </Form.Item>
              <Form.Item
                label="Main Image"
                name="image"
                initialValue={
                  product.image
                    ? [
                        {
                          ...product.image,
                          url: ProductService.getProductImageUrl(
                            product.image.fileName
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
                  action={ProductService.getProductImageUploadUrl()}
                >
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col md={24}>
              <Form.Item
                label="Brief"
                name="brief"
                initialValue={product.brief ? product.brief : null}
              >
                <ReactQuill></ReactQuill>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col md={24}>
              <Form.Item
                label="description"
                name="description"
                initialValue={descriptionCkData}
              >
                <CKEditor
                  editor={ClassicEditor}
                  data={descriptionCkData}
                  onReady={(editor) => {
                    editor.editing.view.change((writer) => {
                      writer.setStyle(
                        "height",
                        "200px",
                        editor.editing.view.document.getRoot()
                      );
                    });
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    this.setState({ ...this.state, descriptionCkData: data });
                  }}
                ></CKEditor>
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
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export default FormProduct;
