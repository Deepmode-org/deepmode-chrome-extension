import React, { PropTypes } from "react";
import IoIosCloseEmpty from "react-icons/lib/io/ios-close-empty";

class Blacklist extends React.Component {
  constructor(props) {
    super(props);
    this.urlInputRef = React.createRef();
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(e) {
    const url = e.target.value;
    if (e.key === "Enter" && url.length >= 4) {
      this.props.addToBlacklist(url);
      this.urlInputRef.current.value = "";
    }
  }

  render() {
    const { blacklist, removeFromBlacklist } = this.props;
    const blacklistDisplay = blacklist.length ?
      <table className="table table-striped table-hover table-scroll-v">
        <tbody>
          {
            blacklist.map(function(url, i) {
              return (
                <tr key={i}>
                  <td className="url">{url}</td>
                  <td className="remove-url">
                    <IoIosCloseEmpty size="25" onClick={removeFromBlacklist.bind(this, i)} />
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      :
      <p className="empty-blacklist text-center">
        No URLs on the blacklist yet, try adding one above
      </p>
    return (
      <div className="Blacklist">
        <h5>Blacklist</h5>
        <label>
          <h6 className="text-center">Add URL</h6>
          <input
            ref={this.urlInputRef}
            className="form-input"
            placeholder="e.g. facebook.com"
            type="url"
            onKeyDown={this.handleEnter} />
        </label>
        {blacklistDisplay}
      </div>
    );
  }
}

Blacklist.propTypes = {};

export default Blacklist;
