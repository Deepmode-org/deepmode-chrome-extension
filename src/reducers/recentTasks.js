import { SET_RECENT_TASKS, ADD_RECENT_TASK } from "../actions/";
import * as _ from "underscore";

export default function recentTasks(state = [], action) {
  if (typeof state === "undefined")
    return [];

  switch (action.type) {
    case SET_RECENT_TASKS:
      return _.uniq(
        action.tasks,
        true,
        task => task.description
      );
    case ADD_RECENT_TASK:
      return _.uniq(
        [action.task].concat(state),
        true,
        task => task.description
      );
    default:
      return state;
  }
}
