import { createStore, combineReducers, applyMiddleware } from "redux";
import counter from "./reducers/counterReducer";
import name from "../src/reducers/nameReducer";
import logger from "redux-logger";

export default createStore(
  combineReducers(
    {
      counter,
      name
    },
    {},
    applyMiddleware(logger())
  )
);
