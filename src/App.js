import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faClock,
  faPlayCircle,
  faPauseCircle,
  faSyncAlt
} from "@fortawesome/free-solid-svg-icons";
import "./App.scss";
import "./timer.scss";
import Alarm from "./alarm/Loud_Alarm.mp3";

const moment = require("moment");

class App extends Component {
  constructor(props) {
    super(props);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.countDown = this.countDown.bind(this);
    this.state = {
      breakCount: 5,
      sessionCount: 25,
      count: 1,
      bcount: 1
    };
    this.clear = -1;
    this.clearBreak = -1;
  }

  breakDecrement() {
    this.setState(prevState => {
      const count = prevState.breakCount--;
      if (count <= 0) {
        return (prevState.breakCount = 0);
      }
      return count, (prevState.bcount = this.state.breakCount * 60);
    });
  }
  breakIncrement() {
    this.setState(prevState => {
      return (
        prevState.breakCount++, (prevState.bcount = this.state.breakCount * 60)
      );
    });
  }
  sessionDecrement() {
    this.setState(prevState => {
      const count = prevState.sessionCount--;
      if (count <= 0) {
        return (prevState.sessionCount = 0);
      }
      return count, (prevState.count = this.state.sessionCount * 60);
    });
  }
  sessionIncrement() {
    this.setState(prevState => {
      return (
        prevState.sessionCount++,
        (prevState.count = this.state.sessionCount * 60)
      );
    });
  }
  componentDidMount() {
    this.setState({
      count: this.state.sessionCount * 60,
      bcount: this.state.breakCount * 60
    });
  }
  reset = () => {
    clearInterval(this.clear, this.clearBreak);
    this.setState({
      count: this.state.sessionCount * 60,
      bcount: this.state.breakCount * 60
    });
  };
  countDown() {
    clearInterval(this.clear);
    if (this.clear === -1) {
      this.clear = setInterval(() => {
        this.setState(prevState => {
          return {
            count: prevState.count - 1
          };
        });
        if (this.state.count <= 0) {
          clearInterval(this.clear);
          this.breakTime();
          if (this.breakTime) {
            const audio = document.getElementById("alarm");
            audio.currenTime = 0;
            audio.play();
          }
        } /*else if (
          (this.state.count < 5 * 60) &
          (this.state.count > 4.7 * 60)
        ) {
          const audio = document.getElementById("alarm");
          audio.currenTime = 0;
          audio.play();
        }*/
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
          return { bcount: prevState.bcount - 1 };
        });
        if (this.state.bcount <= 0) {
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
      <div className="App">
        <div className="main-title">
          Pomodoro Cl
          <FontAwesomeIcon icon={faClock} size="lg" /> ck
        </div>
        <div className="length-control">
          <div id="break-label">Break Length </div>
          <div id="break-decrement" onClick={this.breakDecrement}>
            <FontAwesomeIcon icon={faArrowDown} size="sm" />
          </div>
          <div id="break-length">{this.state.breakCount}</div>
          <div id="break-increment" onClick={this.breakIncrement}>
            <FontAwesomeIcon icon={faArrowUp} size="sm" />
          </div>
        </div>
        <div className="length-control">
          <div id="session-label">Session Length </div>
          <div id="session-decrement" onClick={this.sessionDecrement}>
            <FontAwesomeIcon icon={faArrowDown} size="sm" />
          </div>
          <div id="session-length">{this.state.sessionCount} </div>
          <div id="session-increment" onClick={this.sessionIncrement}>
            <FontAwesomeIcon icon={faArrowUp} size="sm" />
          </div>
        </div>
        <div className="timerBox">
          <div className="timer">
            <p>{this.state.count <= 0 ? "Break time" : "Session"}</p>
            <div id="timer">
              {this.state.count <= 0
                ? moment(this.state.bcount * 1000).format("mm : ss")
                : moment(this.state.count * 1000).format("mm: ss")}
            </div>
          </div>
          <div className="controls">
            <FontAwesomeIcon
              icon={faPlayCircle}
              size="3x"
              onClick={this.countDown}
            />
            <FontAwesomeIcon
              icon={faPauseCircle}
              size="3x"
              onClick={this.countDown}
            />
            <FontAwesomeIcon icon={faSyncAlt} size="3x" onClick={this.reset} />
          </div>
          <audio id="alarm">
            <source src={Alarm} type="audio/mpeg" />
          </audio>
        </div>
        <div className="link">
          by <a href="https://github.com/yrufai">Yakubu Ahmed El-Rufai</a>
        </div>
      </div>
    );
  }
}

export default App;
