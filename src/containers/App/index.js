/**
 *
 * App
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router, } from 'react-router-dom';

import Accomodations from 'containers/Accomodations';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path='/' render={() => {
          return <Redirect to='/accomodations' />
          }} />
          <Route exact path="/accomodations" component={Accomodations} />
        </Switch>
      </div>
    </Router>
  );
}
