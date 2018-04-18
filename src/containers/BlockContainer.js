import React, { Component } from "react";
import "./../styles/BlockContainer.css";
// import Cell from "../components/Cell";
import Block from "../components/Block";
import { markCell, populateBlock } from "../actions/block";
import { connect } from "react-redux";

class BlockContainer extends Component {
  componentDidMount() {
    this.props.dispatch(populateBlock(this.props.rows, this.props.cols));
  }
  handleChange = (row, col) => {
    this.props.dispatch(markCell(row, col));
  };
  render() {
    const { blockRows } = this.props;
    return <Block blockRows={blockRows} onChange={this.handleChange}/>;
  }
}

const mapStateToProps = state => {
  const { blockRows } = state.block;
  return {
    blockRows
  };
};
export default connect(mapStateToProps)(BlockContainer);
