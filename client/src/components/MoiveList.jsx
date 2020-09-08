import React from 'react';
import MoiveListEntires from './MoiveListEntires.jsx';
import WatchedTab from './WatchedTab.jsx';
import PropTypes from 'prop-types';

var MovieList = ({ movies, handleWatchedMovieList, handleWatchedTab}) => (
  <div className='movie-list'>
    <WatchedTab handleWatchedTab = {handleWatchedTab}/>
    <ul>
      {movies.map((movies) =>

        <MoiveListEntires
          key={movies.title}
          movie={movies}
          handleWatchedMovieList = {handleWatchedMovieList}
          />

      )}
    </ul>
  </div>
);



MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;