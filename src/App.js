import React from 'react';

import Header from './components/Header'
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';

import Home from './pages/Home'

import './assets/scss/reset.scss';
import './assets/scss/base.scss';


function App() {
  return (
    <React.Fragment>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
