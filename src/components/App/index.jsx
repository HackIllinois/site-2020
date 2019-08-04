import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Apply from 'components/Apply';
import Auth from 'components/Auth';
import Error from 'components/Error';
import LandingPage from 'components/LandingPage';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/apply" component={Apply} />
          <Route path="/auth" component={Auth} />
          <Route component={() => <Error message="404 Not Found" />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
