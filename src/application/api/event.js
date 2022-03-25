import { callApi } from "./config";

export const fetchEvents = () => {
  return callApi("/events");
};
