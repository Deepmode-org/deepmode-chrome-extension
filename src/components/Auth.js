import React, { PropTypes } from "react";
import Logo from "./Logo";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.authWithGoogle = this.authWithGoogle.bind(this);
  }

  authWithGoogle() {
    const { onAuth } = this.props;
    return onAuth();
  }

  render() {
    const { authLoading } = this.props;
    return (
      <div className="Auth">
        <Logo light />
        <div className="auth-form">
          <h4 className="text-light text-center">
            Goodbye distraction.<br/> Hello productivity.
          </h4>
          <p className="text-light text-center">
            Deepmode recognises and blocks every distraction, keeping you mindful and productive
          </p>
          <button className={authLoading ? "d-none" : "btn"} onClick={this.authWithGoogle}>
            Authenticate with Google
            <div>
              <img width="22" src="/images/google-icon.png" alt="Google Icon" />
            </div>
          </button>
          <div className={authLoading ? "loading loading-lg": "d-none"}></div>
        </div>
      </div>
    );
  }
}

Auth.propTypes = {};

export default Auth;
