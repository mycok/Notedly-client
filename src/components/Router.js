import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './navigation';
import Home from './core/Home';
import Note from './Note/Note';
import AuthorNotes from './Note/AuthorNotes';
import Favorites from './Note/Favorites';
import Auth from './auth';

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
          path={['/auth/signup', '/auth/login']}
          render={(routeProps) => (
            <Auth
              isNavBarVisible={isNavBarVisible}
              toogleNavBarVisibility={toogleNavBarVisibility}
              {...routeProps}
            />
          )}
        />
        <Route exact path="/authors/:authorId/notes" component={AuthorNotes} />
        <Route exact path="/notes/:noteId" component={Note} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  );
};
export default AppRouter;
