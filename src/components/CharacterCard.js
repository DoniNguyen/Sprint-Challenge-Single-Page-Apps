import React from "react";
import styled from "styled-components";

const Blueh1 = styled.h1`
  color:blue;
`
const CharacterCard = props => {
  return (
    <div className="characterCard">
      <img src={props.image}/>
      <Blueh1>{props.name}</Blueh1>
      <p>Status:{props.status}</p>
      <p>Gender:{props.gender}</p>
      <p>Species:{props.species}</p>
    </div>
  )
}

export default CharacterCard