import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/homeComponent.js';
import Team from './components/team.js'

function App() {
  return (
    <div>
      <Router>
      	<Switch>
      		<Route exact path="/" component={Home} />
          <Route path='/team' component={Team} />
      	</Switch>
      </Router>
    </div>
  );
}

export default App;
