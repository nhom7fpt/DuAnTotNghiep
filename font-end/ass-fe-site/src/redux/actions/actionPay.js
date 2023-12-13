import SearchService from "../../services/SearchService";
import {PAY_SET} from "./actionType";

const service = new SearchService();

export const loadDataField = () => async (dispatch) => {
  try {
    const res = await service.loadDataField();
    console.log(res);

    if (res.status === 200) {
      dispatch({
        type: PAY_SET,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error);
  }


};

