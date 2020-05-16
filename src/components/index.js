import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { MyNotes } from './MyNotes';
import { Favorites } from './Favorites';
import { Layout } from './layout';

export const AppRouter = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/my-notes" component={MyNotes} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </Layout>
  </Router>
);
