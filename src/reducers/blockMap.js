import { UPDATE_BLOCK_MAP } from "../actions/";

export default function blockMap(state = "none", action) {
  if (typeof state === "undefined") {
    return "none";
  }

  switch (action.type) {
    case UPDATE_BLOCK_MAP:
      return action.blockMap;
    default:
      return state;
  }
}
