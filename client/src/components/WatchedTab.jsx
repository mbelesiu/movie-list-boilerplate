import React from 'react';


var WatchedTab = ({ handleWatchedTab }) => (
  <div className="tab">
    <button className="tablinks"
      onClick={(e)=>{handleWatchedTab(false)}}>To Watch</button>
    <button className="tablinks"
      onClick={(e)=>{handleWatchedTab(true)}}>Watched</button>
  </div>
);




export default WatchedTab;