import {connect} from 'react-redux';
import { pause, play, updateRoute } from '../actions';
import PopupHeader from '../components/PopupHeader';

const mapStateToProps = (state) => {
  return {
    isPaused: state.isPaused,
    protagonist: state.protagonist,
    onTask: !!state.taskDescription
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    pause: () => dispatch(pause()),
    play: () => dispatch(play()),
    updateRoute: route => dispatch(updateRoute(route))
  };
}

const PopupHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupHeader);

export default PopupHeaderContainer;
