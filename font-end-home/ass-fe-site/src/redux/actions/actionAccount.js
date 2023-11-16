import AccountService from "../../services/AccountService";
import { ACCOUNT_SET } from "./actionType";
import { toast } from "react-toastify";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const service = new AccountService();
export const createAccount = (account, navigate) => async (dispatch) => {
  try {
    const res = await service.RegAccount(account);
    console.log(res.data);
    if (res.status === 201) {
      if (res.data) {
        dispatch({
          type: ACCOUNT_SET,
          payload: res.data,
        });
        
        toast.success("Đăng kí thành công");
      } else {
        toast.error("Không có dữ liệu trả về từ máy chủ");
      }
      navigate("/");
     
    }
  } catch (error) {
    NotificationManager.error('Lỗi username đã tồn tại', 'Thông báo', 2000);

  }
};

export const login = (account, navigate) => async (dispatch) => {
  try {
    const res = await service.Login(account);
    console.log(res.data);
    if (res.status === 202) {
      if (res.data) {
        dispatch({
          type: ACCOUNT_SET,
          payload: res.data,
        });
        // toast.success("Đăng nhâp thành công");
        toast.success('Đăng nhập thành công', {
          // position: "top-right",
          position:"top-right",
         reverseOrder: false,
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          localStorage.setItem("username", res.data.tenTaiKhoan);

          navigate("/thongttk");
      }
    }
  } catch (error) {
    toast.error('Không có dữ liệu trả về từ máy chủ!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      backgroundColor: "#ff0000", 
      });

  }
};
export const logout = (account, navigate) => async (dispatch) => {
  try {
    
    localStorage.removeItem("username");
    dispatch({
      type: ACCOUNT_SET,
      payload: null,
    });

    toast.success('Đăng xuất thành công', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        border: '1px solid black',
        padding: '16px',
        color: 'yellow',
        backgroundColor: "black",
      },
    
    }
    );


  } catch (error) {
    // Xử lý lỗi nếu cần.
    console.error(error);
  }
};
