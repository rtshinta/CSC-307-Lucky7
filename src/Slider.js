import React, { Component, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import './Slider.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
//import RangeSlider from 'react-bootstrap-range-slider'



const Slider = props => {
    const { handleDistance } = props;
    const [ value, setValue ] = useState(50); 
    const [ value2, setValue2 ] = useState("");
    return (
        <body class="card_body">
            <div class="slidecontainer">
            <Form className="zipcode_elements">
                <Form.Group controlId="zipcode">
                {/* <Form.Label>Enter your Zip Code</Form.Label> */}
                <Form.Control value2={value2} onChange={e => setValue2(e.target.value)} type="text" placeholder="Zip Code"/>
                </Form.Group>
                <Button size="sm" variant="primary" type="button" onClick={() => handleDistance(value2, value)}>
                Submit
                </Button>
            </Form>
                {/* <label htmlFor="customRange1">Search Range</label> */}
                <input type="range" min="0" max="100" step="10" value={value} onChange={changeEvent => {setValue(changeEvent.target.value); handleDistance(value2, value)}}></input>
                <div onChange={console.log(value)} class="sliderval">Range: {value} miles</div>
            </div>
            
        </body>
    )
  }

export default Slider;
