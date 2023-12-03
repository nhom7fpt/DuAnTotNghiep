import React, { Component } from "react";
import HeaderContent from "../common/HeaderContent";
import ListTuyen from "./ListTuyenXe";
import withRouter from "../../helpers/withRouter";
import { Button, Modal } from "antd";
import FormTuyen from "./FormTuyenXe";
import { connect } from "react-redux";
import {
  insterTuyen,
  getListTuyen,
  clearList,
  deleteTuyen,
  updateTuyen,
} from "../../redux/actions/actionTuyenXe";
import { ExclamationCircleOutlined } from "@ant-design/icons";

class TuyenXe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      tuyenXe: {
        maTuyenXe: "",
        gia: 0,
        tgDen: "",
        tgDi: "",
        noiTra: "",
        noiDon: "",
        diemDen: "",
        diemDi: "",
      },
    };
  }
  componentDidMount = () => {
    this.props.getListTuyen();
  };

  onCreate = (value) => {
    this.props.insterTuyen(value);
    this.setState({ open: false, ...this.state });
  };
  onEdit = (value) => {
    const { navigate } = this.props.router;
    this.props.updateTuyen(value.maTuyenXe, value, navigate);
    this.setState({ open: false, ...this.state });
  };
  editManu = (data) => {
    this.setState({ open: true, tuyenXe: data });
  };
  onCancel = () => {
    this.setState({
      open: false,
      tuyenXe: {
        maTuyenXe: "",
        gia: "",
        tgDen: "",
        tgDi: "",
        noiTra: "",
        noiDon: "",
        diemDen: "",
        diemDi: "",
      },
    });
  };
  handleDeleteManu = (data) => {
    this.props.deleteTuyen(data.id);
    this.setState({
      ...this.state,
      tuyenXe: {
        maTuyenXe: "",
        gia: "",
        tgDen: "",
        tgDi: "",
        noiTra: "",
        noiDon: "",
        diemDen: "",
        diemDi: "",
      },
    });
  };

  openDeleteModal = (data) => {
    this.setState({ ...this.state, tuyenXe: data });

    const message = "Do you want to delete the Tuyen " + data.maTuyenXe;

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
    const { tuyenXes } = this.props;
    return (
      <>
        <HeaderContent title="List Tuyen" navigate={navigate} />

        <Button
          type="primary"
          onClick={() => {
            this.setState({ ...this.state, open: true });
          }}
        >
          Thêm tuyến
        </Button>

        <FormTuyen
          tuyenXe={this.state.tuyenXe}
          open={open}
          onCreate={this.onCreate}
          onEdit={this.onEdit}
          onCancel={this.onCancel}
        />
        <ListTuyen
          dataSource={tuyenXes}
          openDeleteModal={this.openDeleteModal}
          editManu={this.editManu}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  tuyenXe: state.TuyenXeReducer.tuyenXe,
  tuyenXes: state.TuyenXeReducer.tuyenXes,
});

const mapDispatchToProps = {
  insterTuyen,
  getListTuyen,
  clearList,
  updateTuyen,
  deleteTuyen,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TuyenXe));
