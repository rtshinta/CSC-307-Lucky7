import React, { Component } from 'react'
import CardBody from './CardBody'
import NavBar from './NavBar'

const TableHeader = () => {
  return (
    <thead>
      <NavBar></NavBar>
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