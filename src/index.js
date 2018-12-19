import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
