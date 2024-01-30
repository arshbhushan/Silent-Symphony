import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './fingerSpelling/components/styles.css';
import Users from './user/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import NewLearning from './learnings/pages/NewLearning';

import UserLearnings from './learnings/pages/userLearnings';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/learnings" exact>
            <UserLearnings />
          </Route>
          {/* Uncomment the following route if needed */}
          {/* <Route path="/finger-spelling" exact>
            <FingerSpellingComponent />
          </Route> */}
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/learnings/new" exact>
            <NewLearning/>
          </Route>
          {/* Add more routes as needed */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
