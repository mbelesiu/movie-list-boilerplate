import React from 'react';
import MoiveList from './MoiveList.jsx';
import Search from './Search.jsx';
import MoiveAdder from './MoiveAdder.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterMovieList: this.props.movies || [],
      currentMovieList: this.props.movies || [],
      found: true
    };

  }


  handleSearchChange(searchTerm) {
    if (searchTerm === '' || null || undefined) {
      this.setState({
        currentMovieList: this.state.masterMovieList,
        found: true
      });
      return;
    }

    let newList = [];
    this.state.masterMovieList.forEach((element) => {

      if (element.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        console.log('found ', searchTerm);
        newList.push(element);
      }
    });

    if (newList.length > 0) {

      this.setState({
        currentMovieList: newList,
        found: true
      });
    } else {

      this.setState({
        found: false
      });
    }

  }


  handleNewMovie(newMovie) {

    if (!newMovie) {
      return;
    }
    let flag = false;

    this.state.masterMovieList.forEach((element) => {

      if (element.title.toLowerCase() === newMovie.toLowerCase()) {
        alert('Movie is already in list');
        flag = true;
      }
    });


    if(flag) {
      return;
    }

    newMovie = {
      title: newMovie,
      director: 'placerholder',
      release_date: 'placerholder'
    };
    this.setState( prevState => ({
      masterMovieList: [newMovie, ...prevState.masterMovieList],
      currentMovieList: [newMovie, ...prevState.masterMovieList]
    }));

  }


  render() {
    return (<div className='body-container'>
      <h1 className='app-title'>Matt's Movie List</h1>

      <Search handleSearchChange={
        this.handleSearchChange.bind(this)}
        isFound={this.state.found}
      />

      <MoiveAdder
        handleNewMovie={this.handleNewMovie.bind(this)}
      />


      <MoiveList movies={this.state.currentMovieList} />




    </div>)
  }
}





;

export default App;

//Note. When returning one item, webpack (and jsx files and react) DO NOT LIKE MORE THAN ONE LINE
//you fix this by enclosing everything into one <div>