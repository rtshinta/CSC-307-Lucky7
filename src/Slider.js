import React, { Component, useState } from 'react';
import './Slider.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
//import RangeSlider from 'react-bootstrap-range-slider'



const Slider = props => {
    const [ value, setValue ] = useState(50); 
    return (
        <body>
            <div class="slidecontainer">
                <label htmlFor="customRange1">Search Range</label>
                <input type="range" min="1" max="100" value={value} onChange={changeEvent => setValue(changeEvent.target.value)}></input>
                <div class="sliderval">Range: {value} miles</div>
            </div>
            
        </body>
    )
  }

export default Slider;

/*
<RangeSlider
                min={1}
                max={100}
                value={value}
                onChange={changeEvent => setValue(changeEvent.target.value)}
                />
*/

//npm install react-bootstrap-range-slider
/*import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const Slider = props => {

  const [ value, setValue ] = useState(50); 

  return (
        <body>
            <div class="slidecontainer">
            <label htmlFor="customRange1">Search Range</label>
            <label htmlFor="customRange1">Search Range</label>
                <input type="range" className="custom-range" id="customRange1" />
                <RangeSlider
                min={1}
                max={100}
                value={value}
                onChange={changeEvent => setValue(changeEvent.target.value)}
                />
            </div>
        </body>
  );

};

export default Slider;*/

