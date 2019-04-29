import {connect} from "react-redux";
import { addToWhitelist, removeFromWhitelist } from "../actions";
import Whitelist from "../components/Whitelist";

const mapStateToProps = (state) => {
  return {
    whitelist: state.whitelist
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToWhitelist: site => dispatch(addToWhitelist(site)),
    removeFromWhitelist: index => dispatch(removeFromWhitelist(index))
  };
}

const WhitelistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Whitelist);

export default WhitelistContainer;
