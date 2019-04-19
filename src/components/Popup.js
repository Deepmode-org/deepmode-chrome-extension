import React from "react";
import PopupHeaderContainer from "../containers/PopupHeaderContainer";
import SetTaskContainer from "../containers/SetTaskContainer";
import OnTaskContainer from "../containers/OnTaskContainer";

class Popup extends React.Component {
  componentDidMount() {
    const { taskDescription, updateRoute } = this.props;
    if (taskDescription)
      return updateRoute("/task");
  }

  render() {
    const { route } = this.props;
    let result = null;
    if (route === "/")
      result = <SetTaskContainer />;
    else if (route === "/task")
      result = <OnTaskContainer />;

    return (
      <div className="Popup">
        <PopupHeaderContainer />
        {result}
      </div>
    );
  }
}

export default Popup;
