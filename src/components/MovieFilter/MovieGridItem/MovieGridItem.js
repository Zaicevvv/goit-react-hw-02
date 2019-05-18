import React from 'react';
import PropTypes from 'prop-types';
import css from './MovieGridItem.module.css';

const MovieGridItem = ({ title, url, desc }) => (
  <div className={css.card}>
    <img src={url} alt={title} />
    <div className={css.content}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  </div>
);

MovieGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default MovieGridItem;
