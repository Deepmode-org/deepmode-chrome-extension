import { connect } from "react-redux";
import { updateRoute } from "../actions";
import Popup from "../components/Popup";

const mapStateToProps = (state) => {
  return {
    taskDescription: state.taskDescription,
    route: state.route,
    protagonist: state.protagonist
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateRoute: route => dispatch(updateRoute(route))
  };
}

const PopupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);

export default PopupContainer;
