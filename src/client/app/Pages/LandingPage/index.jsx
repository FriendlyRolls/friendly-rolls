import React from 'react';
import Button from '../../Components/Button/index.jsx'
import Modal from '../../Components/Modal/index.jsx'
import List from '../../Components/List/index.jsx'
import Item from '../../Components/Item/index.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './styles.less'
import axios from 'axios'
const inputStyle = {
  display: "block"
};
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: "",
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
      if(!localStorage.getItem('token')) {
        localStorage.setItem('token', response.data.token);
        sessionStorage.setItem('token', response.data.token);
        console.log('token stored!');
      }
      console.log('token already present!');
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
          <header className="landing-page-title-container">
            <h1>FriendlyRolls</h1>
            <h3>Your adventure begins here</h3>
          </header>
          <div className="landing-page-button-container">
            <Button className="dungeon-button" title={ "Dungeon Masters" } onClick={ this.openModal } />
            <Button className="heroes-button" title={ "Heroes Welcome" } onClick={ this.openModal } />
          </div>
          <Modal isOpen={ this.state.isModalOpen } close={ this.closeModal } transitionName="modal-anim">
            <h3>Log In </h3>
            <form className="form-group">
              <label htmlFor="username"></label>
              <input type="text" className="form-control" style={ inputStyle } placeholder="username" onChange={event => this.setState({ username: event.target.value })}></input>
              <br></br>
              {/* <label htmlFor="password"></label> */}
              <input type="password" className="form-control" style={ inputStyle } placeholder="password"  onChange={event => this.setState({ password: event.target.value })}></input>
                <br></br>
                <Link to={`/campaignlist`}>
                  <button className="btn btn-primary" onClick={ this.requestAuth }>LogIn</button>
                </Link>
            </form>
            <button onClick={ this.closeModal }>Close Modal</button>
          </Modal>
      </div>
    );
  }
}
export default App;
