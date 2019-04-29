import { SET_PROTAGONIST, DELETE_ACCOUNT } from "../actions/";

export default function protagonist(state = null, action) {
  if (typeof state === "undefined")
    return null;

  switch (action.type) {
    case SET_PROTAGONIST:
      return action.protagonist;
    default:
      return state;
  }
}
