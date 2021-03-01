import React, { Component } from 'react'
import CardBody from './CardBody'

const Table = props => {
  const { characterData, removeCharacter } = props
  
  return (
    <table>
      <ul>
        <CardBody characterData={characterData} removeCharacter={removeCharacter} />
      </ul>
    </table>
  )
}
  
export default Table