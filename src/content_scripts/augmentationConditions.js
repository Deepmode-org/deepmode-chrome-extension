const augmentationConditions = {
  "stackexchange": [
    {
      "selector": ".module.community-bulletin",
      "callback": "hide"
    },
    {
      "selector": "#clc-tsb.everyonelovesstackoverflow.everyoneloves__top-sidebar",
      "callback": "hide"
    },
    {
      "selector": "#hireme",
      "callback": "hide"
    },
    {
      "selector": ".module.sidebar-linked",
      "callback": "hide"
    },
    {
      "selector": "#hot-network-questions.module.tex2jax_ignore",
      "callback": "hide"
    },
    {
      "selector": "#feed-link",
      "callback": "hide"
    }
  ],
  "youtube": [
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
  ],
  "quora": [
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
  ],
  "hackernews": [
    {
      selector: ".subtext",
      callback: "hide"
    }
  ]
};

export default augmentationConditions;
