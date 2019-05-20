import React from 'react';
import PropTypes from 'prop-types';
import css from './Balance.module.css';

const Balance = ({ balance, income, expenses }) => (
  <section className={css.balance}>
    <span>Income⬆{income}$</span>
    <span>Expenses⬇{expenses}$</span>
    <span>Balance{balance}$</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default Balance;
