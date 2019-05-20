import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Controls extends Component {
  static propTypes = {
    onDepositClick: PropTypes.func.isRequired,
    onWithdrawClick: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired,
  };

  state = { inputValue: '' };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  checkTransaction = e => {
    const { name } = e.target;
    const value = Number(this.state.inputValue);

    if (name === 'Withdraw' && value > this.props.balance) {
      alert('На счету недостаточно средств для проведения операции!');
    } else if (value === 0) {
      alert('Введите сумму для проведения операции!');
    } else if (name === 'Deposit') {
      this.props.onDepositClick(name, value);
    } else {
      this.props.onWithdrawClick(name, value);
    }

    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <section className="controls">
        <input type="number" onChange={this.handleChange} value={inputValue} />
        <button type="button" name="Deposit" onClick={this.checkTransaction}>
          Deposit
        </button>
        <button type="button" name="Withdraw" onClick={this.checkTransaction}>
          Withdraw
        </button>
      </section>
    );
  }
}
