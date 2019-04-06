var vm = new Vue({
  el: "#content",
  data: {
    user: true,
    currentTaskDescription: "",
    currentTaskCategories: [],
    categoriesLoading: false
  },

  created: function() {
    var that = this;
    this.categoriesLoading = false;
    chrome.storage.sync.get(["currentTaskDescription", "currentTaskCategories", "deepmodeUser"], function(obj) {
      that.currentTaskDescription = obj.currentTaskDescription;
      that.currentTaskCategories = obj.currentTaskCategories;
      that.user = obj.deepmodeUser = true;
    });
  },

  methods: {
    // Process disappears when popup is closed so unfinished functions disapper
    // Need to move this to a background page to prevent that from happening
    setTask: function(event) {
      var that = this;
      var currentTaskDescription = this.currentTaskDescription
      if (currentTaskDescription) {
        chrome.storage.sync.set({
          currentTaskDescription: currentTaskDescription
        });

        chrome.runtime.onMessage.addListener(function(msg) {
          if (msg.type === "finished_loading_categories") {
            chrome.storage.sync.get("currentTaskCategories", function(obj) {
              that.currentTaskCategories = obj.currentTaskCategories;
              that.categoriesLoading = false;
            });
          }
        });

        this.categoriesLoading = true;
        // Retrieve the categories for this task from the NLP API
        chrome.runtime.sendMessage({
          type: "update_task",
          currentTaskDescription: currentTaskDescription
        });
      }
    },

    updateCategories: function(categories) {
      var that = this;
      return chrome.storage.sync.set({
        currentTaskCategories: categories
      }, function(obj) {
        return that.currentTaskCategories = categories;
      });
    },

    removeCategory: function(index) {
      return this.updateCategories(this.currentTaskCategories.filter(function(c, j) {
        return j !== index;
      }));
    }
  }
})
