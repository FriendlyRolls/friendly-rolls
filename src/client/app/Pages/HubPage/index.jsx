import React, { Component } from 'react';
import CardList from '../../Components/CardList/index.jsx'
import Card from '../../Components/Card/index.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

const data = {
  name: ["Test GARDER", 'DRAGOON', 'Heimdaill','Katie the Brave', 'Abtin the Magnificent', 'Charlie the shithead'],
  campaigns: ['A tale of time', 'The Dragon\'s Keep', 'The Dark Winter', 'The fall of the 7 kingdoms', 'The Necromancer'],
  id: 5
}


class Hub extends Component {
  render () {
    return (
      <div className='body'>
          <h1>Your adventure begins here</h1>
            <CardList userType={ 'Campaigns' } cardItem={ data.name } />
      </div>
    );
  }
}

export default Hub;
