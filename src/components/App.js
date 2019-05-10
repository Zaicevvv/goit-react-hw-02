import React, { Fragment } from 'react';
import publications from './ReaderGadget/publications';
import Reader from './ReaderGadget/Reader/Reader';
import movies from './MovieFilter/movies';
import MoviePage from './MovieFilter/MoviePage/MoviePage';

const App = () => (
  <Fragment>
    <Reader items={publications} />
    <MoviePage items={movies} />
  </Fragment>
);

export default App;
