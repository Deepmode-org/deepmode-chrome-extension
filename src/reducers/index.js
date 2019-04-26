import { combineReducers } from "redux";
import taskDescription from "./taskDescription";
import taskCategories from "./taskCategories";
import route from "./route";
import blacklist from "./blacklist";
import categoriesLoading from "./categoriesLoading";
import isPaused from "./isPaused";
import protagonist from "./protagonist";
import recentTasks from "./recentTasks";

const deepmodeApp = combineReducers({
  taskDescription,
  taskCategories,
  route,
  blacklist,
  categoriesLoading,
  isPaused,
  protagonist,
  recentTasks
});

export default deepmodeApp;
