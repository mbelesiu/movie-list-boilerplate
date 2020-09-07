import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import sampleMovies from './data/sampleData.js';

ReactDOM.render(
<App movies = {sampleMovies}/>,
document.getElementById('app'));