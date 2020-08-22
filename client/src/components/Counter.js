import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../Redux/actions/counterActions";

class Counter extends Component {
  render() {
    return (
      <span className="d-flex">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            this.props.decrement();
          }}
        >
          <i className="fas fa-arrow-circle-left "></i>
        </button>
        <p>{this.props.count}</p>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            this.props.increment();
          }}
        >
          <i className="fas fa-arrow-circle-right"></i>
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
