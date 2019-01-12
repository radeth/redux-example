import React from "react";
import Buttons from "../componets(no redux)/Buttons";
import Display from "../componets(no redux)/Display";
import Name from "./Name";
import { increment, decrement } from "../actions/counterActions";
import { connect } from "react-redux";
class App extends React.Component {
  render() {
    return (
      <div>
        <Buttons
          incrementCounter={() => {
            this.props.increment();
          }}
          decrementCounter={() => {
            this.props.decrement();
          }}
        />
        <Name />
        <Display
          counter={this.props.counter.counter}
          name={this.props.name.name}
        />
      </div>
    );
  }
}
// ustawia  propsy(this.props) KOMPONENTU ze state reduxa
const mapStateToProps = state => {
  console.log(state);
  return {
    counter: state.counter, //object state = {couunter ={counter =1}}
    name: state.name
  };
};
// przekazuje dispatch do reducera
const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
