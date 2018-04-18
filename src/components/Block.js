import React, { Component } from "react";
import "../styles/Block.css";
import Cell from "./Cell";

class Block extends Component {
  render() {
    if (
      typeof this.props.blocks === "undefined" ||
      this.props.blocks.length <= 0
    ) {
      return <div className="blockContainer" />;
    }
    let count =1;
    return (
      <div className="blockContainer">
        {this.props.blocks.map((rows, row) => (
          <div className="block" key={row}>
            {rows.map((cells, col) => (
              <Cell row={row} no={count++}col={col} key={row + "" + col} visitCount={cells.visitCount} onChange={this.props.onChange} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Block;
