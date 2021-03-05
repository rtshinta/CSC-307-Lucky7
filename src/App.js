import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import axios from 'axios';
import Sidecard from './Sidecard';
import SearchBar from './SearchBar'
import EventExpand from './EventExpand'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { waitForElementToBeRemoved } from '@testing-library/react';

class App extends Component {
	state = {
    characters: [],
    selected_Card: ' '
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

  handleCategories = (categories) => {
    axios.get('http://localhost:5000/users')
    .then(res => {
      const previous_characters = res.data.users_list;
      this.setState({
        characters: previous_characters,
      });
      if(categories.length != 0)
      {
        var characters = [];
        //console.log(categories.some(r=>['Concert', 'Clothing', 'Help', 'food truck'].indexOf(r) >= 0));
        const categoriesLowercase = categories.forEach(element => element.toLowerCase());
        for(var i=0; i < this.state.characters.length; i++){
          var tags = this.state.characters[i]['tags'].split(",").map(v => v.toLowerCase());
          tags = tags.map(v => v.trim());
          console.log(tags);
          if(categories.map(v => v.toLowerCase()).some(r=>tags.indexOf(r) >= 0)){
            characters.push(this.state.characters[i]);
          }
        }

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

  sortCharacterList = () => {
    const c = this.state.characters;
    const sortedList = c.sort(function(a, b) {
      var nameA = a.date.toUpperCase(); // ignore upper and lowercase
      var nameB = b.date.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    this.setState({
      characters: sortedList,
    });
  }

  sortCharacterListDesc = () => {
    const c = this.state.characters;
    const sortedList = c.sort(function(a, b) {
      var nameA = a.date.toUpperCase(); // ignore upper and lowercase
      var nameB = b.date.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    this.setState({
      characters: sortedList,
    });
  }

  sortByRating = () => {
    const c = this.state.characters;
    const sortedList = c.sort(function(a, b) {
      var nameA = a.rating.toUpperCase(); // ignore upper and lowercase
      var nameB = b.rating.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    this.setState({
      characters: sortedList,
    });
  }

  sortByRatingDesc = () => {
    const c = this.state.characters;
    const sortedList = c.sort(function(a, b) {
      var nameA = a.rating.toUpperCase(); // ignore upper and lowercase
      var nameB = b.rating.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    this.setState({
      characters: sortedList,
    });
  }

  setInfo = row => {
    this.setState({
      selected_Card: row,
    });
  }

  render() {
    const { characters } = this.state;
    console.log(this.state);

    return (
      <div className="container">
        <SearchBar searchFunction={this.handleSearch}/>
        <Router>
          <Switch>
          <Route path="/eventdetails/:id">
              <EventExpand CardInfo={this.state.selected_Card}></EventExpand>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/eventform">
              <EventForm handleSubmit={this.handleSubmit}  />
            </Route>
            <Route path="/">
              <Home setInfo={this.setInfo} characterData={characters} removeCharacter={this.removeCharacter} sortAscending={this.sortCharacterList} sortDescending={this.sortCharacterListDesc} sortRatingAscending={this.sortByRating} sortRatingDescending={this.sortByRatingDesc} handleCategories={this.handleCategories}/>
            </Route>
          </Switch>
        </Router>
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
    <div class="full_container">
    <div className="Homepage">
      <Sidecard sortAscending={props.sortAscending} sortDescending={props.sortDescending} sortRatingAsc={props.sortRatingAscending} sortRatingDesc={props.sortRatingDescending} sortCategories={props.handleCategories}/>
      <Table characterData={props.characterData} removeCharacter={props.removeCharacter} setInfo={props.setInfo}/>
    </div>
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