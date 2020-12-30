import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/homeComponent.js';
import About from './components/aboutComponent'
import Work from './components/workComponent'
import Competition from './components/competitionComponent'
import Alumni from './components/alumniComponent'
import Team from './components/teamComponent.js'
import Sponsor from './components/sponsorComponent.js'
import Contact from './components/contactComponent'

function App() {
  return (
    <div>
      <Router>
      	<Switch>
      		<Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/competition" component={Competition} />
          <Route path="/alumni" component={Alumni} />
          <Route path='/team' component={Team} />
          <Route path='/sponsor' component={Sponsor} />
          <Route path="/contact" component={Contact} />
      	</Switch>
      </Router>
    </div>
  );
}

export default App;
