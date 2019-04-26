import { createStore, applyMiddleware } from "redux";
import { wrapStore, alias } from 'webext-redux';
import thunkMiddlware from "redux-thunk";
import aliases from "./aliases.js";
import deepmodeApp from "../reducers/";
import { setRecentTasks } from "../actions/";
import { storeStateDiff, getStateFromLocalStorage, getStateFromChromeStorage } from "../helpers/storage.js";

const initialState = getStateFromLocalStorage();

const middleware = [
  alias(aliases),
  thunkMiddlware
];

const store = createStore(
  deepmodeApp,
  initialState,
  applyMiddleware(...middleware)
);

// Update long term storage values when they change
store.subscribe(function() {
  let { blacklist, whitelist, recentTasks } = store.getState();
  storeStateDiff({ blacklist, whitelist, recentTasks });
});

// if (!initialState.recentTasks) {
//   getStateFromChromeStorage().then(function(state) {
//     if (state.recentTasks)
//       store.dispatch(setRecentTasks(state.recentTasks));
//   });
// }

wrapStore(store, {
  portName: "deepmode_bg_bridge"
});

export default store;
