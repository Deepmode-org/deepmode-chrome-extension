import * as api from "../api/api.js";
export const UPDATE_TASK_DESCRIPTION = "UPDATE_TASK_DESCRIPTION";
export const UPDATE_TASK_CATEGORIES = "UPDATE_TASK_CATEGORIES";
export const UPDATE_TASK_CONCEPTS = "UPDATE_TASK_CONCEPTS";
export const SET_TASK = "SET_TASK";
export const UPDATE_ROUTE = "UPDATE_ROUTE";
export const ADD_TO_BLACKLIST = "ADD_TO_BLACKLIST";
export const REMOVE_FROM_BLACKLIST = "REMOVE_FROM_BLACKLIST";
export const SET_BLACKLIST = "SET_BLACKLIST";
export const ADD_TO_WHITELIST = "ADD_TO_WHITELIST";
export const REMOVE_FROM_WHITELIST = "REMOVE_FROM_WHITELIST";
export const SET_WHITELIST = "SET_WHITELIST";
export const UPDATE_CATEGORIES_LOADING = "UPDATE_CATEGORIES_LOADING";
export const PAUSE = "PAUSE";
export const PLAY = "PLAY";
export const SET_PROTAGONIST = "SET_PROTAGONIST";
export const UNSET_PROTAGONIST = "UNSET_PROTAGONIST";
export const ON_AUTH = "ON_AUTH";
export const SIGN_OUT = "SIGN_OUT";
export const SET_RECENT_TASKS = "SET_RECENT_TASKS";
export const ADD_RECENT_TASK = "ADD_RECENT_TASK";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
export const UPDATE_AUTH_LOADING = "UPDATE_AUTH_LOADING";
export const ADD_TO_TEMP_CACHE = "ADD_TO_TEMP_CACHE";
export const FILTER_TEMP_CACHE = "FILTER_TEMP_CACHE";

export function updateTaskDescription(description) {
  return {
    type: UPDATE_TASK_DESCRIPTION,
    description
  };
}

export function updateTaskCategories(categories) {
  return {
    type: UPDATE_TASK_CATEGORIES,
    categories
  };
}

export function updateTaskConcepts(concepts) {
  return {
    type: UPDATE_TASK_CONCEPTS,
    concepts
  };
}

export function setTask(description) {
  return {
    type: SET_TASK,
    description
  };
}

export function updateRoute(route) {
  return {
    type: UPDATE_ROUTE,
    route
  };
}

export function addToBlacklist(site) {
  return {
    type: ADD_TO_BLACKLIST,
    site
  };
}

export function removeFromBlacklist(index) {
  return {
    type: REMOVE_FROM_BLACKLIST,
    index
  };
}

export function setBlacklist(blacklist) {
  return {
    type: SET_BLACKLIST,
    blacklist
  };
}

export function addToWhitelist(site) {
  return {
    type: ADD_TO_WHITELIST,
    site
  };
}

export function removeFromWhitelist(index) {
  return {
    type: REMOVE_FROM_WHITELIST,
    index
  };
}

export function setWhitelist(whitelist) {
  return {
    type: SET_WHITELIST,
    whitelist
  };
}

export function updateCategoriesLoading(loading) {
  return {
    type: UPDATE_CATEGORIES_LOADING,
    loading
  };
}

export function pause() {
  return {
    type: PAUSE
  };
}

export function play() {
  return {
    type: PLAY
  };
}

export function onAuth() {
  return {
    type: ON_AUTH
  };
}

export function setProtagonist(protagonist) {
  return {
    type: SET_PROTAGONIST,
    protagonist
  };
}

export function unsetProtagonist() {
  return {
    type: UNSET_PROTAGONIST
  };
}

export function setRecentTasks(tasks) {
  return {
    type: SET_RECENT_TASKS,
    tasks
  };
}

export function addRecentTask(task) {
  return {
    type: ADD_RECENT_TASK,
    task
  };
}

export function signOut() {
  return {
    type: SIGN_OUT
  };
}

export function deleteAccount(protagonistID) {
  return {
    type: DELETE_ACCOUNT,
    protagonistID
  };
}

export function updateAuthLoading(loading) {
  return {
    type: UPDATE_AUTH_LOADING,
    loading
  };
}

export function addToTempCache(url) {
  return {
    type: ADD_TO_TEMP_CACHE,
    url
  };
}

export function filterTempCache() {
  return {
    type: FILTER_TEMP_CACHE
  };
}
