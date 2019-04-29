import store from "./store.js";
import Mercury from "@postlight/mercury-parser";
import { checkMatch } from "../api/api.js";
import extractDomainNameWithoutTLD from "../helpers/extractDomain";
import { isUrlInBlacklist, isUrlInWhitelist } from "../helpers/urls";

let isFirstLoad = true;

function blacklistBlock(tabId) {
  return chrome.tabs.sendMessage(tabId, {
    type: "blacklist"
  });
}

function noMatch(tabId) {
  return chrome.tabs.sendMessage(tabId, { type: "topic_match", match: false });
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  let title = tab.title, url = tab.url, domainName = extractDomainNameWithoutTLD(tab.url);
  let { taskCategories, elem, blacklist, whitelist, isPaused } = store.getState();

  if (isPaused)
    return;

  if (url.includes("chrome://"))
      return;

  if (url.includes(".google."))
    return;

  // No need to call API for sites on the whitelist
  if (isUrlInWhitelist(whitelist, url))
    return;

  // No need to call API for known blocked sites
  if (isUrlInBlacklist(blacklist, url))
    return;

  // Make sure API call only fires once on tab update
  if (changeInfo.status === "loading" && isFirstLoad) {
    isFirstLoad = false;
    
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
