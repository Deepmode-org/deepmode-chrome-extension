import "../styles/popup.scss"
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import PopupContainer from "../containers/PopupContainer";
import SetTaskContainer from "../containers/SetTaskContainer";
import OnTaskContainer from "../containers/OnTaskContainer";
import { Store } from "webext-redux";

const store = new Store({
  portName: "deepmode_bg_bridge"
});

store.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <PopupContainer />
    </Provider>,
    document.getElementById("root")
  );
});
