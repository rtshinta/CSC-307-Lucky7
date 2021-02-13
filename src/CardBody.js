import React, { Component } from 'react'
import './style.css'
import { Card, Button, Tag } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Montserrat-Medium.ttf'
import './CardBody.css'

const trimString = (text_input, limit) => {
    var text_input2 = text_input.replace(/\n/g, '');
    if(text_input2.length > limit)
    {
      return (text_input2.substring(0,limit) + "...");
    }
    return (text_input2.substring(0,limit) + '\n');
  }

const StarsToDisplay = (props) => {
  var rating = parseInt(props.text_input);
  var ratings = Array(5).fill().map((_, i) => i < rating ? 'fa fa-star checked' : 'fa fa-star');

  //Why does this not allow the rating to be 5?
  if(rating >=0 && rating <5)
  {
    return(
      <div style={{position: 'absolute', marginLeft: 'auto', marginRight: 'auto', top: "86%", left: '0', right: '0', textAlign: 'center', fontSize: '1.5rem',}}>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <span class={ratings[0]}></span>
          <span class={ratings[1]}></span>
          <span class={ratings[2]}></span>
          <span class={ratings[3]}></span>
          <span class={ratings[4]}></span>
      </div>
    )
  }
  return (
    <div>
      Rating Input Error.
    </div>
    )
}

const TagOutput = (props) => {
  const tags_list = props.tags_list;
  const listItems = tags_list.map((tags) =>
  <span class="badge badge badge-primary" style={{ padding: '4%', marginRight: '10px', marginTop: '10px'}}>{tags}</span>
  );

  return (
      <div>{listItems.splice(0,3)}</div>
  );
}

const CardBody = props => {
    const rows = props.characterData.map((row, index) => {
    var trimmed_name = trimString(row.event, 40);

    //temporary remove this and put dynamic data.
    var tags = ['Food Truck','Concert', 'Clothing', 'of']
    var rating = '4';
    var date = row.date;

      return (
        <li style={{padding: '20px'}}>
        <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '300px', height: "400px", borderRadius: '2rem',}}>
          <Card.Img style={{ height: '30%', objectFit: 'cover', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem'}} src={row.photo} />
          <div style={{textAlign: 'center', fontSize: '1.5rem', letterSpacing: '-1px', height: '2.5rem', color: 'white', backgroundColor: '#1186F2'}}>{date}</div>
            <Card.Body>
              <Card.Title>{trimmed_name}</Card.Title>
              <TagOutput tags_list={tags} ></TagOutput>
              <Card.Text style={{position: 'absolute', marginLeft: 'auto', marginRight: 'auto', top: "75%", left: '0', right: '0', textAlign: 'center', fontSize: '1.25rem',}}>Modesto, CA</Card.Text>
              <StarsToDisplay text_input={rating}></StarsToDisplay>
              <Button variant="outline-primary" size="sm" style={{position: 'absolute', top: '3%', left: '77%'}}  onClick={() => props.removeCharacter(index)}>X</Button>
            </Card.Body>
        </Card>
        </li>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

  export default CardBody