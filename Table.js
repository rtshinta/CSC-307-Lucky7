import React, { Component } from 'react'
import './style.css'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>ID</th>
        </tr>
      </thead>
    )
  }

const trimString = (text_input, limit) => {
  if(text_input.length > limit)
  {
    return (text_input.substring(0,limit) + "...");
  }
  return (text_input.substring(0,limit));
}

  const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
    var trimmed_job = trimString(row.job, 60)
    var trimmed_name = trimString(row.name, 30)

    
      
      return (
        // <tr key={index}>
        // <td>{row.name}</td>
        // <td>{row.job}</td>
        // <td>{row._id}</td>
        // <td>
        // <button onClick={() => props.removeCharacter(index)}>Delete</button>
        // </td>
        // </tr>

        <li style={{padding: '20px'}}>
        <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '300px', height: "400px", borderRadius: '2rem',}}>
          <Card.Img style={{ width: '100%', height: '12vw', objectFit: 'cover', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem'}} src={row.photo} />
            <Card.Body>
              <Card.Title>{trimmed_name}</Card.Title>
              <Card.Text>{trimmed_job}</Card.Text>
              <Button variant="primary" onClick={() => props.removeCharacter(index)}>Delete</Button>
            </Card.Body>
        </Card>
        </li>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

  const Table = props => {
    const { characterData, removeCharacter } = props
  
    return (
      <table>
        <TableHeader />
        <ul>
          <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </ul>
      </table>
    )
  }
  

export default Table