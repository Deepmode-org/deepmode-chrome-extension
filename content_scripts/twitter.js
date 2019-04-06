(function(window, document) {
  let mo = new MutationObserver(filterTweets);
  mo.observe(document.documentElement, { childList: true, subtree: true });

  function filterTweets(mutations) {
    for (let i = 0; i < mutations.length; i++) {
      let nodes = mutations[i].addedNodes;
      for (let j = 0; j < nodes.length; j++) {
        if (nodes[j].nodeType !== 1)
          continue;
        if (nodes[j].dataset.suggestionJson) {
          if (JSON.parse(nodes[j].dataset.suggestionJson).suggestion_details.suggestion_type !== "RankedOrganicTweet")
            nodes[j].parentNode.removeChild(nodes[j]);
        }
      }
    }
  }
})(window, document);
