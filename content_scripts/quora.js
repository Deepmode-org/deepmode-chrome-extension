(function(window, document) {
  var conditions = [
    {
      "selector": ".FeedMain",
      "callback": "hide",
      pathname: "/"
    },
    {
      "selector": ".NotifsNavItem",
      "callback": "hide"
    },
    {
      selector: ".RelatedQuestions",
      callback: "hide"
    },
    {
      selector: ".ContentPageFeed",
      callback: "hide"
    }
  ];

  if (window.location.origin.includes("quora")) {
    augment(conditions, true, true);
  }

})(window, document);