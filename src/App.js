import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import axios from 'axios';
import Sidecard from './Sidecard';
import SearchBar from './SearchBar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './NavBar';

class App extends Component {
	state = {
    characters: []
  };

  componentDidMount() {
    axios.get('http://localhost:5000/users')
     .then(res => {
       const characters = res.data.users_list;
       this.setState({ characters });
     })
     .catch(function (error) {
       //Not handling the error. Just logging into the console.
       console.log(error);
     });
 }

  removeCharacter = index => {
    this.makeDeleteCall(index).then( callResult => {
      if (callResult === true) {
        axios.get('http://localhost:5000/users')
        .then(response => {
          const characters = response.data.users_list;
          this.setState({ characters });
        })
      }
   });
  }

  sortAscending = () => {
    this.makeSortAscCall().then( callResult => {
      if (callResult === true){
        axios.get('http://localhost:5000/sort_by_date?type=asc')
        .then(response => {
          const characters = response.data.users_list;
          this.setState({ characters });
        })
      }
    })
  }

  sortRatingAscending = () => {
    this.makeSortRatingAscCall().then( callResult => {
      if (callResult === true){
        axios.get('http://localhost:5000/sort_by_rating?type=asc')
        .then(response => {
          const characters = response.data.users_list;
          this.setState({ characters });
        })
      }
    })
  }

  sortDescending = () => {
    this.makeSortDescCall().then( callResult => {
      if (callResult === true){
        axios.get('http://localhost:5000/sort_by_date?type=desc')
        .then(response => {
          const characters = response.data.users_list;
          this.setState({ characters });
        })
      }
    })
  }

  sortRatingDescending = () => {
    this.makeSortRatingDescCall().then( callResult => {
      if (callResult === true){
        axios.get('http://localhost:5000/sort_by_rating?type=desc')
        .then(response => {
          const characters = response.data.users_list;
          this.setState({ characters });
        })
      }
    })
  }


  handleSubmit = character => {
    this.makePostCall(character).then( callResult => {
       if (callResult === true) {
         //this.setState({ characters: [...this.state.characters, character] });

         axios.get('http://localhost:5000/users')
         .then(response => {
           const characters = response.data.users_list;
           this.setState({ characters });
         })
       }
    });
  }

  makePostCall(character){
    return axios.post('http://localhost:5000/users', character)
     .then(function (response) {
       console.log(response);
       return (response.status === 201);
     })
     .catch(function (error) {
       console.log(error);
       return false;
     });
  }

  makeSortAscCall(){
    return axios.get('http://localhost:5000/sort_by_date?type=asc')
    .then(function(response){
      console.log(response);
      return (response.status == 200);
    })
    .catch(function (error){
      console.log(error);
      return false;
    })
  }

  makeSortRatingAscCall(){
    return axios.get('http://localhost:5000/sort_by_rating?type=asc')
    .then(function(response){
      console.log(response);
      return (response.status == 200);
    })
    .catch(function (error){
      console.log(error);
      return false;
    })
  }

  makeSortDescCall(){
    return axios.get('http://localhost:5000/sort_by_date?type=desc')
    .then(function(response){
      console.log(response);
      return (response.status == 200);
    })
    .catch(function (error){
      console.log(error);
      return false;
    })
  }

  makeSortRatingDescCall(){
    return axios.get('http://localhost:5000/sort_by_rating?type=desc')
    .then(function(response){
      console.log(response);
      return (response.status == 200);
    })
    .catch(function (error){
      console.log(error);
      return false;
    })
  }

  makeDeleteCall(index){
    const { characters } = this.state
    const id_to_delete = characters[index]._id

    return axios.delete('http://localhost:5000/users/' + id_to_delete)
     .then(function (response) {
       console.log(response);
       return (response.status === 204);
     })
     .catch(function (error) {
       console.log(error);
       return false;
     });
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  //If string is not empty, do filter search on characters list.
  //else, reload previous information.
  handleSearch = textString => {
    axios.get('http://localhost:5000/users')
    .then(res => {
      const previous_characters = res.data.users_list;
      this.setState({
        characters: previous_characters,
      });

      if(textString != '')
      {
        const characters = this.state.characters.filter(character => character.event.toLowerCase().includes(textString.toLowerCase()))
        this.setState({ characters });
      }
      else
      {
        this.setState({
          characters: previous_characters,
        });
      }

    })
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <NavBar />
        <SearchBar searchFunction={this.handleSearch}/>
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/eventform">
              <EventForm handleSubmit={this.handleSubmit}  />
            </Route>
            <Route path="/">
              <Home characterData={characters} removeCharacter={this.removeCharacter} sortAscending={this.sortAscending} sortDescending={this.sortDescending} sortRatingAscending={this.sortRatingAscending} sortRatingDescending={this.sortRatingDescending}/>
            </Route>
          </Switch>
        </Router>
        <br></br>
      </div>
    );
  }
  


}
//<Slider defaultValue={50} min={0} step={1} max={100} value={this.state.value} onChange={this.handleChange} onDragStop={this.handleDragStop} vertical={true}/>
/*Note the last line in the App.js file. It makes the component available to be imported into other components or files (like we did in the index.js -- see the import).*/
export default App

const EventForm = (props) => {
  return (
    <div>
      <Form handleSubmit={props.handleSubmit} />
    </div>
  )
}

const Home = (props) => {
  return (
    <div>
      <Table characterData={props.characterData} removeCharacter={props.removeCharacter} />
      <Sidecard sortAscending={props.sortAscending} sortDescending={props.sortDescending} sortRatingAsc={props.sortRatingAscending} sortRatingDesc={props.sortRatingDescending}/>
    </div>
  )
}

function About() {
  return (
  <div>  
    <h2>About</h2>
    <p>Here we'll put some information about our team</p>
  </div>
  )
}

