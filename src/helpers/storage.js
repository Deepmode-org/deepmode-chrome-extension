/*
  Shortcut functions for storing data in multiple places - local storage, chrome storage sync and Deepmode DB
*/

import * as _ from "underscore";
import { addRecentTask, updateBlacklist, updateWhitelist } from "../api/api.js";

// Takes an object with zero or more properties of state that require long term storage
// and merges and syncs the changes
export function storeStateDiff(stateDiff) {
  getStateFromChromeStorage().then(function(state) {
    if (state) {
      let updatedState = Object.assign({}, state, stateDiff);
      setStateToChromeStorage(updatedState);
      setStateToLocalStorage(updatedState);
      setStateToDB(state, stateDiff);
    } else {
      getStateFromDB().then(function(state) {
        let updatedState = Object.assign(state, stateDiff);
        setStateToChromeStorage(updatedState);
        setStateToLocalStorage(updatedState);
      });
    }
  });
}

export async function getStateFromChromeStorage() {
  return new Promise(function(resolve, reject) {
    chrome.storage.sync.get(["deepmode_state"], function(data) {
      if (chrome.runtime.lastError)
        reject(chrome.runtime.lastError.message);
      else
        resolve(data.deepmode_state);
    });
  });
}

export async function setStateToChromeStorage(state) {
  return new Promise(function(resolve, reject) {
    chrome.storage.sync.set({ deepmode_state: state }, function() {
      if (chrome.runtime.lastError)
        reject(chrome.runtime.lastError.message);
      else
        resolve(state);
    });
  });
}

export function getStateFromLocalStorage() {
  return localStorage.deepmode_state ? JSON.parse(localStorage.deepmode_state) : {};
}

export function setStateToLocalStorage(state) {
  return localStorage.deepmode_state = JSON.stringify(state);
}

async function setStateToDB(state, stateDiff) {
  // Update task if the categories have changed
  let { protagonist, blacklist, whitelist } = state;

  if (stateDiff.recentTasks.length) {
    let { description, categories, concepts } = stateDiff.recentTasks[0];
    let originalTask = state.recentTasks.find(task => task.description === description);
    if (_.difference(categories, originalTask.categories).length) {
      // Add task in DB if categories are adjusted
      addRecentTask(protagonist.id, description, categories, concepts);
    } else if (stateDiff.recentTasks[0].description !== state.recentTasks[0].description) {
      // Add task in DB when a new task is started
      addRecentTask(protagonist.id, description, categories, concepts);
    }
  }

  // Update blacklist if it has changed
  let areBlacklistsEquivalent = blacklist.every(function(url) {
    return stateDiff.blacklist.includes(url);
  }) && (blacklist.length === stateDiff.blacklist.length);

  if (!areBlacklistsEquivalent) {
    updateBlacklist(protagonist.id, stateDiff.blacklist);
  }

  // Update whitelist if it has changed
  let areWhitelistsEquivalent = whitelist.every(function(url) {
    return stateDiff.whitelist.includes(url);
  }) && (whitelist.length === stateDiff.whitelist.length);

  if (!areWhitelistsEquivalent) {
    updateWhitelist(protagonist.id, stateDiff.whitelist);
  }
}

async function getStateFromDB() {
  return Promise.resolve({});
}
