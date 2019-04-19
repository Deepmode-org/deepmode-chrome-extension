/*
  Code to change specific sites to remove distracting features
*/
import augment from "./augment.js";
import augmentationConditions from "./augmentationConditions.js";
import extractDomainNameWithoutTLD from "../helpers/extractDomain.js";

export function updateUI(url) {
  let domain = extractDomainNameWithoutTLD(url);

  switch (domain) {
    case "stackoverflow":
    case "stackexchange":
      return augment(augmentationConditions["stackexchange"]);
    case "youtube":
      return augment(augmentationConditions["youtube"], true);
    // case "ycombinator":
    //   if (url.includes("news.ycombinator"))
    //     return augment(augmentationConditions["hackernews"]);
    case "quora":
      return augment(augmentationConditions["quora"]);
    default:
      return;
  }
}
