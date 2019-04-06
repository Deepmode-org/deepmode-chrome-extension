// Act in the case of distractions
var overlay = document.createElement("div");
overlay.id = "deepmode-overlay";

var overlayInnerHTML = `
  <p>Are you on task?</p>
  <div id="deepmode-task-btns">
    <button id="deepmode-on-task-yes">Yes</button>
    <button id="deepmode-on-task-no">No</button>
  </div>
`;
overlay.innerHTML = overlayInnerHTML;
overlay.style.display = "none";
document.body.append(overlay);

// If user claims they are on task, hide overlay and add site to temp. allowed sites list
document.getElementById("deepmode-on-task-yes").addEventListener("click", function(e) {
  document.getElementById("deepmode-overlay").style.display = "none";
});

// Close tab and add site to blocked list if user is not on task
document.getElementById("deepmode-on-task-no").addEventListener("click", function(e) {
  chrome.runtime.sendMessage({ type: "close_current_tab" });
});

// Handle message indicating whether tab is on topic or not
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  // console.log(msg)
  if (msg.type === "topic_match") {
    if (!msg.match) {
      console.log("fdsfd")
      document.getElementById("deepmode-overlay").style.display = "flex;";
    }
  } else if (msg.type === "get_text_param") {
    var textParam = textParamHandlers[msg.domainName]();
    if (textParam)
      sendResponse(textParam);
  }
});
