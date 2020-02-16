import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './components/app/App';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/articles" />} />
      <Route path="/articles" component={App} />
      {/* <Route path="/news/:id" component={App} /> */}
    </Switch>
  </Router>
);
