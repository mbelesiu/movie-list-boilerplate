import React from 'react';


var WatchedButton = ({movie, handleWatchedMovieList}) => (
  <button className = 'watched-button' onClick={(e)=>{handleWatchedMovieList(e, movie)}}>Watched</button>
);


export default WatchedButton;