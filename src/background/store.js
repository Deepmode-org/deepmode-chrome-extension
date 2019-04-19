import { createStore, applyMiddleware } from "redux";
import { wrapStore, alias } from 'webext-redux';
import thunkMiddlware from "redux-thunk";
import aliases from "./aliases.js";
import deepmodeApp from "../reducers/";

const initialState = {};

const middleware = [
  alias(aliases),
  thunkMiddlware
];

const store = createStore(
  deepmodeApp,
  applyMiddleware(...middleware)
);

wrapStore(store, {
  portName: "deepmode_bg_bridge"
});

export default store;
