import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MyNotes from './Note/MyNotes';
import Layout from './layout';

const AppRouter = () => (
  <>
    <Router>
      <Layout>
        <Switch>
          <Route path="/my-notes" component={MyNotes} />
        </Switch>
      </Layout>
    </Router>
  </>
);

export default AppRouter;
