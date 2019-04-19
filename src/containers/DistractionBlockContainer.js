import {connect} from 'react-redux';
import { updateElem } from '../actions';
import DistractionBlock from '../components/DistractionBlock';

const mapStateToProps = (state) => {
  return {
    taskDescription: state.taskDescription
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateElem: elem => dispatch(updateElem(elem))
  };
}

const DistractionBlockContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DistractionBlock);

export default DistractionBlockContainer;
