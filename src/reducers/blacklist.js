import { ADD_TO_BLACKLIST } from "../actions/";

export default function blacklist(state = [], action) {
  if (typeof state === "undefined")
    return [];

  switch (action.type) {
    case ADD_TO_BLACKLIST:
      return state.concat(action.site);
    default:
      return state;
  }
}
