import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default Display;
