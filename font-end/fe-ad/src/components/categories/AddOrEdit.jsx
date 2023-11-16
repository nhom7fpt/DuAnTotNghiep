import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Popconfirm,
  Row,
  Select,
} from "antd";
import HeaderContent from "../common/HeaderContent";
import { connect } from "react-redux";
import {
  insterCategory,
  getCategory,
  clearCategory,
  updateCategory,
} from "../../redux/actions/actionCategory";

class AddOrEdit extends Component {
  formRef = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      category: {
        id: "",
        name: "",
        status: "Visible",
        day: "",
      },
    };
  }
  componentDidMount = () => {
    const { id } = this.props.router.params;

    if (id) {
      this.props.getCategory(id);
      console.log("getcategory");
    } else {
      this.props.clearCategory();
      console.log("clearcategory");
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.category && prevState.category.id !== nextProps.category.id) {
      return {
        ...prevState,
        category: nextProps.category,
      };
    } else if (!nextProps.category) {
      return {
        ...prevState,
        category: { id: "", name: "", status: "Visible" },
      };
    }

    return null;
  }

  onSubmitForm = (values) => {
    const { navigate } = this.props.router;
    const { id } = this.state.category;

    // if (!id) {
    //   this.props.insterCategory(values, navigate);
    // } else {
    //   this.props.updateCategory(id, values, navigate);
    // }
    console.log(values);
  };

  handleConfirmUpdate = () => {
    this.formRef.current.submit();
  };

  render() {
    const { navigate } = this.props.router;
    const { isLoading } = this.props;
    const { category } = this.state;
    return (
      <div>
        <HeaderContent
          title={category.id ? "Update Category" : "Add New Category"}
          navigate={navigate}
        />
        <Form
          layout="vertical"
          className="Form"
          onFinish={this.onSubmitForm}
          key={category.id}
          ref={this.formRef}
          disabled={isLoading}
        >
          <Row>
            <Col md={12}>
              <Form.Item
                label="Category ID"
                name="categoryid"
                initialValue={category.id}
                hidden={category.id ? false : true}
              >
                <Input readOnly></Input>
              </Form.Item>

              <Form.Item
                label="Name"
                name="name"
                initialValue={category.name}
                rules={[{ required: true, message: "Please input name" }]}
              >
                <Input></Input>
              </Form.Item>

              <Form.Item
                label="Status"
                name="status"
                initialValue={category.status === "Visible" ? "0" : "1"}
              >
                <Select>
                  <Select.Option value="0">Visible</Select.Option>
                  <Select.Option value="1">Invisible</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="DatePicker" name="day">
                <DatePicker />
              </Form.Item>
              <Divider />
              {!category.id ? (
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ float: "right" }}
                  loading={isLoading}
                >
                  Save
                </Button>
              ) : (
                <Popconfirm
                  title="Update the task"
                  description="Are you sure to update this task?"
                  onConfirm={this.handleConfirmUpdate}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button
                    htmlType="button"
                    type="primary"
                    style={{ float: "right" }}
                    loading={isLoading}
                  >
                    Update
                  </Button>
                </Popconfirm>
              )}
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  category: state.CategoryReducer.category,
  isLoading: state.commonReducer.isLoading,
});
const mapDispatchToProps = {
  insterCategory,
  getCategory,
  clearCategory,
  updateCategory,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddOrEdit)
);
