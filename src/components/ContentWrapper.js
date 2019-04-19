import React, { PropTypes } from "react";
import DistractionBlockContainer from "../containers/DistractionBlockContainer.js";

class ContentWrapper extends React.Component {
  render() {
    const { blockMap } = this.props;
    let toRender = null;

    return (
      <div className="ContentWrapper">
        {toRender}
      </div>
    );
  }
}

ContentWrapper.propTypes = {};

export default ContentWrapper;
