import React, { Component } from 'react'
import CardBody from './CardBody'

const TableHeader = () => {
  return (
    <thead>
      {/* <NavBar></NavBar> */}
      {/* No longer calling NavBar here, instead calling in App's render() */}
    </thead>
  )
}

const Table = props => {
  const { characterData, removeCharacter } = props
  
  return (
    <table>
      {/* <TableHeader /> */}
      <ul>
        <CardBody characterData={characterData} removeCharacter={removeCharacter} />
      </ul>
    </table>
  )
}
  
export default Table