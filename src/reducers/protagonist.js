import { SET_PROTAGONIST, UNSET_PROTAGONIST, DELETE_ACCOUNT } from "../actions/";

export default function protagonist(state = null, action) {
  if (typeof state === "undefined")
    return null;

  switch (action.type) {
    case SET_PROTAGONIST:
      return action.protagonist;
    case UNSET_PROTAGONIST:
      return null;
    default:
      return state;
  }
}
