import React, { Component } from 'react';
import css from './Dashboard.module.css';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const shortid = require('shortid');

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
  };

  handleDeposit = inputValue => {
    const value = Number(inputValue);

    if (value === 0) {
      alert('Введите сумму для проведения операции!');
    } else {
      const nowDate = new Date();
      const transaction = {
        id: shortid.generate(),
        type: 'Deposit',
        amount: value,
        date: nowDate.toLocaleString(),
      };

      this.setState(state => ({
        history: [...state.history, transaction],
        balance: state.balance + value,
      }));
    }
  };

  handleWithdraw = inputValue => {
    const value = Number(inputValue);

    if (value > this.state.balance) {
      alert('На счету недостаточно средств для проведения операции!');
    } else if (value === 0) {
      alert('Введите сумму для проведения операции!');
    } else {
      const nowDate = new Date();
      const transaction = {
        id: shortid.generate(),
        type: 'Withdraw',
        amount: value,
        date: nowDate.toLocaleString(),
      };

      this.setState(state => ({
        history: [...state.history, transaction],
        balance: state.balance - value,
      }));
    }
  };

  render() {
    const { history, balance } = this.state;

    return (
      <div className={css.dashboard}>
        <Controls
          onDepositClick={this.handleDeposit}
          onWithdrawClick={this.handleWithdraw}
        />
        <Balance
          balance={balance}
          income={history
            .filter(transaction => transaction.type === 'Deposit')
            .reduce((acc, item) => acc + item.amount, 0)}
          expenses={history
            .filter(transaction => transaction.type === 'Withdraw')
            .reduce((acc, item) => acc + item.amount, 0)}
        />
        <TransactionHistory transactions={history} />
      </div>
    );
  }
}
