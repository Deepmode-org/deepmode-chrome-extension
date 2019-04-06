/*
  Helper functions to work on specific, frequently visited websites that don't accommodate the algorithm well.
  One is example is YouTube where most of the context is in the video, and most of the page content is useless comments.
  Hence we want to handle this case differently by just using the video description and title.
*/

function handleYouTube() {
  if (window.location.pathname === "/watch") {
    // Just use the video title and description instead of the full page
    var title = document.querySelector("h1.title").textContent.trim();
    var description = document.getElementById("description").textContent.trim();

    return title + "\n" + description;
  }
}

var textParamHandlers = {
  ["youtube"]: handleYouTube,
};

// // Run site specific code after DOM has loaded
// Object.values(textParamHandlers).forEach(function(fn) {
//   fn = function() {
//     return document.addEventListener("DOMContentLoaded", fn);
//   }
// });
