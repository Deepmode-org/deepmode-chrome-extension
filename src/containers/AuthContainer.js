import {connect} from 'react-redux';
import { onAuth } from '../actions';
import Auth from '../components/Auth';

const mapStateToProps = (state) => {
  return {
    protagonist: state.protagonist
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: protagonist => dispatch(onAuth(protagonist))
  };
}

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default AuthContainer;
