import React from 'react';

import Header from './components/Header'
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Footer from './components/Footer';

import './assets/scss/reset.scss';
import './assets/scss/base.scss';


function App() {
  return (
    <React.Fragment>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>

      <Footer />
    </React.Fragment>
  );
}

export default App;
