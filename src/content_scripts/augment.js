// This watches elements and hides them when they appear - it is less performant but can prevent a delay
// or a miss in hiding an element
// This should be used by default since the content script runs at document start
// The observer should be attached to document.documentElement
export default function augment(conditions = [], delay = false, watchAttr = false) {
  function deleteNodes(nodes) {
    [].forEach.call(nodes, function(node) { node.remove() });
  }

  if (conditions && conditions.length) {
    // Use mutation observers to handle elements that are dynamically loaded
    var mo = new MutationObserver(processNodes);
    mo.observe(document.documentElement, { childList: true, subtree: true, attributes: watchAttr });
    if (!delay) document.addEventListener("DOMContentLoaded", (e) => mo.disconnect());
  }

  function processNodes(mutations) {
    for (let i = 0; i < mutations.length; i++) {
      let nodes = mutations[i].addedNodes;
      for (let j = 0; j < nodes.length; j++) {
        let node = nodes[j];
        if (node.nodeType !== 1)
          continue;

        for (let k = 0; k < conditions.length; k++) {
          let condition = conditions[k];
          if (!condition.pathname || condition.pathname === window.location.pathname) {
            if (node.matches(condition.selector)) {
              if (condition.callback === "hide") {
                if (!delay) deleteNodes([node]);
                else hidePoll(condition);
              }
            } else {
              if (condition.callback === "hide") {
                deleteNodes(node.querySelectorAll(condition.selector));
              }
            }
          }
        }
      }
    }
  }

  function hidePoll(condition) {
    let interval = setInterval(function() { 
      if (document.querySelector(condition.selector)) {
        document.querySelector(condition.selector)
          .setAttribute("style", "visibility: hidden !important");
        setTimeout(function() {
          clearInterval(interval);
        }, 5000);
      }
    }, 100);
  }
}
