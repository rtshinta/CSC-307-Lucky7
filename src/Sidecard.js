import React, { Component, useState } from 'react';
import './Sidecard.css';
import Slider from './Slider';
import Categories from './Categories';
import { Card, Button, Tag, Dropdown, DropdownButton } from 'react-bootstrap';
import './style.css';
import './CardBody.css';

const Sidecard = props => {
  const { sortAscending , sortDescending, sortRatingAsc, sortRatingDesc, sortCategories, handleDistance } = props;
  const [value, setValue] = useState("Newest to Oldest \u25BD");
  const handleSelect=(e)=>{
    setValue(e)
  }

  const [value2, setValue2] = useState("Most to Least Liked \u25BD");
  const handleSelect2=(e)=>{
    setValue2(e)
  }


    return (
      <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '400px', height: "800px", borderRadius: '2rem',}}>
      
      <Card.Body>
        <Card.Title>Filters</Card.Title>
        <Card.Text>
          Adjust what you want to see in your feed
        </Card.Text>
        <DropdownButton title={value} className="dropdown1">
          <Dropdown.Item onClick={sortAscending} eventKey="Newest to Oldest &#9661;">Newest to Oldest</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={sortDescending} eventKey="Oldest to Newest &#9661;">Oldest to Newest</Dropdown.Item>
        </DropdownButton>
        <p></p>
        <DropdownButton  title={value2} className="dropdown1" onSelect={handleSelect2}>
          <Dropdown.Item onClick={sortRatingDesc} eventKey="Most to Least Liked &#9661;">Most to Least Liked</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={sortRatingAsc} eventKey="Least to Most Liked &#9661;">Least to Most Liked</Dropdown.Item>
        </DropdownButton>
        <Slider handleDistance={handleDistance} />
        <Categories sortCategories={sortCategories}/>
      </Card.Body>
    </Card>
    )
  }

export default Sidecard;