import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout from '../components/index';
import HomeView from '../components/pages/home';

export default (store) => {
  return (
    <Route path='/' component={CoreLayout}>
      <IndexRoute component={HomeView} />
    </Route>
  );
};
