import React, { Component } from "react";
import "../styles/Cell.css";
import { COLORS } from "../types/color";

class Cell extends Component {
  handleClick = () => {
    this.props.onCellClick(
      this.props.row,
      this.props.col,
      this.props.no,
      this.props.visitCount
    );
  };
  render() {
    let className = "cell " + COLORS[this.props.visitCount];
    return (
      <div className={className} onClick={this.handleClick}>
        {this.props.no}
      </div>
    );
  }
}

export default Cell;
