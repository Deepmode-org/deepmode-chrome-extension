import {connect} from 'react-redux';
import { pause, play } from '../actions';
import PopupHeader from '../components/PopupHeader';

const mapStateToProps = (state) => {
  return {
    isPaused: state.isPaused,
    protagonist: state.protagonist
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    pause: () => dispatch(pause()),
    play: () => dispatch(play())
  };
}

const PopupHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupHeader);

export default PopupHeaderContainer;
