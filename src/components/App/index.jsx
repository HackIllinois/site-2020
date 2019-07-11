import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Auth from 'components/Auth';
import LandingPage from 'components/LandingPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/auth" component={Auth} />
      </BrowserRouter>
    );
  }
}

export default App;
