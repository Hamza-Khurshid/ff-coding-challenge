import { fetchEvents } from "../../api/event";
import * as types from "../types";

export const loadEvents = () => async (dispatch) => {
  try {
    dispatch(startEventLoading());

    const res = await fetchEvents();

    if (res?.events) {
      dispatch({
        type: types.LOAD_EVENTS,
        payload: res?.events || [],
      });
    } else {
      dispatch(stopEventLoading());
    }
  } catch (error) {
    dispatch(stopEventLoading());
  }
};

const startEventLoading = () => ({
  type: types.EVENTS_LOADING,
  payload: true,
});

const stopEventLoading = () => ({
  type: types.EVENTS_LOADING,
  payload: false,
});
