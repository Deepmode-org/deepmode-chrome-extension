import React from "react";
import { closeCurrentTab } from "../content_scripts/messaging.js"

class DistractionBlock extends React.Component {
  render() {
    const { taskDescription, updateBlockMap } = this.props;
    return (
      <div className="DistractionBlock">
        <div className="container grid-sm">
          <div className="task-summary columns">
            <div className="column">
              <div className="current">
                <p>Here's what you're supposed to be working on:</p>
                <p className="task text-bold text-italic">{ taskDescription }</p>
              </div>
              <div className="new-page">
                <p>Here's what this new page is about:</p>
                <p className="page-title text-bold text-italic">{window.document.title}</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <p>Are you on task?</p>
            </div>
          </div>
          <div className="options columns">
            <div className="column">
              <button onClick={updateBlockMap.bind(this, "none")} className="allow-tab btn">
                Yes, continue
              </button>
              <button onClick={closeCurrentTab} className="close-tab btn btn-success">
                No, close this tab
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DistractionBlock;
