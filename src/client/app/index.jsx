import React from 'react';
import {render} from 'react-dom';
import Button from './Components/Button/index.jsx'
import Modal from './Components/Modal/index.jsx'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      userType: "",
      loggedIn: false,
    }
  }

  getInitialState() {
    return { isModalOpen: false};
  }

  openModal() {
    console.log("BUTTON")
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render () {
    return (
      <div className='Header'>
          <h1>Your adventure begins here</h1>
          <Button title={ "Dungeon Masters" } onClick={ this.openModal() }  />
          <Modal isOpen={ this.state.isModalOpen } transitionName="modal-anim">
            <h3>Create Account</h3>
            <div className="body">
              <p>The body</p>
            </div>
            <button onClick={ this.closeModal }>Close Modal</button>
          </Modal>
          <Button title={ "Heroes Welcome" } />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
