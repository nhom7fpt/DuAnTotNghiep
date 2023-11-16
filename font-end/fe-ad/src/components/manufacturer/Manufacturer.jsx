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
} from "../../redux/actions/manufacturerAction";
import { ExclamationCircleOutlined } from "@ant-design/icons";

class Manufacturer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      manufacturer: {
        maChuyenXe: "",
        diemDi: "",
        diemDen: "",
        noiDon: "",
        noiTra: "",
        tgDi: "",
        tgDen: "",
        gia: "",
      },
    };
  }
  // componentDidMount = () => {
  //   this.props.getListManufacturer();
  // };

  onCreate = (value) => {
    console.log(value);
    this.props.insterManufacturer(value);
  };
  editManu = (data) => {
    console.log("data truyền vào: ", data);

    this.setState({ open: true, manufacturer: data });
  };

  openDeleteModal = (data) => {
    this.setState({ ...this.state, manufacturer: data });

    console.log(data);

    const message = "Do you want to delete the Manufacturer " + data.name;

    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: () => this.handleDeleteManu(data),
      okText: "Delete",
      cancelText: "Cancel",
    });
  };
  handleDeleteManu = (data) => {
    this.props.deleteManufacturer(data.id);
    this.setState({
      ...this.state,
      manufacturer: { id: "", name: "", logo: "", logoFile: [] },
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
          New Manufacturer
        </Button>

        <FormManufacturer
          manufacturer={this.state.manufacturer}
          open={open}
          onCreate={this.onCreate}
          onCancel={() => {
            this.setState({ ...this.state, open: false });
          }}
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
  deleteManufacturer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Manufacturer));
