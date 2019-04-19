import { connect } from "react-redux";
import { updateTaskCategories, updateRoute } from "../actions";
import OnTask from "../components/OnTask";

const mapStateToProps = (state) => {
  return {
    currentTaskDescription: state.taskDescription,
    currentTaskCategories: state.taskCategories,
    categoriesLoading: state.categoriesLoading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTaskCategories: categories => dispatch(updateTaskCategories(categories)),
    updateRoute: route => dispatch(updateRoute(route))
  };
}

const OnTaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OnTask);

export default OnTaskContainer;
