import React, { Component } from "react";
import HeaderContent from "../common/HeaderContent";
import withRouter from "../../helpers/withRouter";
import AccountList from "./AccountList";
import { connect } from "react-redux";
import {
  getListAccount,
  deleteAccount,
  updateAccount,
} from "../../redux/actions/actionAccount";

export class ListAccount extends Component {
  onConfirm = (data) => {
    this.props.deleteAccount(data.username);
  };
  onOkUpdateAcc = (data) => {
    this.props.updateAccount(data.username, data, this.props.router.navigate);
  };
  componentDidMount = () => {
    this.props.getListAccount();
  };
  render() {
    const { navigate } = this.props.router;
    const { accounts } = this.props;
    return (
      <>
        <HeaderContent title="List Accounts" navigate={navigate} />

        <AccountList
          onOkUpdateAcc={this.onOkUpdateAcc}
          acc={accounts}
          onConfirm={this.onConfirm}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  accounts: state.AccountReducer.accounts,
});

const mapDispatchToProps = {
  getListAccount,
  deleteAccount,
  updateAccount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListAccount));
