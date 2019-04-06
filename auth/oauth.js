var googleSignup = document.getElementById("google-signup");
if (googleSignup) {
  googleSignup.addEventListener("click", function() {
    chrome.identity.getAuthToken({ interactive: true }, function(token) {
      if (chrome.runtime.lastError) {
        // console.log(chrome.runtime.lastError);
      } else {
        var req = new XMLHttpRequest();
        req.open("GET", "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + token);
        req.onload = function() {
          if (this.status === 200) {
            chrome.storage.sync.set({ "deepmodeUser": JSON.parse(this.response) });
          }
        };
        req.send();
      }
    });
  });
}
