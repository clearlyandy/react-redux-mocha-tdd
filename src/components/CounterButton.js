import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { add } from '../redux/modules/MathReducer';

export default class CounterButton extends Component {
  constructor() {
    super();
    this._add = this._add.bind(this);
  }
  _add() {
    this.props.dispatch(add());
  }
  render() {
    return (
      <button id="counter-button" onClick={this._add}>This button has been clicked {this.props.count} times</button>
    );
  }
}

CounterButton.propTypes = {
  count: PropTypes.number.isRequired
};

const stateToProps = (state) => {
  return {
    count: state.MathReducer.count
  }
}

export default connect(stateToProps)(CounterButton);
