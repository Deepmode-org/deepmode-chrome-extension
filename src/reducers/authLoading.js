import { UPDATE_AUTH_LOADING } from "../actions/";

export default function authLoading(state = false, action) {
  if (typeof state === "undefined")
    return false;

  switch (action.type) {
    case UPDATE_AUTH_LOADING:
      return action.loading;
    default:
      return state;
  }
}
