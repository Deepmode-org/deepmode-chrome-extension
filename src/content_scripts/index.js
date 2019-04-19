import "../styles/content_scripts.scss";
// import { updateUI } from "./siteSpecifics.js";
import { onTopicMismatch } from "./messaging.js";
import bodyReady from "./bodyReady.js";
import { Store } from "webext-redux";

const store = new Store({
  portName: "deepmode_bg_bridge"
});

Promise.all([bodyReady(document), store.ready()]).then(function(arr) {
  let [ body ] = arr;
  let deepmodeRoot = document.createElement("div");
  deepmodeRoot.id = "deepmode-root";
  body.appendChild(deepmodeRoot);

  onTopicMismatch(store);
});

// Update UI of certain distracting sites
// updateUI(window.location.href);
