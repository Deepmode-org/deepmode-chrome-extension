import { ADD_TO_TEMP_CACHE, FILTER_TEMP_CACHE } from "../actions";

export default function tempCache(state = [], action) {
  if (typeof state === "undefined")
    return [];

  console.log(state);

  switch (action.type) {
    case ADD_TO_TEMP_CACHE:
      return state.concat({
        url: action.url,
        timestamp: Date.now()
      });
    case FILTER_TEMP_CACHE:
      return state.filter(function(cachedItem) {
        return cachedItem.timestamp > (Date.now() - 300000);
      });
    default:
      return state;
  }
}
