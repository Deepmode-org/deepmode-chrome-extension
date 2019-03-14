/*
  Functions to augment the content of a site to remove unnecessary distractions
*/

function handleYouTube() {

}

function handleStackExchange() {
  // Hide network questions and other distractions in the StackExchange sidebar
  setTimeout(function() {
    [].forEach.call(document.getElementById("sidebar").children, function(node) {
      if (node.className.includes("sidebar-related") || node.className.includes("question-stats")) {
        return;
      } else {
        node.style.display = "none";
      }
    })
  }, 1000);
}

var siteAugmentationHandlers = {
  ["youtube"]: handleYouTube,
  ["stackexchange"]: handleStackExchange,
  ["stackoverflow"]: handleStackExchange
};

// Run site specific code after DOM has loaded
Object.values(siteAugmentationHandlers).forEach(function(fn) {
  fn = function() {
    return document.addEventListener("DOMContentLoaded", fn);
  }
});
