import SearchService from "../../services/SearchService";
import { FIELD_SET, LISTCHUYEN, LISTCHUYEN1, LISTCHUYEN2 } from "./actionType";

const service = new SearchService();

export const loadDataField = () => async (dispatch) => {
  try {
    const res = await service.loadDataField();
    console.log(res);

    if (res.status === 200) {
      dispatch({
        type: FIELD_SET,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error);
  }


};

export const listSearchOneWay = (start, end, date, navigate) => async (dispatch) => {
  try {
    const data = {diemDi: start, diemDen: end, tgDi: date}
    
    const res = await service.loadListChuyen(data);
    console.log(res);
 ;

    if (res.status === 200) {
      dispatch({
        type: LISTCHUYEN,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
  navigate("/timchuyen")


};

export const listSearchReturn = (start, end, date, navigate) => async (dispatch) => {
  try {
    const data = {diemDi: start, diemDen: end, tgDi: date}
    const res = await service.loadListChuyenReturn(data);
    console.log(res);

    if (res.status === 200) {
      dispatch({
        type: LISTCHUYEN1,
        payload: res.data.chuyen1,
      });
      dispatch({
        type: LISTCHUYEN2,
        payload: res.data.chuyen2,
      });
    }
  } catch (error) {
    console.log(error);
  }
  navigate("/timchuyen")


};
