import { connect } from "react-redux";
import { updateTaskCategories, updateRoute, addRecentTask } from "../actions";
import OnTask from "../components/OnTask";

const mapStateToProps = (state) => {
  return {
    currentTaskDescription: state.taskDescription,
    currentTaskCategories: state.taskCategories,
    currentTaskConcepts: state.taskConcepts,
    categoriesLoading: state.categoriesLoading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTaskCategories: categories => dispatch(updateTaskCategories(categories)),
    updateRoute: route => dispatch(updateRoute(route)),
    addRecentTask: task => dispatch(addRecentTask(task))
  };
}

const OnTaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OnTask);

export default OnTaskContainer;
