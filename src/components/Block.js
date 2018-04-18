import React, { Component } from "react";
import "./../styles/Block.css";
import Cell from "./Cell";
import { markCell, populateCells } from "../actions";
import { connect } from "react-redux";

class Block extends Component {
  componentDidMount() {
    this.props.dispatch(populateCells(this.props.rows, this.props.cols));
    this.props.dispatch(markCell(0,0));
    this.props.dispatch(markCell(0,4));
  }
  render() {
    const blockRows = [];
    const renderRows = function(row, cols) {
      const blockCells = [];
      for (let col = 0; col < cols; col++) {
        blockCells.push(<Cell row={row} col={col} key={row + "" + col} />);
      }
      return blockCells;
    };
    for (let row = 0; row < this.props.rows; row++) {
      blockRows.push(
        <div className="block" key={row}>
          {renderRows(row, this.props.cols)}
        </div>
      );
    }

    return <div className="blockContainer">{blockRows}</div>;
  }
}

const mapStateToProps = state => {
  const { markCell, populateCells,cells } = state;

  return {
    markCell,
    populateCells,
    cells
  };
};
export default connect(mapStateToProps)(Block);
