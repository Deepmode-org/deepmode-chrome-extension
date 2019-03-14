chrome.runtime.onMessage.addListener(function(msg) {
  if (msg.type === "close_current_tab") {
    chrome.tabs.query({ active: true }, function(tabs) {
      console.log(tabs)
      if (tabs.length)
        return chrome.tabs.remove(tabs[0].id);
    });
  }
});

var isFirstLoad = true;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // Make sure API call only fires once on tab update
  if (changeInfo.status === "loading" && isFirstLoad) {
    isFirstLoad = false;
    var title = tab.title, url = tab.url, domainName = extractDomainNameWithoutTLD(tab.url);

    chrome.storage.sync.get(["blockedSites", "currentTaskCategories"], function(serialised) {
      var blockedSites = serialised.blockedSites || [], categories = serialised.currentTaskCategories;
      
      // No need to call API for known blocked sites
      if (blockedSites.includes(url)) {
        return chrome.tabs.sendMessage(tabId, { type: "topic_match", match: false });
      }
      
      if (categories.length > 0) {
        // Handle special cases of sites by extracting text
        if (textParamHandlers[domainName]) {
          return chrome.tabs.sendMessage(tabId, { type: "get_text_param", domainName: domainName }, function(textParam) {
            api.checkMatch(categories, textParam, null).then(function(isMatch) {
              if (!isMatch) {
                blockedSites.push(url);
                chrome.storage.sync.set({ blockedSites: blockedSites });
              }
              // Send the match result to the content script
              chrome.tabs.sendMessage(tabId, { type: "topic_match", match: isMatch });
            });
          });
        } else {
          return api.checkMatch(categories, null, url).then(function(isMatch) {
            if (!isMatch) {
              blockedSites.push(url);
              chrome.storage.sync.set({ blockedSites: blockedSites });
            }
            // Send the match result to the content script
            chrome.tabs.sendMessage(tabId, { type: "topic_match", match: isMatch });
          });
        }
      }
    });
  } else if (changeInfo.status === "complete") {
    isFirstLoad = true;
  }
});
