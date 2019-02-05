import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.state = {
      count: 15
    };
  }

  breakDecrement() {
    this.setState(prevState => {
      return prevState--;
    });
  }
  breakIncrement() {
    this.setState(prevState => {
      return prevState++;
    });
  }
  render() {
    return (
      <div className="App">
        <div className="main-title"> Pomodoro Clock</div>
        <div className="length-control">
          <div id="break-label">Break Length </div>
          <div id="break-decrement">
            <FontAwesomeIcon
              icon={faArrowDown}
              size="sm"
              onClick={this.breakDecrement}
            />
          </div>
          <div id="break-length">{this.state.count}</div>
          <div id="break-increment" onClick={this.breakIncrement}>
            <FontAwesomeIcon icon={faArrowUp} size="sm" />
          </div>
        </div>
        <div className="length-control">
          <div id="session-label">Session Length </div>
          <div id="session-decrement">
            <FontAwesomeIcon icon={faArrowDown} size="sm" />
          </div>
          <div id="session-length">5</div>
          <div id="session-increment">
            <FontAwesomeIcon icon={faArrowUp} size="sm" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
