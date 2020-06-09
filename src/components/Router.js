import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './core/Header';
import Home from './core/Home';
import Note from './Note/Note';
import AuthorNotes from './Note/AuthorNotes';
import Favorites from './Note/Favorites';
import Signup from './auth/Signup';

const AppRouter = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/author-notes" component={AuthorNotes} />
        <Route exact path="/note/:noteId" component={Note} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/auth/signup" component={Signup} />
      </Switch>
    </Router>
  </>
);

export default AppRouter;
