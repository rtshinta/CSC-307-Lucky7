import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Montserrat-Medium.ttf';
import './SearchBar.css'


class SearchBar extends Component
{
  initialState = {
    currentInput: ''
  };
  state = this.initialState;


  //Update field as typed in. For Current Input.
  searchSubmit = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    })
  }





  render() {
    const { currentInput, searchEnter } = this.state;
    const { searchFunction } = this.props;


    return(
      <nav class="navbar navbar-default"style={{padding:'0px',backgroundColor:'transparent',borderColor:'transparent'}}>
          <div class="container-fluid" style = {{padding:'0px'}}>
              <div class="navbar-header">
                  <a class="navbar-brand" href="http://localhost:3000/">
                      <img src="logo_icon.png" alt = "failed to load image"/>
                  </a>
              </div>
              <form class="navbar-form navbar-right">
                <label htmlFor='currentInput'></label>
                <div class="form-group">
                  <input type="text" name="currentInput" id="currentInput" class = "form-control" 
                  value={currentInput} onChange={this.searchSubmit} placeholder="Search" style ={{width: '500px'}}/>
                </div>
                <button type="button" id="srchBtn" aria-label = "srchBtn" onClick={() => searchFunction(currentInput)}
                style={{borderRadius:50,height:'40px',width:'40px',marginLeft: '5px'}}>
                  <i class="glyphicon glyphicon-search" style={{display:'flex', justifyContent:'center',alignItems:'center',fontSize:'17px'}}></i>
                </button>
                <p>{searchEnter}</p>
              </form>
              <div class="btn-group">
                  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                  style={{borderRadius:50,height:'40px',width:'40px',marginTop:'15px'}}>
                      <i class="glyphicon glyphicon-menu-hamburger" style={{display:'flex', justifyContent:'center',alignItems:'center',fontSize:'17px'}}></i>
                  </button>
                  <div className="dropdown-menu">
                      <a className="dropdown-item" href="/">Home</a>
                          <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/eventform">Form</a>
                          <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/about">About</a>
                  </div>
              </div>
          </div>
      </nav>)
  }


}

export default SearchBar