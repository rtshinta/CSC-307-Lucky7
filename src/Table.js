import React, { Component } from 'react'
import CardBody from './CardBody'

const TableHeader = () => {
  return (
    <thead>
{/*
      Is this where we should stick our search bar, search button, and hamburger menu?
      Currently this function does nothing
      Or probably just make dedicated file for them like CardBody and call them like we do for CardBody below
*/}
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