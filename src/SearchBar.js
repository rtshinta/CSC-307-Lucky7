import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Montserrat-Medium.ttf';


class SearchBar extends Component
{
  initialState = {
    currentInput: '',
    searchEnter: '',
  };
  state = this.initialState;


  //Update field as typed in. For Current Input.
  searchSubmit = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    })
  }


  //Upon button click, update shown result.
  submitForm = () => {
    //this.setState(this.state);
    this.setState({
      ['searchEnter']: this.state.currentInput,
    })
  }


  render() {
    const { currentInput, searchEnter } = this.state;
    const { searchFunction } = this.props;

    return (
      <form>
        <label htmlFor='currentInput'></label>
        <input type="text" name="currentInput" id="currentInput" value={currentInput} onChange={this.searchSubmit} />
        <input type="button" value="Submit" onClick={() => this.props.searchFunction(currentInput)} />
        <p>{searchEnter}</p>
      </form>
    );
  }


}

export default SearchBar