import React, { Component, useState } from 'react';
import './Sidecard.css';
import Slider from './Slider';
import Categories from './Categories';
import { Card, Button, Tag, Dropdown, DropdownButton } from 'react-bootstrap';
import './style.css';
import './CardBody.css';

const Sidecard = props => {
  const { sortAscending , sortDescending, sortRatingAsc, sortRatingDesc, sortCategories } = props;
  const [value, setValue] = useState("Newest to Oldest");
  const handleSelect=(e)=>{
    setValue(e)
  }

  const [value2, setValue2] = useState("Highest to Lowest Rating");
  const handleSelect2=(e)=>{
    setValue2(e)
  }


    return (
      <Card className="SideCard">
      <Card.Body>
        <Card.Title>Filters</Card.Title>
        <Card.Text>
          Adjust what you want to see in your feed
        </Card.Text>
        <DropdownButton title={value} className="dropdown1" onSelect={handleSelect}>
          <Dropdown.Item onClick={sortAscending} eventKey="Newest to Oldest">Newest to Oldest</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={sortDescending} eventKey="Oldest to Newest">Oldest to Newest</Dropdown.Item>
        </DropdownButton>
        <p></p>
        <DropdownButton  title={value2} className="dropdown1" onSelect={handleSelect2}>
          <Dropdown.Item onClick={sortRatingDesc} eventKey="Highest to Lowest Rating">Highest to Lowest Rating</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={sortRatingAsc} eventKey="Lowest to Highest Rating">Lowest to Highest Rating</Dropdown.Item>
        </DropdownButton>
        <Slider />
        <Categories sortCategories={sortCategories}/>
      </Card.Body>
    </Card>
    )
  }

export default Sidecard;