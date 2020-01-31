import React from "react";
import styled from "styled-components";
import "./Styles.css";

export default function CharacterCard(props) {
  const NewDiv = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  align-content:center;
  margin:0% 25%;
  border:1px solid lightgrey;
  margin-top: 2%
  background-image: url(https://images.pexels.com/photos/1040473/pexels-photo-1040473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  `;

  
  
  
  return (
    <NewDiv>
    <h1 className="buffer">Name: {props.name}</h1>
    <img className="buffer" src={props.image}/> 
    <h2 className="buffer">Species: {props.species}</h2>
    <p className="buffer">Gender: {props.gender}</p>
    </NewDiv>
  );
}
