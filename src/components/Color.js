import React, { Component } from "react";
import "../styles/Color.css";

class Color extends Component {
  render() {
    let className =
      "color " +
      (typeof this.props.color !== "undefined" ? this.props.color : "");
    return <span className={className}>{this.props.no}</span>;
  }
}

export default Color;
