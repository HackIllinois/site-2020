import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from 'components/AuthenticatedRoute';
import Message from 'components/Message';
import PDF from 'components/PDF';

import Apply from 'scenes/Apply';
import Auth from 'scenes/Auth';
import Home from 'scenes/Home';
import MentorRSVP from 'scenes/MentorRSVP';
import QR from 'scenes/QR';

import 'index.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <AuthenticatedRoute path="/apply" component={Apply} />
      <Route path="/auth" component={Auth} />
      <AuthenticatedRoute path="/mentor-rsvp" component={MentorRSVP} />
      <AuthenticatedRoute path="/qr" component={QR} />

      <Route
        exact
        path="/mentor"
        component={() => <PDF path="documents/mentorship.pdf" />}
      />
      <Route
        exact
        path="/sponsor"
        component={() => <PDF path="documents/sponsorship.pdf" />}
      />

      <Route component={() => <Message title="404 Not Found" />} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
