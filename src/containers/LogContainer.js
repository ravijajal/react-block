import React, { Component } from "react";
import "./../styles/LogContainer.css";
import Log from "../components/Log";
import { populateLog } from "../actions/log";
import { connect } from "react-redux";
import * as ReactDOM from "react-dom";

class LogContainer extends Component {
  componentDidMount() {
    this.props.dispatch(populateLog(this.props.rows, this.props.cols));
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    const { logList } = this.refs;
    console.log(this.refs);
    const scrollHeight = logList.scrollHeight;
    const height = logList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    ReactDOM.findDOMNode(logList).scrollTop =
      maxScrollTop > 0 ? maxScrollTop : 0;
  };
  render() {
    const { logs } = this.props;
    return (
      <div className="logContainer" ref="logList">
        {logs.map((log, key) => <Log data={log} key={key} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { logs } = state.log;
  return {
    logs
  };
};
export default connect(mapStateToProps)(LogContainer);
