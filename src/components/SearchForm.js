import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  console.log(props);
  

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

useEffect(()=>{
  axios.get("https://rickandmortyapi.com/api/character/")
  .then (response =>{
    const characters = response.data.results.filter(char =>
    char.name.toLowerCase().includes(query.toLowerCase())
    );

    setData (characters);
  });
},[query]);


const handleInputChange = event => {
  setQuery(event.target.value);
};
    
  return (
    <section className="search-form">
    <form >
      <input
      id="name" type="text" name="textfield" placeholder="Search"
      value={query} onChange={handleInputChange}/>



    <Link to="/">Home</Link>
    
    </form>

    {data.map((char => {
      console.log("THIS IS THE DATA I NEED", char)
  return(
  <CharacterCard key={char.id}
  name={char.name}
  species={char.species}
  gender={char.gender}
  image={char.image}/>)
}
))}

    </section>
  );
}
