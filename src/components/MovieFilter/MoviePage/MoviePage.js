import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './MoviePage.module.css';
import MovieGrid from '../MovieGrid/MovieGrid';
import SearchBar from '../SearchBar/SearchBar';

const filterMovies = (query, movies) =>
  movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  );

export default class MoviePage extends Component {
  state = {
    query: '',
    movies: this.items,
  };

  handleSearch = e => this.setState({ query: e.target.value });

  render() {
    const { query, movies } = this.state;
    const filtredMovies = filterMovies(query, movies);

    return (
      <div className={css.container}>
        <SearchBar value={query} onChange={this.handleSearch} />
        <MovieGrid items={filtredMovies} />
      </div>
    );
  }
}
