import { combineReducers } from "redux";
import taskDescription from "./taskDescription";
import taskCategories from "./taskCategories";
import taskConcepts from "./taskConcepts";
import route from "./route";
import blacklist from "./blacklist";
import whitelist from "./whitelist";
import categoriesLoading from "./categoriesLoading";
import isPaused from "./isPaused";
import protagonist from "./protagonist";
import recentTasks from "./recentTasks";
import authLoading from "./authLoading";
import tempCache from "./tempCache";

const deepmodeApp = combineReducers({
  taskDescription,
  taskCategories,
  taskConcepts,
  route,
  blacklist,
  whitelist,
  categoriesLoading,
  isPaused,
  protagonist,
  recentTasks,
  authLoading,
  tempCache
});

export default deepmodeApp;
