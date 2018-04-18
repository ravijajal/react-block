import React, { Component } from 'react';
import '../styles/Cell.css';

class Cell extends Component {
  render() {
    return (
      <div className="cell">
      {this.props.col},{this.props.row}
      </div>
    );
  }
}

export default Cell;
