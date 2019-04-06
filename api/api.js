function makeRequest(type, uri, data) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open(type, uri);

    req.onload = function() {
      if (this.status === 200) {
        resolve(JSON.parse(this.response));
        console.timeEnd("timer")
      } else {
        reject(this.error);
      }
    };

    if (data) {
      req.setRequestHeader("Content-Type",  "application/json");
      req.send(JSON.stringify(data));
    } else {
      req.send();
    }
    console.time("timer");
  });
}

function checkMatch(currentCategories, newTitle, newURL) {
  if (newURL === "chrome://newtab/")
    return;
  return makeRequest("POST", "http://localhost:5000/match", {
    currentCategories: currentCategories,
    title: newTitle,
    url: newURL
  });
}

function getCategorySetForTask(taskDescription) {
  return makeRequest(
    "GET",
    encodeURI(
      "http://localhost:5000/categorySet?task_description=" +
      taskDescription
    )
  );
}

function parseArticle(url) {
  return makeRequest(
    "GET",
    encodeURI(
      "http://localhost:5000/parse?url=" + url
    )
  );
}

function analysePage(url) {
  return makeRequest(
    "GET",
    "https://api.diffbot.com/v3/analyze?token=5afe5c8cabb314a035a88f2c8cc6c16d&url=" + encodeURIComponent(url)
  );
}

var api = {
  checkMatch: checkMatch,
  getCategorySetForTask: getCategorySetForTask,
  parseArticle: parseArticle,
  analysePage: analysePage
};
