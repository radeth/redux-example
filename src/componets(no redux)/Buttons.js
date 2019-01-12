import React from "react";

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.decrementCounter();
          }}
        >
          Decrement -
        </button>
        <button
          onClick={() => {
            this.props.incrementCounter();
          }}
        >
          increment +
        </button>
      </div>
    );
  }
}

export default Buttons;
