import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/home/home'
import Works from './pages/works/works'
import SingleWorks from './pages/singleWorks/singleWorks'
import Footer from './components/footer/footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:works" component={Works} />
        <Route exact path="/:works/:singleworks" component={SingleWorks} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
