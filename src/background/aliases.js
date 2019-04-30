import store from "./store.js";
import * as actions from "../actions";
import * as api from "../api/api.js"
import { setStateToChromeStorage, setStateToLocalStorage } from "../helpers/storage.js";

function setTask(originalAction) {
  return function(dispatch) {
    const {
      updateTaskDescription,
      updateTaskCategories,
      updateRoute,
      updateCategoriesLoading,
      addRecentTask,
      play
    } = actions;
    
    const description = originalAction.description;
    dispatch(play());
    dispatch(updateTaskDescription(description));
    
    try {
      dispatch(updateRoute("/task"));
      dispatch(updateCategoriesLoading(true));
      api.getCategorySetForTask(description).then(function(categories) {
        dispatch(updateTaskCategories(categories));
        dispatch(updateCategoriesLoading(false));
        dispatch(addRecentTask({ description, categories }));
        const { protagonist } = store.getState();
      });
    } catch (err) {
      console.log(err);
    }
  };
}

function onAuth(originalAction) {
  const { setProtagonist, setRecentTasks, setBlacklist, setWhitelist } = actions;
  return function(dispatch) {
    return chrome.identity.getAuthToken({ interactive: true }, function(token) {
      // Return if there was an error
      if (!token) {
        return;
      }
      
      let params = {
        method: "GET",
        async: true,
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        },
        "contentType": "json"
      };

      fetch(
        "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + token,
        params
      )
      .then(response => response.json())
      .then(function(data) {
        const { email, name, locale } = data;
        const protagonistToInsert = { email, name, locale };

        api.onAuth(protagonistToInsert).then(function(stateFromDB) {
          // Update state with info in the DB
          setStateToChromeStorage(stateFromDB);
          setStateToLocalStorage(stateFromDB);

          const { protagonist, blacklist, whitelist, recentTasks } = stateFromDB;
          
          dispatch(setProtagonist(protagonist));
          dispatch(setBlacklist(blacklist));
          dispatch(setWhitelist(whitelist));
          dispatch(setRecentTasks(recentTasks));
        }).catch(function(err) {
          console.log(err);
          // do something with error
        });
      });
    });
  }
}

function signOut(originalAction) {
  const { unsetProtagonist } = actions;
  return function(dispatch) {
    return chrome.identity.getAuthToken(function(token) {
      if (token) {
        return chrome.identity.removeCachedAuthToken({ token }, function() {
          dispatch(unsetProtagonist());
        });
      } else {
        // If there was an error, remove protagonist from state anyway
        dispatch(unsetProtagonist());
      }
    })
  }
}

export default {
  SET_TASK: setTask,
  ON_AUTH: onAuth,
  SIGN_OUT: signOut
};
