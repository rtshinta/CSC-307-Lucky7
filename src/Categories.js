import React, { Component, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import {Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import './Categories.css';


var arr = [];
const Categories = props => {
    const { sortCategories } = props;
    const [value, setValue] = useState([0, 20]);
    const [checked, setChecked] = useState(true);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(true);
    const [checked4, setChecked4] = useState(true);
    const [checked5, setChecked5] = useState(true);
    const [checked6, setChecked6] = useState(true);
    const [checked7, setChecked7] = useState(true);
    const [checked8, setChecked8] = useState(true);
    const [checked9, setChecked9] = useState(true);
    const [checked10, setChecked10] = useState(true);
    const [checked11, setChecked11] = useState(true);
    const [checked12, setChecked12] = useState(true);
    const [checked13, setChecked13] = useState(true);
    const [checked14, setChecked14] = useState(true);
    const [checked15, setChecked15] = useState(true);
    const [checked16, setChecked16] = useState(true);
    const handleChange = (val) => setValue(val);
    const handleChecked = () => setChecked(!checked);
    const handleChecked2 = () => setChecked2(!checked2);
    const handleChecked3 = () => setChecked3(!checked3);
    const handleChecked4 = () => setChecked4(!checked4);
    const handleChecked5 = () => setChecked5(!checked5);
    const handleChecked6 = () => setChecked6(!checked6);
    const handleChecked7 = () => setChecked7(!checked7);
    const handleChecked8 = () => setChecked8(!checked8);
    const handleChecked9 = () => setChecked9(!checked9);
    const handleChecked10 = () => setChecked10(!checked10);
    const handleChecked11 = () => setChecked11(!checked11);
    const handleChecked12 = () => setChecked12(!checked12);
    const handleChecked13 = () => setChecked13(!checked13);
    const handleChecked14 = () => setChecked14(!checked14);
    const handleChecked15 = () => setChecked15(!checked);
    const handleChecked16 = () => setChecked16(!checked);

    
    const handleMultipleCategories = (isChecked, category) => {
        if (isChecked){
            arr.push(category);
            sortCategories(arr);
        }
        else{
            arr = arr.filter(e => e !== category);
            sortCategories(arr);
        }
    }
    
    return (
        <body className="card_body CategoryFilters">
            {/* <label htmlFor="categoryFilters">Category Filters</label> */}
            
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange} >
                <ToggleButton  checked={checked} onChange={() => {handleMultipleCategories(checked, "Clothing/Apparel"); handleChecked();}} className="Btn-Blue-BG" value={1}>Clothing/Apparel</ToggleButton>
            </ToggleButtonGroup>
            
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton  checked2={checked2} onChange={() => {handleMultipleCategories(checked2, "Farmers Market"); handleChecked2();}} className="Btn-Blue-BG" value={2}>Farmers Market</ToggleButton>
            </ToggleButtonGroup>
            
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton  checked3={checked3} onChange={() => {handleMultipleCategories(checked3, "Food Truck"); handleChecked3();}} className="Btn-Blue-BG" value={3}>Food Truck</ToggleButton>
            </ToggleButtonGroup>
            
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton checked4={checked4} onChange={() => {handleMultipleCategories(checked4, "Concert"); handleChecked4();}}  className="Btn-Blue-BG" value={4}>Concerts</ToggleButton>
            </ToggleButtonGroup>
            
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton checked11={checked11} onChange={() => {handleMultipleCategories(checked11, "Gaming"); handleChecked11();}} className="Btn-Blue-BG" value={11}>Gaming</ToggleButton>
            </ToggleButtonGroup>
            
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton checked5={checked5} onChange={() => {handleMultipleCategories(checked5, "Immersive Experience"); handleChecked5();}} className="Btn-Blue-BG" value={5}>Immersive Experience</ToggleButton>
            </ToggleButtonGroup>
                        
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton checked13={checked13} onChange={() => {handleMultipleCategories(checked13, "For Kids"); handleChecked13();}} className="Btn-Blue-BG" value={13}>For Kids</ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton checked6={checked6} onChange={() => {handleMultipleCategories(checked6, "Art"); handleChecked6();}} className="Btn-Blue-BG" value={6}>Art</ToggleButton>
            </ToggleButtonGroup>
            
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton checked7={checked7} onChange={() => {handleMultipleCategories(checked7, "Flea Market"); handleChecked7();}}className="Btn-Blue-BG" value={7}>Flea Market</ToggleButton>
            </ToggleButtonGroup>
            
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton checked8={checked8} onChange={() => {handleMultipleCategories(checked8, "Educational"); handleChecked8();}} className="Btn-Blue-BG" value={8}>Educational</ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton checked9={checked9} onChange={() => {handleMultipleCategories(checked9, "Athletic/Sports"); handleChecked9();}} className="Btn-Blue-BG" value={9}>Athletic/Sports</ToggleButton>
            </ToggleButtonGroup>
            
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton checked14={checked14} onChange={() => {handleMultipleCategories(checked14, "Cultural Festivals"); handleChecked14();}} className="Btn-Blue-BG" value={14}>Cultural Festivals</ToggleButton>
            </ToggleButtonGroup>
                        
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton checked12={checked12} onChange={() => {handleMultipleCategories(checked12, "Jewelry"); handleChecked12();}} className="Btn-Blue-BG" value={12}>Jewelry</ToggleButton>
            </ToggleButtonGroup>
            
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton checked2={checked10} onChange={() => {handleMultipleCategories(checked10, "Automotive"); handleChecked10();}} className="Btn-Blue-BG" value={10}>Automotive</ToggleButton>
            </ToggleButtonGroup>
            
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton checked15={checked15} onChange={() => {handleMultipleCategories(checked15, "Favorites"); handleChecked15();}} className="Btn-Blue-BG" value={15}>Favorites</ToggleButton>
            </ToggleButtonGroup>
            
            <ToggleButtonGroup size="sm" type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton checked2={checked16} onChange={() => {handleMultipleCategories(checked16, "Movies/Plays"); handleChecked16();}} className="Btn-Blue-BG" value={16}>Movies/Plays</ToggleButton>
            </ToggleButtonGroup>
        </body>
    )
  }

export default Categories;