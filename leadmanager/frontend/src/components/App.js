import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Headers from "./layouts/Headers";
import Dashbard from "./leads/Dashbard";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Headers />
          <div className="container">
            <Dashbard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
