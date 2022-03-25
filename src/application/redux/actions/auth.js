import {
  fetchCurrentUser,
  loginUser,
  logoutCurrentUser,
  signUpUser,
} from "../../api/auth";
import * as Types from "../types";

export const login = (data, cb) => async (dispatch) => {
  try {
    let res = await loginUser(data);
    localStorage.setItem("@token", res?.data?.token || "");
    console.log(" login", data);
    dispatch({
      type: Types.LOGIN,
      payload: res.data,
    });
    cb && cb(false);
  } catch (e) {
    console.log(e);
    cb && cb(false);
  }
};

export const signup = (data, cb) => async (dispatch) => {
  try {
    let res = await signUpUser(data);
    console.log(res.status);
    cb && cb(false);
  } catch (e) {
    console.log(e);
    cb && cb(false);
  }
};

export const getCurrentUser = (cb) => async (dispatch) => {
  try {
    let res = await fetchCurrentUser();

    dispatch({
      type: Types.LOGIN,
      payload: res?.data?.user,
    });
    cb && cb(false);
  } catch (e) {
    console.log(e);
    cb && cb(false);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await logoutCurrentUser();
    localStorage.clear();

    dispatch({
      type: Types.LOGOUT,
    });
  } catch (e) {
    console.log(e);
    localStorage.clear();
    dispatch({
      type: Types.LOGOUT,
    });
  }
};
