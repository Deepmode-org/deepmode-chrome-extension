cd ..
mkdir deepmode-extension-build
mv deepmode-extension/dist deepmode-extension-build/
scp -r deepmode-extension/images deepmode-extension-build/

cat > deepmode-extension-build/dist/popup/popup.html <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
  <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,600" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.1.1/themes/reset-min.css" integrity="sha256-JQ2nnTmybhOWSjfV3sa8mG0ZVhTCcORER4cyXc5HL10=" crossorigin="anonymous">
  <link rel="stylesheet" href="popup.css">
</head>
<body>
  <div id="root"></div>
  <script src="popup.js"></script>
</body>
</html>

EOF

cat > deepmode-extension-build/manifest.json <<EOF
{
  "name": "Deepmode - Intelligent website blocker",
  "short_name": "Deepmode",
  "version": "",
  "description": "Stay on task, online",
  "permissions": ["identity", "activeTab", "tabs", "storage"],
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'",
  "background": {
    "scripts": ["dist/background/index.js"],
    "persistent": true
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["dist/content_scripts/index.js"],
      "run_at": "document_start"
    }
  ],
  "web_accessible_resources": ["dist/content_scripts/index.css"],
  "browser_action": {
    "default_popup": "dist/popup/popup.html",
    "default_icon": {
      "16": "images/icon_16.png",
      "32": "images/icon_32.png",
      "48": "images/icon_48.png",
      "128": "images/icon_128.png"
    }
  },
  "icons": {
    "16": "images/icon_16.png",
    "32": "images/icon_32.png",
    "48": "images/icon_48.png",
    "128": "images/icon_128.png"
  },
  "oauth2": {
    "client_id": "771123873717-jq2973lg9sjkkvhs0nepeuk5p5bl5aes.apps.googleusercontent.com",
    "scopes": [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"
    ]
  },
  "manifest_version": 2
}
EOF
