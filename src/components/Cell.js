import React, { Component } from "react";
import "../styles/Cell.css";
import { COLORS } from "../types/color";

class Cell extends Component {
  handleChange = () => {
    this.props.onChange(
      this.props.row,
      this.props.col,
      this.props.no,
      COLORS[this.props.visitCount + 1 > 4 ? 0 : this.props.visitCount + 1]
    );
  };
  render() {
    let className = "cell " + COLORS[this.props.visitCount];
    return (
      <div className={className} onClick={this.handleChange}>
        {this.props.no}
      </div>
    );
  }
}

export default Cell;
