import React from "react";

const Timer = props => {
  return (
    <div>
      <div>{props.timer} </div>
      <button onClick={props.count}>yes</button>
    </div>
  );
};
export default Timer;
