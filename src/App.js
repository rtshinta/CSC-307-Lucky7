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
  Route
} from "react-router-dom";

class App extends Component {
	state = {
    characters: [],
    zipcode: [],
    categories: [],
    prev_characters: [],
    range: -1,
    selected_Card: ' ',
  };

  componentDidMount() {
    axios.get('http://localhost:5000/users')
     .then(res => {
       const characters = res.data.users_list;
       this.setState({ characters });
     })
     .catch(function (error) {
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
         axios.get('http://localhost:5000/users')
         .then(response => {
           const characters = response.data.users_list;
           this.setState({ characters });
         })
       }
    });
  }


  handleDistance = (zipcode, range) => {
    this.makeDistanceCall(zipcode, range).then( callResult => {
      if (callResult === true){
        axios.get('http://localhost:5000/zipcodes?zipcode=' + zipcode + '&range=' + range)
        .then(response => {
          const characters = response.data.users_list;
          this.setState({ characters: characters, range: range, });
        })

      }
    })
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


  makeDistanceCall(zipcode, range){
    return axios.get('http://localhost:5000/zipcodes?zipcode=' + zipcode + '&range=' + range)
    .then(function (response) {
      console.log(response);
      return (response.status === 200);
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




  handleSearch = textString => {
    axios.get('http://localhost:5000/users')
    .then(res => {
      const previous_characters = res.data.users_list;
      this.setState({
        characters: previous_characters,
      });

      if(textString !== '')
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


  calculateDistance = (zipcode, range) => {
    
    if(zipcode.length === 0 || typeof range === 'undefined'){
      axios.get('http://localhost:5000/users')
      .then(res => {
        const previous_characters = res.data.users_list;
        this.setState({
          characters: previous_characters,
        });
      })
    }
    if(this.state.categories.length > 0){
    axios.get('http://localhost:5000/user_zipcode?zipcode=' + zipcode)
    .then(res => {
      const coordinates = res.data.users_list;
      this.setState({
        zipcode: coordinates,
      });
      if(zipcode.length === 0 || typeof range === 'undefined'){
        axios.get('http://localhost:5000/users')
        .then(res => {
          const previous_characters = res.data.users_list;
          this.setState({
            characters: previous_characters,
            range: range,
          });
        })
      }
      var characters = [];
      var c = this.state.prev_characters;
      console.log(range);
      for(var i=0; i < this.state.prev_characters.length; i++){
        var tags = this.state.prev_characters[i]['tags'].split(",").map(v => v.toLowerCase());
        tags = tags.map(v => v.trim());
        if (this.state.zipcode[0] === this.state.prev_characters[i]['latitude'] && this.state.zipcode[1] === this.state.prev_characters[i]['longitude'] && this.state.categories.map(v => v.toLowerCase()).some(r=>tags.indexOf(r) >= 0)){
          characters.push(this.state.prev_characters[i]);
        }
        else{
          var radlat1 = Math.PI * this.state.zipcode[0]/180;
          var radlat2 = Math.PI * this.state.prev_characters[i]['latitude']/180;
          var theta = this.state.zipcode[1]-this.state.prev_characters[i]['longitude'];
          var radtheta = Math.PI * theta/180;
          var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
          if (dist > 1) {
            dist = 1;
          }
          dist = Math.acos(dist);
          dist = dist * 180/Math.PI;
          dist = dist * 60 * 1.1515;
          if (dist <= range && this.state.categories.map(v => v.toLowerCase()).some(r=>tags.indexOf(r) >= 0)){
            characters.push(this.state.prev_characters[i]);
          }
        }
      }
      this.setState({
        characters: characters,
        range: range
      });
    })}
    else{
      this.handleDistance(zipcode, range);
    }
  }

  
  handleCategories = (categories) => {
    axios.get('http://localhost:5000/users')
    .then(res => {
      const previous_characters = res.data.users_list;
      this.setState({
        characters: previous_characters,
        categories: categories,
        prev_characters: previous_characters,
      });
      if(categories.length !== 0)
      {
        var characters = [];
        for(var i=0; i < this.state.characters.length; i++){
          var tags = this.state.characters[i]['tags'].split(",").map(v => v.toLowerCase());
          tags = tags.map(v => v.trim());
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
          categories: [],
        });
      }
    })
  }


  sortCharacterList = () => {
    const c = this.state.characters;
    const sortedList = c.sort(function(a, b) {
      var nameA = a.date.toUpperCase(); 
      var nameB = b.date.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      characters: sortedList,
    });
    return sortedList;
  }

  sortCharacterListDesc = () => {
    const c = this.state.characters;
    const sortedList = c.sort(function(a, b) {
      var nameA = a.date.toUpperCase(); 
      var nameB = b.date.toUpperCase(); 
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      characters: sortedList,
    });
    return sortedList;
  }

  sortByRating = () => {
    const c = this.state.characters;
    const sortedList = c.sort(function(a, b) {
      var nameA = a.rating;
      var nameB = b.rating;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      characters: sortedList,
    });
    return sortedList;
  }

  sortByRatingDesc = () => {
    const c = this.state.characters;
    const sortedList = c.sort(function(a, b) {
      var nameA = a.rating;
      var nameB = b.rating;
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      characters: sortedList,
    });
    return sortedList;
  }

  setInfo = row => {
    this.setState({
      selected_Card: row,
    });
  }

  makePatchCall(id, data){
    const id_to_patch = id

    return axios.patch('http://localhost:5000/users/' + id_to_patch, data)
     .then(function (response) {
       console.log(response);
       return (response.status === 200);
     })
     .catch(function (error) {
       console.log(error);
       return false;
     });
  }

  handlePatch = (id,data) => {
    this.makePatchCall(id,data).then( callResult => {
      if (callResult === true) {
        axios.get('http://localhost:5000/users')
        .then(response => {
          const characters = response.data.users_list;
          this.setState({ characters });
        })
      }
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
              <EventExpand CardInfo={this.state.selected_Card} handlePatch={this.handlePatch}></EventExpand>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/eventform">
              <EventForm handleSubmit={this.handleSubmit}  />
            </Route>
            <Route path="/">
              <Home setInfo={this.setInfo} 
              characterData={characters} 
              removeCharacter={this.removeCharacter} 
              sortAscending={this.sortCharacterList} 
              sortDescending={this.sortCharacterListDesc} 
              sortRatingAscending={this.sortByRating} 
              sortRatingDescending={this.sortByRatingDesc} 
              handleCategories={this.handleCategories}
              handleDistance={this.calculateDistance}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}


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
      <Sidecard 
      sortAscending={props.sortAscending} 
      sortDescending={props.sortDescending} 
      sortRatingAsc={props.sortRatingAscending} 
      sortRatingDesc={props.sortRatingDescending} 
      sortCategories={props.handleCategories} 
      handleDistance={props.handleDistance}/>
      <Table characterData={props.characterData} removeCharacter={props.removeCharacter} setInfo={props.setInfo}/>
    </div>
    </div>
  )
}


function About() {
  return (
  <div>  
    <h1>About</h1>
    <h3>Website created by Coby Hong, Jonathan Fisher, Jaime Rizo, Ryan Shintaku</h3>
    <p>Use the Form Page located in the menu button on the top right to enter information about an upcoming popup event
      <br></br> Add a comma in between tags on the input form to have multiple tags
      <br></br> Add a comma in between photo links to add multiple photos
      <br></br> Click on our logo to return to the homepage where you can sort, filter, and search for events
      <br></br> Thank you for using our popup event feed for finding events and posting your events!
    </p>
  </div>
  )
}
