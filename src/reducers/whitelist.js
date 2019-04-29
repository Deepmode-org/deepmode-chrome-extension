import { SET_WHITELIST, ADD_TO_WHITELIST, REMOVE_FROM_WHITELIST } from "../actions/";

export default function whitelist(state = [], action) {
  if (typeof state === "undefined")
    return [];

  switch (action.type) {
    case ADD_TO_WHITELIST:
      return state.concat(action.site);
    case REMOVE_FROM_WHITELIST:
      return state.filter((site, i) => i !== action.index);
    case SET_WHITELIST:
      return action.whitelist;
    default:
      return state;
  }
}
