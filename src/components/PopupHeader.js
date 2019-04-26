import React from "react";
import Logo from "./Logo";
import IoIosPause from "react-icons/lib/io/ios-pause";
import IoIosPlay from "react-icons/lib/io/ios-play";
import IoIosGear from "react-icons/lib/io/ios-gear";

class PopupHeader extends React.Component {
  render() {
    const { isPaused, pause, play, protagonist } = this.props;
    return (
      <header className={protagonist ? "PopupHeader" : "d-none" }>
        <Logo />
        <div>
          <IoIosPause size="25" onClick={pause.bind(this)} className={isPaused ? "d-none" : ""} />
          <IoIosPlay size="25" onClick={play.bind(this)} className={isPaused ? "" : "d-none"} />
          {/*<IoIosGear size="25" />*/}
        </div>
      </header>
    );
  }
}

export default PopupHeader;
