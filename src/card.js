import React, { Component } from 'react'
import './style.css';

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

  const card = props => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>{row._id}</td>
        <td>
        <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
        </tr>

      )
    })
  
    return <tbody>{rows}</tbody>
  }

  const Table = props => {
    const { characterData, removeCharacter } = props
  
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }
  

export default card