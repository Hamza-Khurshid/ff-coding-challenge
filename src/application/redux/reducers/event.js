import * as types from "../types";

let initialState = {
  events: [],
  loading: false,
};

export default function events(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_EVENTS:
      return { ...state, events: action.payload, loading: false };

    case types.EVENTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}
