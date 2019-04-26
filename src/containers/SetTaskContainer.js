import { connect } from "react-redux";
import { setTask, updateTaskDescription, updateTaskCategories, updateRoute, addRecentTask } from "../actions/";
import SetTask from "../components/SetTask";

const mapStateToProps = (state) => {
  return {
    currentTask: state.currentTask,
    recentTasks: state.recentTasks
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTask: description => dispatch(setTask(description)),
    updateTaskDescription: description => dispatch(updateTaskDescription(description)),
    updateTaskCategories: categories => dispatch(updateTaskCategories(categories)),
    updateRoute: route => dispatch(updateRoute(route)),
    addRecentTask: task => dispatch(addRecentTask(task))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetTask);
