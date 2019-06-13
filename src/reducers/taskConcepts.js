import { UPDATE_TASK_CONCEPTS } from "../actions/";

export default function taskConcepts(state = [], action) {
  if (typeof state === "undefined")
    return [];

  switch (action.type) {
    case UPDATE_TASK_CONCEPTS:
      return action.concepts;
    default:
      return state;
  }
}
