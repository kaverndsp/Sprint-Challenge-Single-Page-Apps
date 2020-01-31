import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
    <h1>Name: {props.char.name}</h1>
    <img src={props.char.image}/> 
    <h2>species: {props.char.species}</h2>
    <p>Status: {props.char.status}</p>
    </div>
  );
}
