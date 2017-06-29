import React from 'react';
import Button from '../../Components/Button/index.jsx'
import Modal from '../../Components/Modal/index.jsx'
import List from '../../Components/List/index.jsx'
import Item from '../../Components/Item/index.jsx'
import './styles.less'


  const data = {
    name: ["Test GARDER", 'DRAGOON', 'Heimdaill','Katie the Brave', 'Abtin the Magnificent', 'Charlie the shithead'],
    id: 5
  }

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      userType: "",
      loggedIn: false,
      isModalOpen: false,
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getInitialState() {
    return { isModalOpen: false};
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }



  render () {
    return (
      <div className='Header'>
          <h1>Your adventure begins here</h1>
          <Button title={ "Dungeon Masters" } onClick={ this.openModal }  />
          <Modal isOpen={ this.state.isModalOpen } close={ this.closeModal } transitionName="modal-anim">
            <h3>Log In </h3>
            <div className="body">
              <p>
                <button>Log In With Facebook</button>
              </p>
            </div>
            <button onClick={ this.closeModal }>Close Modal</button>
          </Modal>
          <Button title={ "Heroes Welcome" } />
          <List listItem={ data } />
      </div>
    );
  }
}

export default App;
