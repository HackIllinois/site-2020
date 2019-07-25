import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Apply from 'components/Apply';
import Auth from 'components/Auth';
import LandingPage from 'components/LandingPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <Route path="/apply" component={Apply} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
