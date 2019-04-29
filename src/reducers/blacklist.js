import { ADD_TO_BLACKLIST, REMOVE_FROM_BLACKLIST, SET_BLACKLIST } from "../actions/";

export default function blacklist(state = [], action) {
  if (typeof state === "undefined")
    return [];

  switch (action.type) {
    case ADD_TO_BLACKLIST:
      return state.concat(action.site);
    case REMOVE_FROM_BLACKLIST:
      return state.filter((site, i) => i !== action.index);
    case SET_BLACKLIST:
      return action.blacklist;
    default:
      return state;
  }
}
