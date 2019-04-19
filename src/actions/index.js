import * as api from "../api/api.js";
export const UPDATE_TASK_DESCRIPTION = "UPDATE_TASK_DESCRIPTION";
export const UPDATE_TASK_CATEGORIES = "UPDATE_TASK_CATEGORIES";
export const SET_TASK = "SET_TASK";
export const UPDATE_ROUTE = "UPDATE_ROUTE";
export const UPDATE_BLOCK_MAP = "UPDATE_BLOCK_MAP";
export const ADD_TO_BLACKLIST = "ADD_TO_BLACKLIST";
export const UPDATE_CATEGORIES_LOADING = "UPDATE_CATEGORIES_LOADING";
export const PAUSE = "PAUSE";
export const PLAY = "PLAY";

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

export function updateBlockMap(blockMap) {
  return {
    type: UPDATE_BLOCK_MAP,
    blockMap
  };
}

export function addToBlacklist(site) {
  return {
    type: ADD_TO_BLACKLIST,
    site
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
