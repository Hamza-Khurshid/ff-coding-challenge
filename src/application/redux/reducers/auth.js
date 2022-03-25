import * as Types from "../types";

let initialState = {
  isLoggedIn: false,
  user: null,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case Types.LOGIN:
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };

    case Types.LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
export default authReducer;
