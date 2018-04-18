import React, { Component } from "react";
import "../styles/App.css";
import Block from "./Block";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Block rows="5" cols="9" />
      </div>
    );
  }
}

export default App;
