import React, { Component } from "react";
import "../styles/Log.css";
import Color from "./Color";
import { LOG_CELL_CREATED, LOG_CELL_UPDATED } from "../types/log";
import { COLORS } from "../types/color";

class Log extends Component {
  render() {
    const typeText =
      this.props.data.logType === LOG_CELL_CREATED ? "Created" : "Updated";
    const colorNoFrom =
      this.props.data.logType === LOG_CELL_CREATED
        ? -1
        : this.props.data.visitCount;
    const colorNoTo =
      this.props.data.logType === LOG_CELL_CREATED
        ? this.props.data.visitCount
        : this.props.data.visitCount + 1 > 4
          ? 0
          : this.props.data.visitCount + 1;
    return (
      <div className="log">
        <Color color={COLORS[colorNoFrom]} no={this.props.data.no} />
        <span className="inline">==></span>
        <Color color={COLORS[colorNoTo]} no={this.props.data.no} />
      </div>
    );
  }
}

export default Log;
