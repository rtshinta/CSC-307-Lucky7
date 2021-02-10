import React, { Component } from 'react'
import CardBody from './CardBody'

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

const Table = props => {
  const { characterData, removeCharacter } = props
  
  return (
    <table>
      <TableHeader />
      <ul>
        <CardBody characterData={characterData} removeCharacter={removeCharacter} />
      </ul>
    </table>
  )
}
  
export default Table