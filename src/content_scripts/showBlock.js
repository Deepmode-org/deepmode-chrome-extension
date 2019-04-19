import { closeCurrentTab } from "./messaging.js";

export default function showBlock(window, document, taskDescription) {
  let blockInner = `
    <div class="ContentWrapper">
      <div class="DistractionBlock">
        <div class="container grid-sm">
          <div class="task-summary columns">
            <div class="column">
              <div class="current">
                <p>
                  Here's what you're supposed to be working on:
                </p>
                <p class="task text-bold text-italic">
                  ${taskDescription}
                </p>
              </div>
              <div class="new-page">
                <p>Here's what this new page is about:</p>
                <p class="page-title text-bold text-italic">
                  ${document.title}
                </p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <p>Are you on task?</p>
            </div>
          </div>
          <div class="options columns">
            <div class="column">
              <button id="deepmode-allow-tab" class="allow-tab btn">
                Yes, continue
              </button>
              <button id="deepmode-close-tab" class="close-tab btn btn-success">
                No, close this tab
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  let deepmodeRootElem = document.getElementById("deepmode-root");
  deepmodeRootElem.innerHTML = blockInner;
  deepmodeRootElem.style.display = "block";
  document.getElementById("deepmode-allow-tab").addEventListener("click", function() {
    deepmodeRootElem.style.display = "none";
  });
  document.getElementById("deepmode-close-tab").addEventListener("click", closeCurrentTab);
}
