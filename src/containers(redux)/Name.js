import React from "react";
import { connect } from "react-redux";
import { setName } from "../actions/nameAction";

class Name extends React.Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(this._input.value);
          this.props.setName(this._input.value);
        }}
      >
        <input ref={value => (this._input = value)} type="text" />
        <input type="submit" />
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Name);
