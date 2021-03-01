import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

import Hero from './components/hero/hero'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contacts from './components/contacts/contacts'

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <About />
    <Projects />
    <Contacts />
  </React.StrictMode>,
  document.getElementById('root')
);
