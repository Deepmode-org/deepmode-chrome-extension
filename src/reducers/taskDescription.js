import { UPDATE_TASK_DESCRIPTION } from "../actions/";

export default function taskDescription(state = "", action) {
  if (typeof state === "undefined")
    return "";

  switch (action.type) {
    case UPDATE_TASK_DESCRIPTION:
      return action.description;
    default:
      return state;
  }
}
