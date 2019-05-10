import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => (
  <input
    className={css.input}
    type="text"
    value={value}
    placeholder="Type to search movie..."
    onChange={onChange}
  />
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
