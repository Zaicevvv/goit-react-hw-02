import React, { Component } from 'react';
import css from './Dashboard.module.css';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const shortid = require('shortid');
// import PropTypes from 'prop-types';

export default class Dashboard extends Component {
  state = {
    history: [
      {
        id: '1',
        type: 'deposit',
        amount: 100,
        date: 'tonight',
      },
      {
        id: '2',
        type: 'withdrawal',
        amount: 200,
        date: 'tonight2',
      },
      {
        id: '3',
        type: 'Deposit',
        amount: 100,
        date: 'tonight3',
      },
      {
        id: '4',
        type: 'Withdrawal',
        amount: 200,
        date: 'tonight4',
      },
    ],
    balance: 0,
  };

  onCheckTransaction = e => {
    const { name } = e.target;
    const value = Number(e.target.value);

    if (name === 'Withdraw' && value > this.state.balance) {
      alert('На счету недостаточно средств для проведения операции!');
    } else if (value === 0) {
      alert('Введите сумму для проведения операции!');
    } else this.addTransaction(name, value);
  };

  addTransaction = (name, value) => {
    const transaction = {
      id: shortid.generate(),
      type: name,
      amount: value,
      date: Date.prototype.toLocaleString(),
    };

    this.setState({ history: [...this.history, transaction] });

    if (name === 'Deposit') {
      this.setState(state => ({
        balance: state.balance + value,
      }));
    } else {
      this.setState(state => ({
        balance: state.balance - value,
      }));
    }
  };

  render() {
    const { history, balance } = this.state;

    return (
      <div className={css.dashboard}>
        <Controls onClick={this.onCheckTransaction} />
        <Balance balance={balance} transactions={history} />
        <TransactionHistory transactions={history} />
      </div>
    );
  }
}
