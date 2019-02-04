import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-title"> Pomodoro Clock</div>
        <div className="length-control">
          <div id="break-label">Break Length </div>
          <div id="break-decrement"> </div>
          <div id="break-length">5</div>
          <div id="break-increment"> </div>
        </div>
      </div>
    );
  }
}

export default App;
