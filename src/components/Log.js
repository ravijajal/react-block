import React, { Component } from "react";
import "../styles/Log.css";
import Color from "./Color"
import { LOG_CELL_CREATED, LOG_CELL_UPDATED } from "../types/log";

class Log extends Component {
  render() {
    const typeText =
      this.props.data.logType === LOG_CELL_CREATED ? "Created" : "Updated";
    return <div className="log">{this.props.data.no +" "+ typeText} <Color color={this.props.data.color} /> </div>;
  }
}

export default Log;
