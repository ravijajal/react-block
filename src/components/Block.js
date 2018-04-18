import React, { Component } from "react";
import "../styles/Block.css";
import Cell from "./Cell";

class Block extends Component {
  render() {
    if (
      typeof this.props.blockRows === "undefined" ||
      this.props.blockRows.length <= 0
    ) {
      return <div className="blockContainer" />;
    }
    return (
      <div className="blockContainer">
        {this.props.blockRows.map((rows, row) => (
          <div className="block" key={row}>
            {rows.map((cells, col) => (
              <Cell row={row} col={col} key={row + "" + col} visitCount={cells.visitCount} onChange={this.props.onChange} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Block;
