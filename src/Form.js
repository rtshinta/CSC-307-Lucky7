import React, { Component } from 'react';
import App from './App';
import handleSubmit from "./App"

class Form extends Component {
  initialState = {
    event: '',
    description: '',
    location:'',
    date: '',
    photo: '',
    tags: '',
    rating: '',
  };

  state = this.initialState;

  //grabbing variable based on value / name of variable. Then setting to whatever in input.
  //Is this referring to the name in state that was changed to event?
  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }


  //calls the handleChange function and sets it?
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { event, description, location, date, photo, tags, rating } = this.state;
  
    return (
      <form className="Form_page">
        {/*Just changed the labels, need to change the field names in the backend*/}
        <label htmlFor="event">Event Name</label>
        <input
          type="text"
          name="event"
          id="event"
          value={event}
          onChange={this.handleChange} />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={this.handleChange} />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={location}
          onChange={this.handleChange} />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={this.handleChange}
          />
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
          id="tags"
          value={tags}
          onChange={this.handleChange} />
        <label htmlFor="photo">Photo Link</label>
        <input
          type="text"
          name="photo"
          id="photo"
          value={photo}
          onChange={this.handleChange} />
        <label htmlFor="rating">Rating</label>
        <input
          type="text"
          name="rating"
          id="rating"
          value={rating}
          onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
}

}

export default Form