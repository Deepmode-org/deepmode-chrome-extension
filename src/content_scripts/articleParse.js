import { analysePageOutline } from "../api/api.js";

function isNotArticle(url) {
  return [
    "twitter.",
    "google.",
    "slack.com",
    "andrewchen.co",
    "indiehackers.com",
    "producthunt.com",
    "workona.com",
    "prospr.biz",
    "graylog.org",
    "notion.so",
    "youtube.",
    "192.168.33.10"
  ].filter(function(str) {
    return url.includes(str);
  }).length > 0;
}

export default function articleParse(window, document) {

  if (isNotArticle(window.location.href))
    return;

  let hasArticleTag = false;

  let mo = new MutationObserver(articlePreparations);
  mo.observe(document.documentElement, { childList: true, subtree: true });

  var deepmodePrepareElem = document.createElement("div");
  deepmodePrepareElem.id = "deepmode-prepare";
  deepmodePrepareElem.innerHTML = "<p>Take a deep breath and remember why you came to this article</p>";

  setTimeout(function() {
    deepmodePrepareElem.style.display = "none";
  }, 5000);

  function articlePreparations(mutations) {
    for (let i = 0; i < mutations.length; i++) {
      let nodes = mutations[i].addedNodes;
      for (let j = 0; j < nodes.length; j++) {
        if (nodes[j].content && nodes[j].content === "article") {
          hasArticleTag = true;
        }

        if (nodes[j].tagName === "BODY" && hasArticleTag) {
          nodes[j].appendChild(deepmodePrepareElem);
        }
      }
    }
  }

  document.addEventListener("DOMContentLoaded", (e) => {
    window.deepmode = window.deepmode || {};
    window.deepmode.previousContent = document.body.innerHTML.replace(`<div id="deepmode-prepare"><p>Take a deep breath and remember why you came to this article</p></div>`, "");
    mo.disconnect();
  });

  analysePageOutline(window.location.href).then((res) => {
    if (!res.success)
      throw res;

    if (hasArticleTag && res.success) {
      let { title, html } = res.data;
      if (title && html) {  
        document.body.innerHTML =
          `<div id='deepmode-cancel-article-view'>Close focused view</div>
          <div id='deepmode-article-wrapper'>
            <main>
              <h1>${title}</h1>
              ${html}
            </main>
          </div>
          <div id="deepmode-prepare"><p>Take a deep breath and remember why you came to this article</p></div>`;

        document.getElementById("deepmode-cancel-article-view").addEventListener("click", function(e) {
          document.body.innerHTML = window.deepmode.previousContent;
        });

        let node = document.getElementById("deepmode-prepare");
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
      }
    } else {
      let node = document.getElementById("deepmode-prepare");
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }).catch(function(err) {
    console.log(err);
    let node = document.getElementById("deepmode-prepare");
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}
