import React, { Component } from "react";
import Timer from "./timer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.state = {
      breakCount: 0,
      sessionCount: 0
    };
  }

  breakDecrement() {
    this.setState(prevState => {
      const count = prevState.breakCount--;
      if (count <= 0) {
        return (prevState.breakCount = 0);
      }
      return count;
    });
  }
  breakIncrement() {
    this.setState(prevState => {
      return prevState.breakCount++;
    });
  }
  sessionDecrement() {
    this.setState(state => {
      const count = state.sessionCount--;
      if (count <= 0) {
        return (state.sessionCount = 0);
      }
      return count;
    });
  }
  sessionIncrement() {
    this.setState(state => {
      return state.sessionCount++;
    });
  }
  render() {
    return (
      <div className="App">
        <div className="main-title"> Pomodoro Clock</div>
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
        <Timer timer={this.state.timer} />
      </div>
    );
  }
}

export default App;
