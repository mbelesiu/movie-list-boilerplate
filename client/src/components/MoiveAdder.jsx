import React from 'react';

class MoiveAdder extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  handleInputChange(e) {

    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {

    if (e.type === 'click' || e.key === 'Enter') {
      console.log(this.state.value);

      this.props.handleNewMovie(this.state.value);
    }
  }

  render() {
    return (
      <div className='moive-adder'>
        <input
          type='text'
          placeholder='Add Movies by Title'
          onChange={this.handleInputChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>Add Moive</button>
      </div>
    )
  }


};



export default MoiveAdder;