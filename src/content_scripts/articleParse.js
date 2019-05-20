import { analysePageOutline } from "../api/api.js";
import insertCSS from "./insertCSS";
import { closeCurrentTab } from "./messaging";


function isDistractingSidebar(element) {
  // Function to return an estimate of whether an element is a distracting sidebar
  // Done by looking at height and width of element relative to page, number of links and number of images

}

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

export function articleParse(window, document) {

  if (isNotArticle(window.location.href))
    return;

  let hasArticleTag = false;

  let mo = new MutationObserver(articlePreparations);
  mo.observe(document.documentElement, { childList: true, subtree: true });

  function articlePreparations(mutations) {
    for (let i = 0; i < mutations.length; i++) {
      let nodes = mutations[i].addedNodes;
      for (let j = 0; j < nodes.length; j++) {
        if (nodes[j].content && nodes[j].content === "article") {
          hasArticleTag = true;
        }

        if (nodes[j].tagName === "BODY" && hasArticleTag) {
          nodes[j].style.visibility = "hidden";
        }
      }
    }
  }

  document.addEventListener("DOMContentLoaded", (e) => {
    window.deepmode = window.deepmode || {};
    window.deepmode.previousContent = document.body.innerHTML;
    mo.disconnect();
  });

  analysePageOutline(window.location.href).then((res) => {
    if (!res.success)
      throw res;

    if (hasArticleTag && res.success) {
      insertCSS("dist/styles/article.css");
      setTimeout(() => document.body.style.visibility = "visible", 500);

      let { title, html } = res.data;
      if (title && html) {
        document.body.innerHTML =
          `<div id="deepmode-cancel-article-view">Close focused view</div>
          <div id="deepmode-article-wrapper">
            <main>
              <h1>${title}</h1>
              ${html}
            </main>
            <div id="deepmode-end-of-article">Close article</div>
          </div>`;

        document.getElementById("deepmode-cancel-article-view").addEventListener("click", function(e) {
          document.body.innerHTML = window.deepmode.previousContent;
        });

        document.getElementById("deepmode-end-of-article").addEventListener("click", closeCurrentTab);
      }
    } else {
      document.body.style.visibility = "visible"
    }
  }).catch(function(err) {
    document.body.style.visibility = "visible";
    console.log(err);
    let node = document.getElementById("deepmode-prepare");
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}
