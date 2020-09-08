import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  handleInputChange(e) {
    //console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {

    if (e.type === 'click' || e.key === 'Enter') {
      console.log(this.state.value);

      this.props.handleSearchChange(this.state.value);
    }
  }

  render() {
    return (
      <nav className='nav-bar'>
        <input
          type='text'
          placeholder='Search by Movie Title'
          onChange={this.handleInputChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>Search</button>

        <div className='results_found'>{!(this.props.isFound) && <p>Sorry, The moive title you have searched for is not on this list</p>}</div>
      </nav>
    )
  }

};


export default Search;