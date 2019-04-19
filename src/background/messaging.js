/*
  Code for receiving and acting on messages
*/

function onRecieve(msg) {
  switch (msg.type) {
    case "close_current_tab":
      return chrome.tabs.query({ active: true }, function(tabs) {
        if (tabs.length)
          return chrome.tabs.remove(tabs[0].id);
      });
    default:
      return;
  }
}

chrome.runtime.onMessage.addListener(onRecieve);
