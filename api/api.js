function makeRequest(type, uri, data) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open(type, uri);

    req.onload = function() {
      if (this.status === 200) {
        resolve(JSON.parse(this.response));
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
  });
}

function checkMatch(currentCategories, newTitle, newURL) {
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

var api = {
  checkMatch: checkMatch,
  getCategorySetForTask: getCategorySetForTask
};
