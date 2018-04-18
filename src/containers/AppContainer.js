import React, { Component } from "react";
import "../styles/AppContainer.css";
import BlockContainer from "./BlockContainer";

class AppContainer extends Component {
  render() {
    return (
      <div className="app">
        <BlockContainer rows="8" cols="8" />
      </div>
    );
  }
}

export default AppContainer;
