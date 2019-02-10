import React from "react";
const moment = require("moment");
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.countDown = this.countDown.bind(this);
    this.state = {
      count: 0,
      breakTime: 0
    };
  }
  componentDidMount() {
    const { count, breakTime } = this.props;
    this.setState({
      count: count,
      breakTime: breakTime
    });
    this.countDown();
  }
  countDown() {
    this.clear = setInterval(() => {
      this.setState(prevState => {
        return {
          count: prevState.count - 1
        };
      });
      if (this.state.count <= 0) {
        clearInterval(this.clear);
        this.breakTime();
      }
    }, 1000);
  }
  breakTime = () => {
    this.clearBreak = setInterval(() => {
      this.setState(prevState => {
        return { breakTime: prevState.breakTime - 1 };
      });
    }, 1000);
  };
  componentWillUnmount() {
    clearInterval(this.clear, this.clearBreak);
  }
  render() {
    return (
      <div>
        <div>
          {this.state.count <= 0
            ? moment(this.state.breakTime * 1000).format("mm : ss")
            : moment(this.state.count * 1000).format("mm: ss")}
        </div>
      </div>
    );
  }
}
export default Timer;
