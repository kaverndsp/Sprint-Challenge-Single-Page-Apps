import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
    <h1>Name: {props.name}</h1>
    <img src={props.image}/> 
    <h2>species: {props.species}</h2>
    <p>gender: {props.gender}</p>
    </div>
  );
}
