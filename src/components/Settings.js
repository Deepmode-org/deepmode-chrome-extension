import React, { PropTypes } from "react";
import TiCancel from "react-icons/lib/ti/cancel";
import TiThumbsUp from "react-icons/lib/ti/thumbs-up";

class Settings extends React.Component {
  render() {
    const { updateRoute, deleteAccount } = this.props;
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
        <h6>Delete Account:</h6>
        <button className="btn btn-error">Delete</button>
      </div>
    );
  }
}

Settings.propTypes = {};

export default Settings;
