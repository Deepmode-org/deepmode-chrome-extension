/*
  This returns a promise (resolved w/ the body elem) as soon as the body elem is available on the DOM.
  Chaining onto this promise allows UI augmentation before the original page has rendered.
*/

export default function bodyReady(document) {
  return new Promise(function(resolve, reject) {
    let moBody = new MutationObserver(checkForBody);
    moBody.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(moBody.disconnect, 1000);

    function checkForBody(mutations) {
      for (let i = 0; i < mutations.length; i++) {
        let nodes = mutations[i].addedNodes;
        for (let j = 0; j < nodes.length; j++) {
          let node = nodes[j];
          if (node.nodeType !== 1)
            continue;

          if (node.tagName === "BODY") {
            return resolve(node);
          }
        }
      }
    }
  });
}
