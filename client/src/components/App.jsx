import React from 'react';
import MoiveListEntires from './MoiveListEntires.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: null
    };

  }


  render() {
    return (<div>
      <h1>Matt's Movie List</h1>
      {/* <p>Here: this.props.movies[0].title</p> */}
      <MoiveListEntires movies={this.props.movies} />
    </div>)
  }
}





;

export default App;

//Note. When returning one item, webpack (and jsx files and react) DO NOT LIKE MORE THAN ONE LINE
//you fix this by enclosing everything into one <div>