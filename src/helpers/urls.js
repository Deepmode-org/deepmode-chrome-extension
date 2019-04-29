/*
  Helper functions for dealing with URLs
*/

export function isUrlInBlacklist(blacklist, url) {
  return blacklist.some(function(bUrl) {
    return url.includes(bUrl);
  });
}

export function isUrlInWhitelist(whitelist, url) {
  return whitelist.some(function(wUrl) {
    return url.includes(wUrl);
  });
}
