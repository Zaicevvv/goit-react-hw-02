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

  handleDeposit = (name, value) => {
    const nowDate = new Date();
    const transaction = {
      id: shortid.generate(),
      type: name,
      amount: value,
      date: nowDate.toLocaleString(),
    };

    this.setState(state => ({ history: [...state.history, transaction] }));

    this.setState(state => ({
      balance: state.balance + value,
    }));
  };

  handleWithdraw = (name, value) => {
    const nowDate = new Date();
    const transaction = {
      id: shortid.generate(),
      type: name,
      amount: value,
      date: nowDate.toLocaleString(),
    };

    this.setState(state => ({ history: [...state.history, transaction] }));

    this.setState(state => ({
      balance: state.balance - value,
    }));
  };

  render() {
    const { history, balance } = this.state;

    return (
      <div className={css.dashboard}>
        <Controls
          onDepositClick={this.handleDeposit}
          onWithdrawClick={this.handleWithdraw}
          balance={balance}
        />
        <Balance balance={balance} transactions={history} />
        <TransactionHistory transactions={history} />
      </div>
    );
  }
}
