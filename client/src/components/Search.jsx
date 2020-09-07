import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super (props);

    this.state = {
      value: ''
    }
  }

  handleInputChange(e){
    //console.log(e.target.value);
    this.setState( {
      value: e.target.value
    });
  }

  handleSubmit(e){

    if(e.type === 'click' || e.key === 'Enter') {
      console.log(this.state.value);

      this.props.handleSearchChange(this.state.value)
    }


    // TODO- write a function will be called here to change movies that are being displayed based on title
    //actaully write that function at app level
  }

  render() {
    return (
      <div>
        <input
          type='text'
          //value= {this.state.value}
          placeholder = 'Search by Movie Title'
          onChange = {this.handleInputChange.bind(this)}
          onKeyDown = {this.handleSubmit.bind(this)}
           />
           <button onClick = {this.handleSubmit.bind(this)}>Search</button>
      </div>
    )
  }

};


export default Search;