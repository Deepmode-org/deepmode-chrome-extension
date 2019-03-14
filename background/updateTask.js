chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "update_task") {
    api
      .getCategorySetForTask(request.currentTaskDescription)
      .then(function(categories) {
        chrome.storage.sync.set({
          currentTaskCategories: categories
        });
        // Send message back to indicate that request has finished
        chrome.runtime.sendMessage({
          type: "finished_loading_categories"
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
