import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results)
      setCharacter(response.data.results)
    })
    .catch(error => {
      console.log("The data could not be returned", error)
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
     
        {character.map(char => {
          return(
            
              <CharacterCard key={char.id} char={char} />
            
          )
        })}
      
    </section>
  );
}
