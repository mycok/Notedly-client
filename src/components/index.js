import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { MyNotes } from './MyNotes';
import { Favorites } from './Favorites';

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/my-notes" component={MyNotes} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  </Router>
);
