import React, { Component } from 'react';

class Form extends Component {
  initialState = {
    name: '',
    job: '',
    photo: '',
  };

  state = this.initialState;

  //grabbing variable based on value / name of variable. Then setting to whatever in input.
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
    const { name, job, photo} = this.state;
  
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} />
        <label htmlFor="photo">photo link</label>
        <input
          type="text"
          name="photo"
          id="photo"
          value={photo}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
}

}

export default Form