import React from 'react';
import PropTypes from 'prop-types';

var MoiveListEntires = ({movie}) => (
  <div className = 'movie-entry'>
    <dl>
      <dd><h3>{movie.title}</h3></dd>
      <dd>Directed by {movie.director}</dd>
      <dd>Released {movie.release_date}</dd>
    </dl>

  </div>
);



MoiveListEntires.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MoiveListEntires;