import React, { Component, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import {Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import './Categories.css';



const Categories = props => {
    const { sortCategories } = props;
    const [value, setValue] = useState([0, 20]);
    const handleChange = (val) => setValue(val);
    return (
        <body>
            <label htmlFor="categoryFilters">Category Filters</label>
            
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange} >
                <ToggleButton onChange={() => sortCategories('Clothing')} className="Btn-Blue-BG" value={1}>Clothing/Apparel</ToggleButton>
            </ToggleButtonGroup>{' '}
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Farmers Market')} className="Btn-Blue-BG" value={2}>Farmers Market</ToggleButton>
            </ToggleButtonGroup>{' '}
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Food Truck')} className="Btn-Blue-BG" value={3}>Food Truck</ToggleButton>
            </ToggleButtonGroup>{' '}
            <br></br>
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Concerts')} className="Btn-Blue-BG" value={4}>Concerts</ToggleButton>
            </ToggleButtonGroup>{' '}
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Immersive Experience')} className="Btn-Blue-BG" value={5}>Immersive Experience</ToggleButton>
            </ToggleButtonGroup>{' '}
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Art')} className="Btn-Blue-BG" value={6}>Art</ToggleButton>
            </ToggleButtonGroup>{' '}
            <br></br>
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Flea Market')} className="Btn-Blue-BG" value={7}>Flea Market</ToggleButton>
            </ToggleButtonGroup>{' '}
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Educational')} className="Btn-Blue-BG" value={8}>Educational</ToggleButton>
            </ToggleButtonGroup>{' '}
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Athletic/Sports')}className="Btn-Blue-BG" value={9}>Athletic/Sports</ToggleButton>
            </ToggleButtonGroup>{' '}
            <br></br>
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Automotive')} className="Btn-Blue-BG" value={10}>Automotive</ToggleButton>
            </ToggleButtonGroup>{' '}
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Gaming')} className="Btn-Blue-BG" value={11}>Gaming</ToggleButton>
            </ToggleButtonGroup>{' '}
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Jewelry')} className="Btn-Blue-BG" value={12}>Jewelry</ToggleButton>
            </ToggleButtonGroup>{' '}
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('For Kids')} className="Btn-Blue-BG" value={13}>For Kids</ToggleButton>
            </ToggleButtonGroup>{' '}
            <br></br>
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Cultural Festivals')} className="Btn-Blue-BG" value={14}>Cultural Festivals</ToggleButton>
            </ToggleButtonGroup>{' '}
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Favorites')} className="Btn-Blue-BG" value={15}>Favorites</ToggleButton>
            </ToggleButtonGroup>{' '}
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton onChange={() => sortCategories('Movies/Plays')} className="Btn-Blue-BG" value={16}>Movies/Plays</ToggleButton>
            </ToggleButtonGroup>{' '}
        </body>
    )
  }

export default Categories;