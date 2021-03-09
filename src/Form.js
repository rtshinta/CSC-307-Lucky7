import React, { Component } from 'react';

class Form extends Component {
  initialState = {
    event: '',
    description: '',
    location:'',
    date: '',
    photo: '',
    tags: '',
    rating: 0,
    zipcode: '',
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
    const { event, description, location, date, photo, tags, rating, zipcode } = this.state;
  
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
        {/* <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={this.handleChange} /> */}
        <textarea
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={this.handleChange}
          rows="4"
          cols="20" />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={location}
          onChange={this.handleChange} />
        <label htmlFor="zipcode">Zip Code</label>
        <input
          type="text"
          name="zipcode"
          id="zipcode"
          value={zipcode}
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
        <input href="/" type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
}

}

export default Form