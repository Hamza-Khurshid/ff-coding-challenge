import { callApi, callPostJsonApi } from "./config";

export const loginUser = (body) => {
  return callPostJsonApi("/users/login", body);
};

export const signUpUser = (body) => {
  return callPostJsonApi("/users/register", body);
};
export const fetchCurrentUser = () => {
  return callApi("/users/current");
};

export const logoutCurrentUser = () => {
  return callApi("/users/logout");
};
