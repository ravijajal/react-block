import React, { Component } from "react";
import "./../styles/BlockContainer.css";
import Block from "../components/Block";
import { markCell, populateBlock } from "../actions/block";
import { logCell } from "../actions/log";
import { connect } from "react-redux";
import LogContainer from "./LogContainer";
import { LOG_CELL_UPDATED } from "../types/log";

class BlockContainer extends Component {
  componentDidMount() {
    this.props.dispatch(populateBlock(this.props.rows, this.props.cols));
  }
  handleChange = (row, col, no, color) => {
    this.props.dispatch(markCell(row, col));
    this.props.dispatch(logCell(row, col, no, color, LOG_CELL_UPDATED));
  };
  render() {
    const { blocks } = this.props;
    return (
      <div>
        <Block blocks={blocks} onChange={this.handleChange} />
        <LogContainer rows={this.props.rows} cols={this.props.cols} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { blocks } = state.block;
  return {
    blocks
  };
};
export default connect(mapStateToProps)(BlockContainer);
