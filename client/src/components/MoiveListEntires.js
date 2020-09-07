import React from 'react';
import PropTypes from 'prop-types';

var MoiveListEntires = ({movies}) => (
  <div>
  <p>Something is here: {movies[0].title}</p>
  </div>
);



MoiveListEntires.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MoiveListEntires;