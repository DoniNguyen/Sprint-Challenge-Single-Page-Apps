import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import jssPluginPropsSort from "jss-plugin-props-sort";

export default function SearchForm() {
 const [searchTerm, setSearchTerm] = useState("");
 const [searchResults, setSearchResults] = useState([]);
 const [characters, setCharacters] = useState([]);

 useEffect(() => {
   axios.get("https://rickandmortyapi.com/api/character/")
   .then(response=>{
     setCharacters(response.data.results);
   })
   const results = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
   );
   setSearchResults(results);
 },[searchTerm]);

 const handleChange = event => {
   setSearchTerm(event.target.value);
 }
  return (
    <section className="search-form">

      <form>
        <label htmlFor="search">
          <input id="search" type="text" placeholder="search characters" onChange={handleChange} value={searchTerm}></input>
        </label>
      </form>
      <div>
        <ul>
          {searchResults.map(character=>(
          <CharacterCard key={character.id} image={character.image} name={character.name} status={character.status} gender={character.gender} species={character.species} ></CharacterCard>
          ))}
        </ul>
      </div>
    </section>
  );
}
