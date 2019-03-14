function extractDomainNameWithoutTLD(url) {
  return url.split("//")[1].replace("www.", "").split(".").slice(-2, -1)[0]
}
