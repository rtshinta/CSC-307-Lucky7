import React, { Component, useState } from 'react';
import './Sidecard.css';
import Slider from './Slider';
import Categories from './Categories';
import { Card, Button, Tag, Dropdown, DropdownButton } from 'react-bootstrap';
import './style.css';
import './CardBody.css';

const Sidecard = props => {
  const [value, setValue] = useState("Newest to Oldest \u25BD");
  const handleSelect=(e)=>{
    setValue(e)
  }

  const [value2, setValue2] = useState("Highest to Lowest Rating \u25BD");
  const handleSelect2=(e)=>{
    setValue2(e)
  }


    return (
      <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '400px', height: "650px", borderRadius: '2rem',}}>
      
      <Card.Body>
        <Card.Title>Filters</Card.Title>
        <Card.Text>
          Adjust what you want to see in your feed
        </Card.Text>
        <DropdownButton title={value} className="dropdown1" onSelect={handleSelect}>
          <Dropdown.Item eventKey="Newest to Oldest &#9661;">Newest to Oldest</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="Oldest to Newest &#9661;">Oldest to Newest</Dropdown.Item>
        </DropdownButton>
        <p></p>
        <DropdownButton  title={value2} className="dropdown1" onSelect={handleSelect2}>
          <Dropdown.Item eventKey="Highest to Lowest Rating &#9661;">Highest to Lowest Rating</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="Lowest to Highest Rating &#9661;">Lowest to Highest Rating</Dropdown.Item>
        </DropdownButton>
        <Slider />
        <Categories />
      </Card.Body>
    </Card>
    )
  }

export default Sidecard;