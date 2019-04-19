import { UPDATE_ROUTE } from "../actions/";

export default function route(state = "/", action) {
  if (typeof state === "undefined")
    return "/";

  switch (action.type) {
    case UPDATE_ROUTE:
      return action.route;
    default:
      return state;
  }
}
