import {connect} from 'react-redux';
import { addToBlacklist, removeFromBlacklist } from '../actions';
import Blacklist from '../components/Blacklist';

const mapStateToProps = (state) => {
  return {
    blacklist: state.blacklist
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToBlacklist: site => dispatch(addToBlacklist(site)),
    removeFromBlacklist: index => dispatch(removeFromBlacklist(index))
  };
}

const BlacklistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Blacklist);

export default BlacklistContainer;
