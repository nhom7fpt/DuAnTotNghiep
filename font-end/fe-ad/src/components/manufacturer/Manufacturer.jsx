import React, { Component } from "react";
import HeaderContent from "../common/HeaderContent";
import ListManufacturer from "./ListManufacturer";
import withRouter from "../../helpers/withRouter";
import { Button, Modal } from "antd";
import FormManufacturer from "./FormManufacturer";
import { connect } from "react-redux";
import {
  insterManufacturer,
  getListManufacturer,
  clearList,
  deleteManufacturer,
  updateManufacturer,
} from "../../redux/actions/manufacturerAction";
import { ExclamationCircleOutlined } from "@ant-design/icons";

class Manufacturer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      manufacturer: {
        id: "",
        tenThuongHieu: "",
      },
    };
  }
  componentDidMount = () => {
    this.props.getListManufacturer();
  };

  onCreate = (value) => {
    this.props.insterManufacturer(value);
  };
  onEdit = (value) => {
    this.setState({ ...this.state, open: false });
    this.props.updateManufacturer(value.id, value);
  };
  editManu = (data) => {
    this.setState({ open: true, manufacturer: data });
  };
  onCancel = () => {
    this.setState({
      open: false,
      manufacturer: {
        id: "",
        tenThuongHieu: "",
      },
    });
  };
  handleDeleteManu = (data) => {
    this.props.deleteManufacturer(data.id);
    this.setState({
      ...this.state,
      manufacturer: { id: "", tenThuongHieu: "" },
    });
  };

  openDeleteModal = (data) => {
    this.setState({ ...this.state, manufacturer: data });

    const message =
      "Do you want to delete the Manufacturer " + data.tenThuongHieu;

    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: () => this.handleDeleteManu(data),
      okText: "Delete",
      cancelText: "Cancel",
    });
  };

  render() {
    const { navigate } = this.props.router;
    const { open } = this.state;
    const { manufactureres } = this.props;
    return (
      <>
        <HeaderContent title="List ManuFacturer" navigate={navigate} />

        <Button
          type="primary"
          onClick={() => {
            this.setState({ ...this.state, open: true });
          }}
        >
          Thêm mới
        </Button>

        <FormManufacturer
          manufacturer={this.state.manufacturer}
          open={open}
          onCreate={this.onCreate}
          onEdit={this.onEdit}
          onCancel={this.onCancel}
        />
        <ListManufacturer
          dataSource={manufactureres}
          openDeleteModal={this.openDeleteModal}
          editManu={this.editManu}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  manufactureres: state.ManufacturerReducer.manufactureres,
});

const mapDispatchToProps = {
  insterManufacturer,
  getListManufacturer,
  clearList,
  updateManufacturer,
  deleteManufacturer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Manufacturer));
