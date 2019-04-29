import { isUrlInBlacklist } from "../helpers/urls";
import showBlock from "./showBlock.js";

function sendMessage(type, params = {}) {
  return chrome.runtime.sendMessage(
    Object.assign({ type }, params)
  );
}

export function initMsgListeners(store) {
  let { blacklist, isPaused } = store.getState();
  if (!isPaused && isUrlInBlacklist(blacklist, window.location.href))
    showBlock(window, document, { type: "blacklist" });

  return chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.type === "topic_match") {
      if (!msg.match) {
        let { taskDescription } = store.getState();
        showBlock(window, document, {
          type: "off_task",
          taskDescription
        });
      }
    } else if (msg.type === "blacklist") {  
      showBlock(window, document, {
        type: "blacklist",
        title: msg.title
      });
    }
  });
}

export function closeCurrentTab() {
  return sendMessage("close_current_tab");
}
