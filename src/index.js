import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/home/home'
import Works from './pages/works/works'
import SingleWorks from './pages/singleWorks/singleWorks'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:works" component={Works} />
        <Route path="/:singleworks" component={SingleWorks} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
