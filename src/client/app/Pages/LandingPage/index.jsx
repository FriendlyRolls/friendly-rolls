import React from 'react';
import Button from '../../Components/Button/index.jsx'
import Modal from '../../Components/Modal/index.jsx'
import List from '../../Components/List/index.jsx'
import Item from '../../Components/Item/index.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './styles.less'
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      username: "Abtin",
      password: "DMaster",
      usertype: "",
      loggedIn: false,
      isModalOpen: false,
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.requestAuth = this.requestAuth.bind(this);
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

  requestAuth() {
    console.log("requsting token, please wait...");
    axios({
      method: 'post',
      url: 'auth/signin',
      data: {
        username: this.state.username,
        password: this.state.password,
      }
    })
    .then(function (response) {
      console.log('success, auth verified!');
      // console.log(response);
      localStorage.setItem('token', response.data.token);
      sessionStorage.setItem('token', response.data.token);
      // console.log('jsonwebtoken: ', sessionStorage.getItem('token'));
    })
    .catch(function (error) {
      console.log(error);
    });
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
                <input placeholder="username" onChange={event => this.setState({ username: event.target.value })}></input>
                <br></br>
                <input placeholder="password"  onChange={event => this.setState({ password: event.target.value })}></input>
                <br></br>
                  <Link to={`/campaignlist`}>
                    <button onClick={ this.requestAuth }>LogIn</button>
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
