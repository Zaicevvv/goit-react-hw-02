import React from 'react';
import PropTypes from 'prop-types';
import MovieGridItem from '../MovieGridItem/MovieGridItem';
import css from './MovieGrid.module.css';

const MovieGrid = ({ items }) => (
  <div className={css.grid}>
    {items.map(item => (
      <MovieGridItem
        key={item.id}
        title={item.title}
        url={item.posterUrl}
        desc={item.overview}
      />
    ))}
  </div>
);

MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieGrid;
