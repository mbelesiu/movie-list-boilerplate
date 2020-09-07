import React from 'react';
import MoiveList from './MoiveList.jsx';
import Search from './Search.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterMovieList: this.props.movies || [],
      currentMovieList: this.props.movies || [],
      found: false
    };

  }

  //Might want to re-include a Master movie list, so you can search the whole list each time instead of what is just currently being idsplayed.

  handleSearchChange(searchTerm) {
    if (searchTerm === '' || null || undefined) {
      this.setState({
        currentMovieList: this.props.movies || [],
        found: false
      });
      return;
    }

    let newList = [];
    this.state.masterMovieList.forEach((element) => {

      if (element.title.includes(searchTerm)) {
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
      console.log('The moive title you have searched for is not on this list');
      this.setState({
        found: false
      });
    }

  }


  render() {
    return (<div>
      <h1>Matt's Movie List</h1>
      <div className='searchBar'>
        <Search handleSearchChange={this.handleSearchChange.bind(this)} />
      </div>
      <div>
        <MoiveList movies={this.state.currentMovieList} />
      </div>


    </div>)
  }
}





;

export default App;

//Note. When returning one item, webpack (and jsx files and react) DO NOT LIKE MORE THAN ONE LINE
//you fix this by enclosing everything into one <div>