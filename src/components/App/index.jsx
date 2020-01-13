import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Apply from 'components/Apply';
import Auth from 'components/Auth';
import Error from 'components/Error';
import Home from 'components/Home';
import PDF from 'components/PDF';
import Token from 'components/Token';
import Dashboard from 'components/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/apply" component={Apply} />
          <Route path="/auth" component={Auth} />
          <Route path="/token" component={Token} />
          <Route path="/dashboard" component={Dashboard} />

          <Route exact path="/mentor" component={
            () => <PDF path="documents/mentorship.pdf" />
          } />
          <Route exact path="/sponsor" component={
            () => <PDF path="documents/sponsorship.pdf" />
          } />

          <Route component={
            () => <Error message="404 Not Found" />
          } />
        </Switch>
      </BrowserRouter>
    );
  }
}
