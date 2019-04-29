import { PAUSE, PLAY } from "../actions/";

export default function isPaused(state = true, action) {
  if (typeof state === "undefined")
    return true;

  switch (action.type) {
    case PAUSE:
      return true;
    case PLAY:
      return false;
    default:
      return state;
  }
}
