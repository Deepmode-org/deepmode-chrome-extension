import "../styles/content_scripts.scss";
import { updateUI } from "./siteSpecifics.js";
import { initMsgListeners } from "./messaging.js";
import bodyReady from "./bodyReady.js";
import { Store } from "webext-redux";
import showBlock from "./showBlock";
import insertCSS from "./insertCSS";
import { articleParse } from "./articleParse";

const store = new Store({
  portName: "deepmode_bg_bridge"
});

Promise.all([bodyReady(document), store.ready()]).then(function(arr) {
  let [ body ] = arr;
  
  // Insert container into page which will display info from Deepmode
  if (!document.getElementById("deepmode-root")) {
    let deepmodeRoot = document.createElement("div");
    deepmodeRoot.id = "deepmode-root";
    body.appendChild(deepmodeRoot);
  }

  // Insert CSS for distraction block
  insertCSS("dist/content_scripts/index.css");

  initMsgListeners(store);
});

// Update UI of certain distracting sites
updateUI(window.location.href);

articleParse(window, document);
