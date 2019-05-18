import React, { Fragment } from 'react';
import publications from './ReaderGadget/publications';
import Reader from './ReaderGadget/Reader/Reader';
import movies from './MovieFilter/movies';
import MoviePage from './MovieFilter/MoviePage/MoviePage';
import Dashboard from './BankImitation/Dashboard/Dashboard';

const App = () => (
  <Fragment>
    <Reader items={publications} />
    <MoviePage items={movies} />
    <Dashboard />
  </Fragment>
);

export default App;
