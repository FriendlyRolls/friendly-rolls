import React from 'react';
import Button from '../../Components/Button/index.jsx'
import Modal from '../../Components/Modal/index.jsx'
import List from '../../Components/List/index.jsx'
import Item from '../../Components/Item/index.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './styles.less'
  const data = {
    name: ["Test GARDER", 'DRAGOON', 'Heimdaill','Katie the Brave', 'Abtin the Magnificent', 'Charlie the shithead'],
    campaigns: ['A tale of time', 'The Dragon\'s Keep', 'The Dark Winter', 'The fall of the 7 kingdoms', 'The Necromancer'],
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
          <h1 className="campaign-page-title">Choose your campaign</h1>
          <Modal isOpen={ this.state.isModalOpen } close={ this.closeModal } transitionName="modal-anim">
            <h2>Start your story</h2>
            <div className="body">
              <p>
                <h3>Title</h3>
                <input placeholder='Campaign Title'></input>
                <br />
                <button><Link to={'/storypage'}>Submit Campaign</Link></button>
              </p>
            </div>
            <button onClick={ this.closeModal }>Close Modal</button>
          </Modal>
          <Link to={'/hub'}><List userType={ 'Campaigns' } listItem={ data.campaigns } /></Link>
          <Button title={ "Create a new campaign" } onClick={ this.openModal }  />
      </div>
    );
  }
}
export default App;
