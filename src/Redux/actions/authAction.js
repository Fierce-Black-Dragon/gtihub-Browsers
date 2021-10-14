import {
  AUTH,
  DELETE,
  END_LOADING,
  START_LOADING,
} from "../../constants/ActionTypes";
import * as api from "../../Api/api.js";

export const login = (code, router) => async (dispatch) => {
  try {
    const { data } = await api.loginIn(code);
    console.log(data);
    dispatch({ type: AUTH, data });
  } catch (error) {
    console.error(error);
    // alert(error + " Wrong Credantials");
  }
};
