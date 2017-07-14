import React, { Component } from 'react';
import CardList from '../../Components/CardList/index.jsx'
import Card from '../../Components/Card/index.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './styles.less'

const data = {
  name: ['Heimdaill','Katie the Brave', 'Abtin the Magi', 'Professor X'],
  campaigns: ['A tale of time', 'The Dragon\'s Keep', 'The Dark Winter', 'The fall of the 7 kingdoms', 'The Necromancer'],
  id: 5,
  dmMessage: "Gameboard"
}


class Hub extends Component {
  render () {
    return (
      <div className='body'>
          <h1 className='dmMessage'>{data.dmMessage}</h1>
            <CardList userType={ 'Players' } cardItem={ data.name } />
      </div>
    );
  }
}

export default Hub;
