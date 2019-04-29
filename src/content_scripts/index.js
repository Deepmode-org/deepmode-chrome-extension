import "../styles/content_scripts.scss";
import { updateUI } from "./siteSpecifics.js";
import { initMsgListeners } from "./messaging.js";
import bodyReady from "./bodyReady.js";
import { Store } from "webext-redux";
import showBlock from "./showBlock";

const store = new Store({
  portName: "deepmode_bg_bridge"
});

Promise.all([bodyReady(document), store.ready()]).then(function(arr) {
  let [ body ] = arr;
  let deepmodeRoot = document.createElement("div");
  deepmodeRoot.id = "deepmode-root";
  body.appendChild(deepmodeRoot);

  // Insert CSS for distraction block
  let cssFile = chrome.runtime.getURL("dist/content_scripts/index.css");
  let styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.type = "text/css";
  styleLink.href = cssFile;
  document.getElementsByTagName("head")[0].appendChild(styleLink);

  initMsgListeners(store);
});

// Update UI of certain distracting sites
updateUI(window.location.href);
