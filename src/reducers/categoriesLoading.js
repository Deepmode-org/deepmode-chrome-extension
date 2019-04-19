import { UPDATE_CATEGORIES_LOADING } from "../actions/";

export default function categoriesLoading(state = false, action) {
  if (typeof state === "undefined")
    return false;

  switch (action.type) {
    case UPDATE_CATEGORIES_LOADING:
      return action.loading;
    default:
      return state;
  }
}
