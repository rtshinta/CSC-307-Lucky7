import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import axios from 'axios';
import Slider from './Slider';
import Sidecard from './Sidecard';
//import Slider from 'react-rangeslider';
import Categories from './Categories';
import Badge from 'react-bootstrap/Badge';
import { Card, Button, Tag, DropdownButton } from 'react-bootstrap';

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

  // handleSubmit = character => {
  //   this.setState({ characters: [...this.state.characters, character] })
  // };

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

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
        <br></br>
        <Sidecard />
        <br></br>
      </div>
    );
  }

}
//<Slider defaultValue={50} min={0} step={1} max={100} value={this.state.value} onChange={this.handleChange} onDragStop={this.handleDragStop} vertical={true}/>
/*Note the last line in the App.js file. It makes the component available to be imported into other components or files (like we did in the index.js -- see the import).*/
export default App