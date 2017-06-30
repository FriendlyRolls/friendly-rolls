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
      characterList: [],
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
          <h1>Choose your campaign</h1>
          <Modal isOpen={ this.state.isModalOpen } close={ this.closeModal } transitionName="modal-anim">
            <h3>Choose your story</h3>
            <div className="body">
              <p>
                <button>Submit Campaign</button>
              </p>
            </div>
            <button onClick={ this.closeModal }>Close Modal</button>
          </Modal>
          <List listItem={ data } />
      </div>
    );
  }
}

export default App;
