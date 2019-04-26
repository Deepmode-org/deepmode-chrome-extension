import store from "./store.js";
import Mercury from "@postlight/mercury-parser";
import { checkMatch } from "../api/api.js";
import extractDomainNameWithoutTLD from "../helpers/extractDomain";

let isFirstLoad = true;

function noMatch(tabId) {
  chrome.tabs.sendMessage(tabId, { type: "topic_match", match: false });
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  let { taskCategories, elem, blacklist, isPaused } = store.getState();

  if (isPaused)
    return;

  // Make sure API call only fires once on tab update
  if (changeInfo.status === "loading" && isFirstLoad) {
    isFirstLoad = false;
    let title = tab.title, url = tab.url, domainName = extractDomainNameWithoutTLD(tab.url);

    if (url === "chrome://newtab/")
      return;
      
    // No need to call API for known blocked sites
    if (blacklist.includes(url))
      return noMatch(tabId);
    
    if (taskCategories.length > 0) {
      return Mercury.parse(url).then(function(result) {
        let payload = `<h1>${result.title}</h1>${result.content}`;
        checkMatch(taskCategories, null, payload).then(function(isMatch) {
          // Send the match result to the content script
          if (!isMatch)
            return noMatch(tabId);
        });
      });
    }
  } else if (changeInfo.status === "complete") {
    isFirstLoad = true;
  }
});
