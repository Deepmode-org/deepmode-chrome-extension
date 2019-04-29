import {connect} from "react-redux";
import { deleteAccount, updateRoute } from "../actions";
import Settings from "../components/Settings";

const mapStateToProps = (state) => {
  return {
    protagonist: state.protagonist
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAccount: protagonistID => dispatch(deleteAccount(protagonistID)),
    updateRoute: route => dispatch(updateRoute(route))
  };
}

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default SettingsContainer;
