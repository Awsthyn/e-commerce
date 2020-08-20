import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../Redux/actions/counter";

class Counter extends Component {
  render() {
    return (
      <span className="d-flex">
        <button
          onClick={() => {
            this.props.decrement();
          }}
        >
          {`<=`}
        </button>
        <p>{this.props.count}</p>
        <button
          onClick={() => {
            this.props.increment();
          }}
        >
          {`=>`}
        </button>
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
