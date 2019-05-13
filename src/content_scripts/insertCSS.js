export default function insertCSS(filepath) {
  // Insert CSS for distraction block
  let cssFile = chrome.runtime.getURL(filepath);
  let styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.type = "text/css";
  styleLink.href = cssFile;

  document.getElementsByTagName("head")[0].appendChild(styleLink);
}
