// Act in the case of distractions
var overlay = document.createElement("div");
overlay.id = "ctious-overlay";

var overlayInnerHTML = `
  <p>Are you on task?</p>
  <div id="ctious-task-btns">
    <button id="ctious-on-task-yes">Yes</button>
    <button id="ctious-on-task-no">No</button>
  </div>
`;
overlay.innerHTML = overlayInnerHTML;
overlay.style.display = "none";
document.body.append(overlay);

// If user claims they are on task, hide overlay and add site to temp. allowed sites list
document.getElementById("ctious-on-task-yes").addEventListener("click", function(e) {
  document.getElementById("ctious-overlay").style.display = "none";
});

// Close tab and add site to blocked list if user is not on task
document.getElementById("ctious-on-task-no").addEventListener("click", function(e) {
  chrome.runtime.sendMessage({ type: "close_current_tab" });
});

// Handle message indicating whether tab is on topic or not
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.type === "topic_match") {
    if (!msg.match) {
      document.getElementById("ctious-overlay").style.display = "flex;";
    }
  } else if (msg.type === "get_text_param") {
    var textParam = textParamHandlers[msg.domainName]();
    sendResponse(textParam);
  }
});

// Augment specified sites
var url = window.location.href;
var domainName = extractDomainNameWithoutTLD(url);
if (siteAugmentationHandlers[domainName])
  siteAugmentationHandlers[domainName]()
