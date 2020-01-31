import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import {Link} from "react-router-dom";


export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
 


  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results)
      setCharacters(response.data.results)
     
    })
    .catch(error => {
      console.log("The data could not be returned", error)
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
     <Link to={"/"}> Home</Link>
     <Link to="/Search">Search</Link>
          {characters.map(char => {
          return(
            
              <CharacterCard  key={char.id}
              name={char.name}
              species={char.species}
              gender={char.gender}
              image={char.image} />
            
          )
        })}
      
    </section>
  );
}
