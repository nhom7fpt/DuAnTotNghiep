import ListTCService from "../../services/ListTCService";
import { FIELD_LISTTC } from "./actionType";

const service = new ListTCService();

export const loadDataFieldTC = () => async (dispatch) => {
  try {
    const res = await service.loadDataFieldTC();
    console.log(res);

    if (res.status === 200) {
      dispatch({
        type: FIELD_LISTTC,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const loadDataFieldTCReturn = (tc) => async (dispatch) => {
  try {
    const res = await service.loadDataFieldTCReturn(tc);
    console.log(res);

    if (res.status === 200) {
      dispatch({
        type: FIELD_LISTTC,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

