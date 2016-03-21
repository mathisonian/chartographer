import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/index';
import Home from './components/pages/home';

export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={Home} />
  </Route>
);
