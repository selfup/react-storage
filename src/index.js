import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashhistory } from 'react-router'
import App from './App';

ReactDOM.render(
  <Router history={hashhistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>,
  document.getElementById('root')
)
