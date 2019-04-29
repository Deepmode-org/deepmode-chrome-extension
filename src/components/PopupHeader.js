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
        <div>
          <IoIosPause size="25" onClick={pause.bind(this)} className={isPaused ? "d-none" : ""} />
          <IoIosPlay size="25" onClick={play.bind(this)} className={isPaused ? "" : "d-none"} />
          <IoClipboard size="25" onClick={() => onTask ? updateRoute("/task") : updateRoute("/")} />
          <IoIosGear size="25" onClick={updateRoute.bind(this, "/settings")} />
        </div>
      </header>
    );
  }
}

export default PopupHeader;
