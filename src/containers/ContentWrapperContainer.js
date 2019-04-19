import {connect} from 'react-redux';
// import {  } from '../actions';
import ContentWrapper from '../components/ContentWrapper';

const mapStateToProps = (state) => {
  return {
    elem: state.elem
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

const ContentWrapperContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentWrapper);

export default ContentWrapperContainer;
