import React, { Component } from 'react'
import './style.css'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const trimString = (text_input, limit) => {
    var text_input2 = text_input.replace(/\n/g, '');
    if(text_input2.length > limit)
    {
      return (text_input2.substring(0,limit) + "...");
    }
    return (text_input2.substring(0,limit));
  }

const CardBody = props => {
    const rows = props.characterData.map((row, index) => {
    var trimmed_job = trimString(row.job, 60);
    var trimmed_name = trimString(row.name, 30);

      return (
        <li style={{padding: '20px'}}>
        <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '300px', height: "400px", borderRadius: '2rem',}}>
          <Card.Img style={{ height: '40%', objectFit: 'cover', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem'}} src={row.photo} />
            <Card.Body>
              <Card.Title>{trimmed_name}</Card.Title>
              <Card.Text>{trimmed_job}</Card.Text>
              <Button variant="outline-primary" size="sm" style={{position: 'absolute', top: '85%', left: '34%'}}  onClick={() => props.removeCharacter(index)}>Delete</Button>
            </Card.Body>
        </Card>
        </li>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

  export default CardBody