import { PAUSE, PLAY } from "../actions/";

export default function isPaused(state = false, action) {
  if (typeof state === "undefined")
    return state;

  switch (action.type) {
    case PAUSE:
      return true;
    case PLAY:
      return false;
    default:
      return state;
  }
}
