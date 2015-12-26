import React, {Component} from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Create from './containers/Create';

export default (
  <Route path="/create" component={Create} />
);
