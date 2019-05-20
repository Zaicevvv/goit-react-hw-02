import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Controls extends Component {
  static propTypes = {
    onDepositClick: PropTypes.func.isRequired,
    onWithdrawClick: PropTypes.func.isRequired,
  };

  state = { inputValue: '' };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { onDepositClick, onWithdrawClick } = this.props;
    const { inputValue } = this.state;
    return (
      <section className="controls">
        <input type="number" onChange={this.handleChange} value={inputValue} />
        <button type="button" onClick={() => onDepositClick(inputValue)}>
          Deposit
        </button>
        <button type="button" onClick={() => onWithdrawClick(inputValue)}>
          Withdraw
        </button>
      </section>
    );
  }
}
