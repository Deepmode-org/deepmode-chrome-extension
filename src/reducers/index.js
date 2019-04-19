import { combineReducers } from "redux";
import taskDescription from "./taskDescription";
import taskCategories from "./taskCategories";
import route from "./route";
import blockMap from "./blockMap";
import blacklist from "./blacklist";
import categoriesLoading from "./categoriesLoading";
import isPaused from "./isPaused";

const deepmodeApp = combineReducers({
  blockMap,
  taskDescription,
  taskCategories,
  route,
  blacklist,
  categoriesLoading,
  isPaused
});

export default deepmodeApp;
