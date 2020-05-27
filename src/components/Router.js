import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MyNotes from './Note/MyNotes';
import Layout from './layout';
import Note from './Note/Note';

const AppRouter = () => (
  <>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/my-notes" component={MyNotes} />
          <Route exact path="/note/:noteId" component={Note} />
        </Switch>
      </Layout>
    </Router>
  </>
);

export default AppRouter;
