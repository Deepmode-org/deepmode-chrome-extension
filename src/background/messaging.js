/*
  Code for receiving and acting on messages
*/
import store from "./store";
import { addToTempCache } from "../actions/";

function onRecieve(msg) {
  switch (msg.type) {
    case "close_current_tab":
      return chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        if (tabs.length)
          return chrome.tabs.remove(tabs[0].id);
      });
    case "add_to_temp_cache":
      return store.dispatch(addToTempCache(msg.url));
    default:
      return;
  }
}

chrome.runtime.onMessage.addListener(onRecieve);
