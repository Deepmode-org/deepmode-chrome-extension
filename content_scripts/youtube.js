(function(window, document) {

  /*
    Content script that will run persistently to hide distractions on YouTube.
    YT is the singles tbiggest distraction offender that actually has utility who generally want to avoid distractions
  */

  // function handleConditions(conditions) {
  //   conditions.forEach(function(condition) {
  //     if (!condition.done && (!condition.pathname || condition.pathname === window.location.pathname)) {
  //       let selected = document.querySelector(condition.selector);
  //       if (selected) {
  //         if (condition.callback === "hide") {
  //           let elementToHideCheck = setInterval(function() { 
  //             if (document.querySelector(condition.selector)) {
  //               document.querySelector(condition.selector)
  //                 .setAttribute("style", "visibility: hidden !important");
  //               setTimeout(function() {
  //                 clearInterval(elementToHideCheck);
  //               }, 5000);
  //             }
  //           }, 100);
  //         } else
  //           condition.callback(selected);
          
  //         condition.done = true;
  //       }
  //     }
  //   });
  // }

  // function handleDelayedElems(conditions) {
  //   // Use mutation observers to handle elements that are dynamically loaded
  //   var observer = new MutationObserver(function(mutationList) {
  //     mutationList.forEach(function(mutationRecord) {
  //       if (mutationRecord.addedNodes.length) {
  //         handleConditions(conditions);
  //       } else if (mutationRecord.type === "attributes") {
  //         handleConditions(conditions);
  //       }
  //     });
  //   });

  //   return observer;
  // }

  var conditions = [
    {
      selector: "#page-manager",
      callback: "hide",
      pathname: "/",
      undo: function() {
        let elementToHideCheck = setInterval(() => { 
          if (document.querySelector(this.selector)) {
            document
              .querySelector(this.selector)
              .setAttribute("style", "");
            setTimeout(function() {
              clearInterval(elementToHideCheck);
            }, 2000);
          }
        }, 100);
      }
    },
    {
      selector: "#guide-content",
      callback: "hide"
    },
    {
      selector: "#logo",
      callback: "hide"
    },
    {
      selector: "#comments",
      callback: "hide"
    },
    {
      selector: "#related",
      callback: "hide"
    },
    {
      selector: "#playlist",
      callback: "hide"
    },
    {
      selector: "#top-level-buttons",
      callback: "hide"
    },
    {
      selector: "#guide-button",
      callback: "hide"
    },
    {
      selector: "#end",
      callback: "hide"
    },
    {
      selector: ".ytp-next-button",
      callback: "hide"
    },
    {
      selector: ".videowall-endscreen",
      callback: "hide"
    },
    {
      selector: "#sentiment",
      callback: "hide"
    }
  ];

  if (window.location.origin.includes("youtube")) {
    window.addEventListener("yt-navigate-start", (e) => setTimeout(() => window.location.reload(false), 1000));

    // var pushState = history.pushState, replaceState = history.replaceState;
    // history.pushState = function () {
    //   pushState.apply(history, arguments);
    //   window.location.reload(false);
    // };
    // history.replaceState = function () {
    //   replaceState.apply(history, arguments);
    //   window.location.reload(false);
    // };

    window.addEventListener("popstate", (e) => window.location.reload(false));
    window.addEventListener("hashchange", (e) => window.location.reload(false));
    augment(conditions, true);
    // observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true });
  }
})(window, document);
