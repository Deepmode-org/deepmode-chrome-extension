(function(window, document) {
  var conditions = [
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
  ];

  if (window.location.origin.includes("stackexchange") || window.location.origin.includes("stackoverflow")) {
    augment(conditions);
  }

})(window, document);