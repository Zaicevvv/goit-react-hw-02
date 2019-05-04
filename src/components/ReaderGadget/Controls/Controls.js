import React from 'react';
import PropTypes from 'prop-types';
import css from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <section className={css.controls}>
    <button type="button" className={css.button} onClick={onDecrement}>
      Назад
    </button>
    <button type="button" className={css.button} onClick={onIncrement}>
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Controls;
