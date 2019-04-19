import * as actions from "../actions";
import * as api from "../api/api.js"

function setTask(originalAction) {
  return function(dispatch) {
    const {
      updateTaskDescription,
      updateTaskCategories,
      updateRoute,
      updateCategoriesLoading
    } = actions;
    const description = originalAction.description;
    dispatch(updateTaskDescription(description));
    try {
      dispatch(updateRoute("/task"));
      dispatch(updateCategoriesLoading(true));
      api.getCategorySetForTask(description).then(function(categories) {
        dispatch(updateTaskCategories(categories));
        dispatch(updateCategoriesLoading(false));
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export default {
  SET_TASK: setTask
};
