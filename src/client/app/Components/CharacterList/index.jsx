import React from 'react';
import CharacterCard from '../CharacterCard/index.jsx'
const CharacterList = (props) => {
  const characters = props.characters.map((character, index) => {
    return (
      <CharacterCard character={character} key={index}/>
    )
  });
  return (
    <ul>
      {characters}
    </ul>
  )
}
export default CharacterList;
