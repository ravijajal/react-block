import React, { Component } from "react";
import "../styles/Cell.css";

class Cell extends Component {
  handleChange = () => {
    this.props.onChange(this.props.row, this.props.col);
  };
  render() {
    const colors = [
      "cell lightgreen",
      "cell red",
      "cell yellow",
      "cell blue",
      "cell green",
    ];
    let className = colors[this.props.visitCount];
    return <div className={className} onClick={this.handleChange} />;
  }
}

export default Cell;
