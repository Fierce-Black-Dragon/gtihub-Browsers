import * as actionType from "../../constants/ActionTypes";

const authReducers = (
  state = { isLoading: true, authData: null, user: [] },
  action
) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        user: action.data,
      };

    case actionType.START_LOADING:
      return { ...state, isLoading: true };
    case actionType.LOGOUT:
      return { ...state, authData: null, loading: false, errors: null };

    case actionType.END_LOADING:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
export default authReducers;
