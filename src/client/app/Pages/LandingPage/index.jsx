import React from 'react';
import Button from '../../Components/Button/index.jsx'
import Modal from '../../Components/Modal/index.jsx'
import List from '../../Components/List/index.jsx'
import Item from '../../Components/Item/index.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './styles.less'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      userType: "",
      username: "",
      password: "",
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

  savetoDB(username, password) {
    console.log("THIS IS BEING CALLED")
    const url = '/api/login';
    const body = JSON.stringify({
      username: username,
      password: password,
    });

    fetch(url, {
      method: "POST",
      body: body,
    })
    .then(() => {
      console.log("Saved")
    })
  }

  render () {
    console.log(this.state);
    return (
      <div className='body'>
          <h1>Your adventure begins here</h1>
          <Button title={ "Dungeon Masters" } onClick={ this.openModal }  />
          <Modal isOpen={ this.state.isModalOpen } close={ this.closeModal } transitionName="modal-anim">
            <h3>Log In </h3>
            <div>
              <p>
                <input placeholder="email" onChange={event => this.setState({ email: event.target.value })}></input>
                <br></br>
                <input placeholder="password"  onChange={event => this.setState({ password: event.target.value })}></input>
                <br></br>
                  <Link to={`/campaignlist`}>
                    <button  onClick={ this.savetoDB(this.state.username,this.state.password) }>LogIn</button>
                  </Link>

              </p>
            </div>
            <button onClick={ this.closeModal }>Close Modal</button>
          </Modal>
          <Button title={ "Heroes Welcome" } />
      </div>
    );
  }
}

export default App;
