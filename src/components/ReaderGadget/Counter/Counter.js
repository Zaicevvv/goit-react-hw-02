import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Controls from '../Controls/Controls';
import css from './Counter.module.css';

export default class Counter extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    counterMax: PropTypes.number.isRequired,
  };

  state = {};

  render() {
    const { number, counterMax } = this.props;

    return (
      <p className={css.counter}>
        {number + 1}/{counterMax}
      </p>
    );
  }
}
