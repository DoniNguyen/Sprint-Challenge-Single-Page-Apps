import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm"
export default function CharacterList() {
  const [characters, setCharacters] = useState([])
  // TODO: Add useState to track data from useEffect
const [] = useState()
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results)
    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {characters.map(character=>(
        <CharacterCard key={character.id} image={character.image} name={character.name} status={character.status} gender={character.gender} species={character.species} />
      ))}
    </section>
  );
}
