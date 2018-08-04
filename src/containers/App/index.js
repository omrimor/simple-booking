/**
 *
 * App
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';

import Accomodations from 'containers/Accomodations';
import SingleAccomodation from 'containers/SingleAccomodation';

const Defaultlayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
        <Component {...matchProps} />
    )} />
  )
};

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Defaultlayout exact path='/' component={Accomodations} />
          <Defaultlayout path='/:id' component={SingleAccomodation} />
        </Switch>
      </div>
    </Router>
  );
}
