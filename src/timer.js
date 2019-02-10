import React from "react";
const moment = require("moment");
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.countDown = this.countDown.bind(this);
    this.state = {
      count: 5
    };
  }
  componentDidMount() {
    const { count } = this.props;
    this.setState({
      count: count
    });
    this.countDown();
  }
  countDown() {
    this.clear = setInterval(() => {
      this.setState(state => {
        const count = +state.count;
        return {
          count: count - 1
        };
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clear);
  }
  render() {
    return (
      <div>
        <div>{moment(this.state.count * 1000).format("mm: ss")} </div>
      </div>
    );
  }
}
export default Timer;
