import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import css from './Counter.module.css';

export default class Counter extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    counterMax: PropTypes.number.isRequired,
  };

  state = {};

  handleIncrement = () => {};

  handleDecrement = () => {};

  render() {
    const { number, counterMax } = this.props;

    return (
      <Fragment>
        <p className={css.counter}>
          {number}/{counterMax}
        </p>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </Fragment>
    );
  }
}
