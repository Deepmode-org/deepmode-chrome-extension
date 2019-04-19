import showBlock from "./showBlock.js";

function sendMessage(type, params = {}) {
  return chrome.runtime.sendMessage(
    Object.assign({ type }, params)
  );
}

export function onTopicMismatch(store) {
  chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    let { taskDescription } = store.getState();
    if (msg.type === "topic_match") {
      if (!msg.match) {
        showBlock(window, document, taskDescription);
      }
    }
  });
}

export function closeCurrentTab() {
  return sendMessage("close_current_tab");
}
