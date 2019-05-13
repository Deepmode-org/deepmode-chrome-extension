import React from "react";
import Logo from "./Logo";
import IoIosPause from "react-icons/lib/io/ios-pause";
import IoIosPlay from "react-icons/lib/io/ios-play";
import IoIosGear from "react-icons/lib/io/ios-gear";
import IoClipboard from "react-icons/lib/io/clipboard";

class PopupHeader extends React.Component {
  render() {
    const { isPaused, pause, play, protagonist, updateRoute, onTask } = this.props;
    return (
      <header className={protagonist ? "PopupHeader" : "d-none" }>
        <Logo onClick={updateRoute.bind(this, "/")} />
        <div className="nav-icons">
          <div className={isPaused ? "d-none" : "nav-icon"}>
            <IoIosPause size="25" onClick={pause.bind(this)} />
            <span>Pause</span>
          </div>
          <div className={isPaused ? "nav-icon" : "d-none"}>
            <IoIosPlay size="25" onClick={play.bind(this)} />
            <span>Run</span>
          </div>
          <div className="nav-icon">
            <IoClipboard size="25" onClick={() => onTask ? updateRoute("/task") : updateRoute("/")} />
            <span>Task</span>
          </div>
          <div className="nav-icon">
            <IoIosGear size="25" onClick={updateRoute.bind(this, "/settings")} />
            <span>Settings</span>
          </div>
        </div>
      </header>
    );
  }
}

export default PopupHeader;
