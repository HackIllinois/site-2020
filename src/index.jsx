import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from 'components/AuthenticatedRoute';
import Message from 'components/Message';
import PDF from 'components/PDF';
import NavBar from 'components/NavBar';

import Apply from 'scenes/Apply';
import Auth from 'scenes/Auth';
import Home from 'scenes/Home';
import MentorRegistration from 'scenes/MentorRegistration';
import QR from 'scenes/QR';
import RSVP from 'scenes/RSVP';
import Schedule from 'scenes/Schedule';
import Maps from 'scenes/Maps';
import Travel from 'scenes/Travel';
import Prizes from 'scenes/Prizes';
import Mentors from 'scenes/Mentors';
import Editor from 'scenes/Editor';

import 'index.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <AuthenticatedRoute path="/apply" component={Apply} />
      <Route path="/auth" component={Auth} />
      <AuthenticatedRoute path="/mentor-registration" component={MentorRegistration} />
      <AuthenticatedRoute path="/qr" component={QR} />
      <AuthenticatedRoute path="/rsvp" component={RSVP} />

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

      <Route path="/schedule" component={Schedule} />
      <Route path="/maps" component={Maps} />
      <Route path="/travel" component={Travel} />
      <Route path="/prizes" component={Prizes} />
      <Route path="/mentors" component={Mentors} />

      <Route path="/editor" component={Editor} />

      <Route component={() => <><NavBar /><Message title="404 Not Found" /></>} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
