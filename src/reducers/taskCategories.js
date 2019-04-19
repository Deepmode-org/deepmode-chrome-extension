import { UPDATE_TASK_CATEGORIES } from "../actions/";

export default function taskCategories(state = [], action) {
  if (typeof state === "undefined")
    return [];

  switch (action.type) {
    case UPDATE_TASK_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}
