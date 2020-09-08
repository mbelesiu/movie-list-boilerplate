import React from 'react';
import MoiveListEntires from './MoiveListEntires.jsx';
import PropTypes from 'prop-types';

var MovieList = ({ movies }) => (
  <div className='movie-list'>
    <p></p>
    <ul>
      {movies.map((movies) =>

          <MoiveListEntires
            key = {movies.title}
            movie = {movies} />

      )}
    </ul>
  </div>
);



MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;