import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './navigation';
import Home from './core/Home';
import Note from './note/Note';
import AuthorNotes from './note/AuthorNotes';
import MyNotes from './note/MyNotes';
import Auth from './auth';
import Authors from './author/Authors';
import NewNote from './note/NewNote';

import ProtectedRoute from './shared/ProtectedRoute';

const AppRouter = () => {
  const [isNavBarVisible, toogleNavBarVisibility] = useState(true);
  return (
    <Router>
      {isNavBarVisible && (
        <NavBar toogleNavBarVisibility={toogleNavBarVisibility} />
      )}
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              isNavBarVisible={isNavBarVisible}
              toogleNavBarVisibility={toogleNavBarVisibility}
            />
          )}
        />
        <Route
          path={['/auth/signup', '/auth/signin']}
          render={(routeProps) => (
            <Auth
              isNavBarVisible={isNavBarVisible}
              toogleNavBarVisibility={toogleNavBarVisibility}
              {...routeProps}
            />
          )}
        />
        <Route exact path="/authors/:authorId/notes" component={AuthorNotes} />
        <ProtectedRoute exact path="/notes/:noteId" component={Note} />
        <ProtectedRoute exact path="/my-notes" component={MyNotes} />
        <Route exact path="/authors" component={Authors} />
        <Route exact path="/new-note" component={NewNote} />
      </Switch>
    </Router>
  );
};
export default AppRouter;
