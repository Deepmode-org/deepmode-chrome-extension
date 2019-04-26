import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <div className="Logo">     
        <img src="/images/icon_32.png" alt="Deep Mode Icon" />
        <span className={this.props.light ? "text-light text-bold" : "text-bold"}>Deepmode</span>
      </div>
    );
  }
}

export default Logo;
