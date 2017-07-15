import React from 'react';
const CharacterCard = ({character}) => {
  const name = character.name;
  const campaignID = character.campaignID;
  const image = character.image;
  return (
    <div>
      <p>Hello {name}, your campaign ID is {campaignID} and imageURL is {image}</p>
    </div>
  )
}
export default CharacterCard;
