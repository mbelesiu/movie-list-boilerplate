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
        currentMovieList: this.props.movies || [],
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
    alert('I DO NOTHING');
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
        moiveList={this.state.masterMovieList}
      />


      <MoiveList movies={this.state.currentMovieList} />




    </div>)
  }
}





;

export default App;

//Note. When returning one item, webpack (and jsx files and react) DO NOT LIKE MORE THAN ONE LINE
//you fix this by enclosing everything into one <div>