import React, { PropTypes } from "react";
import IoIosCloseEmpty from "react-icons/lib/io/ios-close-empty";

class Whitelist extends React.Component {
  constructor(props) {
    super(props);
    this.urlInputRef = React.createRef();
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(e) {
    const url = e.target.value;
    if (e.key === "Enter" && url.length >= 4) {
      this.props.addToWhitelist(url);
      this.urlInputRef.current.value = "";
    }
  }

  render() {
    const { whitelist, removeFromWhitelist } = this.props;
    const whitelistDisplay = whitelist.length ?
      <table className="table table-striped table-hover table-scroll-v">
        <tbody>
          {
            whitelist.map(function(url, i) {
              return (
                <tr key={i}>
                  <td className="url">{url}</td>
                  <td className="remove-url">
                    <IoIosCloseEmpty size="25" onClick={removeFromWhitelist.bind(this, i)} />
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      :
      <p className="empty-whitelist text-center">
        No URLs on the whitelist yet, try adding one above
      </p>
    return (
      <div className="Whitelist">
        <h5>Whitelist</h5>
        <p>Add URLs that are always OK to access while working to your whitelist.</p>
        <label>
          <h6 className="text-center">Add URL</h6>
          <input ref={this.urlInputRef} className="form-input" placeholder="e.g. dropbox.com" type="url" onKeyDown={this.handleEnter} />
        </label>
        {whitelistDisplay}
      </div>
    );
  }
}

Whitelist.propTypes = {};

export default Whitelist;
