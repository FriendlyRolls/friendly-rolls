
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/index.jsx'
import {render} from 'react-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage}/>
    </div>
  </Router>
)

render(<App/>, document.getElementById('app'));
