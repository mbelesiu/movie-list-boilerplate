import React from 'react';
import WatchedButton from './WatchedButton.jsx';
import PropTypes from 'prop-types';

var MoiveListEntires = ({movie, handleWatchedMovieList}) => (
  <div className = 'movie-entry'>
    <dl>
      <dd><h3>{movie.title}</h3></dd>
      <dd>Directed by {movie.director}</dd>
      <dd>Released {movie.release_date}</dd>
    </dl>
    <WatchedButton
    movie = {movie}
    handleWatchedMovieList = {handleWatchedMovieList}/>

  </div>
);



MoiveListEntires.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MoiveListEntires;