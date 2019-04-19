import { connect } from "react-redux";
import { setTask } from "../actions/";
import SetTask from "../components/SetTask";

const mapStateToProps = (state) => {
  return {
    currentTask: state.currentTask,
    previousTasks: state.previousTasks
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTask: description => dispatch(setTask(description))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetTask);
