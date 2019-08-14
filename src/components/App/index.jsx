import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Auth from 'components/Auth';
import LandingPage from 'components/LandingPage';
import PDF from 'components/PDF';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/auth" component={Auth} />

        <Route exact path="/mentor" component={
          () => <PDF path="documents/mentorship.pdf" />
        } />
        <Route exact path="/sponsor" component={
          () => <PDF path="documents/sponsorship.pdf" />
        } />
      </BrowserRouter>
    );
  }
}

export default App;
