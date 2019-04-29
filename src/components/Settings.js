import React, { PropTypes } from "react";
import TiCancel from "react-icons/lib/ti/cancel";
import TiThumbsUp from "react-icons/lib/ti/thumbs-up";
import IoAnroidExit from "react-icons/lib/io/android-exit";

class Settings extends React.Component {
  render() {
    const { updateRoute, deleteAccount, signOut } = this.props;
    return (
      <div className="Settings">
        <h6>Edit blacklist:</h6>
        <button className="btn" onClick={updateRoute.bind(this, "/blacklist")}>
          <TiCancel size="25" />
          Edit blacklist
        </button>
        <h6>Edit whitelist:</h6>
        <button className="btn" onClick={updateRoute.bind(this, "/whitelist")}>
          <TiThumbsUp size="25" />
          Edit whitelist
        </button>
        <h6>Sign out:</h6>
        <button className="btn"onClick={signOut}>
          <IoAnroidExit size="25" />
          Sign out
        </button>
        {/*<h6>Delete Account:</h6>
        <button className="btn btn-error">Delete</button>*/}
      </div>
    );
  }
}

Settings.propTypes = {};

export default Settings;
