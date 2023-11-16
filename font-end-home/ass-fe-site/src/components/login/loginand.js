import withRouter from "../../helpers/withRouter.js";
import text from "../../image/logo/Text-mailinh.png";
import DangNhapForm from "./DangNhapForm.js";
import { createAccount, login } from "../../redux/actions/actionAccount.js";
import { Tabs } from "antd";
import { connect } from "react-redux";
import '../../css/login.scss';
const LoginPage = (props) => {
  const { navigate } = props.router;
  const onComfig = (acc) => {
    props.createAccount(acc, navigate);
  };
  const onSubmit = (acc) => {
    props.login(acc, navigate);
  };
  const items = [
    {
      key: "1",
      label: "Đăng nhập",
      children: <DangNhapForm keyTabs={1} onFinish={onSubmit} />,
    },
    {
      key: "2",
      label: "Đăng ký",
      children: <DangNhapForm keyTabs={2} onFinish={onComfig} />,
    },
  ];
  return (
    
      <div className="container h-custom">
        <div className="login row">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <div>
              <img
                alt=""
                src={text}
                style={{ paddingTop: "25px", paddingLeft: "40px" }}
              />
            </div>
            <img
              src="https://storage.googleapis.com/futa-busline-cms-dev/TVC_00aa29ba5b/TVC_00aa29ba5b.svg"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-5 offset-xl-1">
            <div className="text-center">
              <h3
                style={{
                  paddingTop: "20px",
                  fontSize: "1.5rem",
                  lineHeight: "2rem",
                }}
              >
                Đăng nhập tài khoản
              </h3>
              <Tabs defaultActiveKey="1" items={items} />
            </div>
          </div>
        </div>
      </div>
    
  );
};

const mapStateToProps = (state) => ({
  account: state.AccountReducer.accoust,
});

const mapDispatchToProps = {
  createAccount,
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));
