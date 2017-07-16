import React, { Component } from 'react';
import CardList from '../../Components/CardList/index.jsx'
import Card from '../../Components/Card/index.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './styles.less'

const data = {
  name: ['Heimdaill','Katie the Brave', 'Abtin the Magi', 'Professor X'],
  img: [
    "https://wiki.guildwars2.com/images/thumb/5/56/Warrior_04_concept_art.png/350px-Warrior_04_concept_art.png",
    "http://jonvilma.com/images/warrior-1.jpg",
    "http://wallpapercave.com/wp/fYwzMti.jpg",
    "https://www.walldevil.com/wallpapers/a76/death-knight-world-of-warcraft-wow.jpg"
  ],
  campaigns: ['A tale of time', 'The Dragon\'s Keep', 'The Dark Winter', 'The fall of the 7 kingdoms', 'The Necromancer'],
  id: 5,
  dmMessage: "Gameboard"
}


class Hub extends Component {
  render () {
    return (
      <div className='body'>
          <h1 className='dmMessage'>{data.dmMessage}</h1>
            <CardList userType={ 'Players' } cardItem={ data } />
      </div>
    );
  }
}

export default Hub;
