import React, { Component } from 'react'
import CardBody from './CardBody'

const Table = props => {
  const { characterData, removeCharacter, setInfo } = props
  
  return (
    <table>
      <ul>
        <CardBody characterData={characterData} removeCharacter={removeCharacter} setInfo={setInfo}/>
      </ul>
    </table>
  )
}
  
export default Table