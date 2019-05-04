import React from 'react';
import PropTypes from 'prop-types';
import css from './Publication.module.css';

const Publication = ({ items, number }) => (
  <section key={items[number].id} className={css.publication}>
    <h2>{items[number].title}</h2>
    <p>{items[number].text}</p>
  </section>
);

Publication.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  number: PropTypes.number.isRequired,
};

export default Publication;
