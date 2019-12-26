import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Apply from 'components/Apply';
import Auth from 'components/Auth';
import Home from 'components/Home';
import Message from 'components/Message';
import PDF from 'components/PDF';
import Token from 'components/Token';
import QR from 'components/QR';
import AuthenticatedRoute from 'components/AuthenticatedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/auth" component={Auth} />
        <AuthenticatedRoute path="/apply" component={Apply} />
        <AuthenticatedRoute path="/token" component={Token} />
        <Route path="/qr" component={QR} />

        <Route
          exact
          path="/mentor"
          component={
            () => <PDF path="documents/mentorship.pdf" />
          }
        />
        <Route
          exact
          path="/sponsor"
          component={
            () => <PDF path="documents/sponsorship.pdf" />
          }
        />

        <Route component={
          () => <Message title="404 Not Found" />
        }
        />
      </Switch>
    </BrowserRouter>
  );
}
