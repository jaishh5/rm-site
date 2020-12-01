import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/homeComponent.js';
import About from './components/aboutComponent'
import Contact from './components/contactComponent'
import Team from './components/team.js'

function App() {
  return (
    <div>
      <Router>
      	<Switch>
      		<Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path='/team' component={Team} />
      	</Switch>
      </Router>
    </div>
  );
}

export default App;
