import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';

const App = () => (
  <Switch>
    <Route path="/resume" exact component={LandingPage} />
  </Switch>
);

export default App;
