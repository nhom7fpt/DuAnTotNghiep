import OrderService from "../../services/OrderhistoryService";
import {ORDER_SET } from "./actionType";
const service = new OrderService();

  export const orderhistory = (id,data) => async (dispatch) => {
    try {
      const res = await service.ListByAccount(id, data);
      console.log(res);

      if (res.status === 200) {
        dispatch({
          type: ORDER_SET,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  
    }
   
    