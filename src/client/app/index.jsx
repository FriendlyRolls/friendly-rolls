import React from 'react';
import {render} from 'react-dom';
import  Button from './Components/Button/index.jsx'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      userType: "",
      loggedIn: false,
    }
  }


  render () {
    return (
    <div className='Header'>
        <h1>Your adventure begins here</h1>
        <Button title={ "Dungeon Masters" }  />
        <Button title={ "Heroes Welcome" } />
    </div>
  );
  }
}

render(<App/>, document.getElementById('app'));
