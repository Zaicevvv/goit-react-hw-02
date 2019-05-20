import React from 'react';
import PropTypes from 'prop-types';
import css from './Balance.module.css';

const Balance = ({ balance, transactions }) => (
  <section className={css.balance}>
    <span>
      ⬆
      {transactions
        .filter(transaction => transaction.type === 'Deposit')
        .reduce((acc, item) => acc + item.amount, 0)}
      $
    </span>
    <span>
      ⬇
      {transactions
        .filter(transaction => transaction.type === 'Withdraw')
        .reduce((acc, item) => acc + item.amount, 0)}
      $
    </span>
    <span>{balance}$</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  transactions: PropTypes.arrayOf(Object).isRequired,
};

export default Balance;
