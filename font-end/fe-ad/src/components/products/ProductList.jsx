import { Button, Image, Popconfirm, Space, Table, Tooltip } from "antd";
import Column from "antd/es/table/Column";
import React, { Component } from "react";
import { BiEdit, BiSolidTrash } from "react-icons/bi";
import ProductService from "../../services/ProductService";
import { MdPreview } from "react-icons/md";
import withRouter from "../../helpers/withRouter";
import ProductDetail from "./ProductDetail";
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      selectedProduct: null,
    };
  }

  showProductDetail = (product) => {
    this.setState({ previewVisible: true, selectedProduct: product });
  };

  closeProductDetail = () => {
    this.setState({ previewVisible: false, selectedProduct: null });
  };

  render() {
    const { Products } = this.props;

    return (
      <>
        <Table dataSource={Products} rowKey="id">
          <Column
            title="Image"
            key="fileName"
            align="center"
            width={90}
            render={(_, record) => (
              <Space size="middle">
                <Image
                  width="100%"
                  src={ProductService.getProductImageUrl(record.image.fileName)}
                />
              </Space>
            )}
          ></Column>

          <Column
            title="Name"
            key="name"
            dataIndex="name"
            align="center"
          ></Column>

          <Column
            title="Is Featured"
            key="isFeatured"
            dataIndex="isFeatured"
            align="center"
            render={(isFeatured) => (
              <label>{isFeatured ? "Featured" : "Not Featured"}</label>
            )}
          />

          <Column
            title="Status"
            key="status"
            dataIndex="status"
            align="center"
            render={(status) => <label>{status}</label>}
          />

          <Column
            title="Quantity"
            key="quantity"
            dataIndex="quantity"
            align="center"
          ></Column>

          <Column
            title="Price"
            key="price"
            dataIndex="price"
            align="center"
          ></Column>
          <Column
            title="Discount"
            key="discount"
            dataIndex="discount"
            align="center"
          ></Column>

          <Column
            title="Action"
            key="action"
            align="center"
            width={200}
            render={(_, record) => (
              <Space size="middle">
                <Tooltip
                  placement="top"
                  title="View Product Detail"
                  color="green"
                >
                  <Button
                    key={record.key}
                    type="link"
                    size="small"
                    onClick={() => this.showProductDetail(record)} // Hiển thị chi tiết sản phẩm
                  >
                    <MdPreview color="green" size={24}></MdPreview>
                  </Button>
                </Tooltip>
                <Tooltip placement="top" title="Edit Product" color="blue">
                  <Button
                    key={record.key}
                    type="link"
                    size="small"
                    onClick={() => this.props.onEdit(record)}
                  >
                    <BiEdit color="blue" size={24} />
                  </Button>
                </Tooltip>
                <Tooltip placement="top" title="Delete Product" color="red">
                  <Popconfirm
                    key={record.key}
                    title="Delete the task"
                    description="Are you sure to delete this product?"
                    onConfirm={() => this.props.onConfirm(record)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button type="link" danger>
                      <BiSolidTrash size={24}></BiSolidTrash>
                    </Button>
                  </Popconfirm>
                </Tooltip>
              </Space>
            )}
          ></Column>
        </Table>

        <ProductDetail
          visible={this.state.previewVisible}
          product={this.state.selectedProduct}
          onClose={this.closeProductDetail}
        />
      </>
    );
  }
}

export default withRouter(ProductList);
