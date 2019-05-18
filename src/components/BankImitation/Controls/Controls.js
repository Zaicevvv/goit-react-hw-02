import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onClick }) => (
  <section className="controls">
    <input type="number" />
    <button type="button" name="Deposit" onClick={onClick}>
      Deposit
    </button>
    <button type="button" name="Withdraw" onClick={onClick}>
      Withdraw
    </button>
  </section>
);

Controls.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Controls;
