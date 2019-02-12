import React from "react";
import "./timer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
const moment = require("moment");

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.countDown = this.countDown.bind(this);
    this.state = {
      breakCount: this.props.breakCount,
      sessionCount: this.props.sessionCount
    };
    this.clear = -1;
    this.clearBreak = -1;
  }
  countDown() {
    clearInterval(this.clear);
    if (this.clear === -1) {
      this.clear = setInterval(() => {
        this.setState(prevState => {
          return {
            sessionCount: prevState.sessionCount - 1
          };
        });
        if (this.state.sessionCount <= 0) {
          clearInterval(this.clear);
          this.breakTime();
        }
      }, 1000);
    } else {
      clearInterval(this.clear);
      this.clear = -1;
    }
  }
  breakTime = () => {
    clearInterval(this.clearBreak);
    if (this.clearBreak === -1) {
      this.clearBreak = setInterval(() => {
        this.setState(prevState => {
          return { breakCount: prevState.breakCount - 1 };
        });
        if (this.state.breakCount <= 0) {
          clearInterval(this.clearBreak);
        }
      }, 1000);
    } else {
      clearInterval(this.clearBreak);
      this.clearBreak = -1;
    }
  };

  render() {
    return (
      <div className="timerBox">
        <div className="timer">
          <p>{this.state.sessionCount <= 0 ? "Break time" : "Session"}</p>
          <div id="timer">
            {this.state.sessionCount <= 0
              ? moment(this.state.breakCount * 1000).format("mm : ss")
              : moment(this.state.sessionCount * 1000).format("mm: ss")}
          </div>
        </div>
        <div className="controls">
          <FontAwesomeIcon
            icon={faPlayCircle}
            size="3x"
            onClick={this.countDown}
          />
          <FontAwesomeIcon icon={faPauseCircle} size="3x" />
        </div>
      </div>
    );
  }
}
export default Timer;
