import { combineReducers } from "redux";

import Event from "./event";
import Auth from "./auth";

const rootReducers = combineReducers({
  Event,
  Auth,
});

export default rootReducers;
