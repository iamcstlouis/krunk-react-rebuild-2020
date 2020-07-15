import React from 'react';

import Header from './components/Header'
import { Route, Switch, useLocation } from 'react-router-dom';

import Home from './pages/Home'
import ComicQuote from './components/ComicQuote';
import Footer from './components/Footer';

import './assets/scss/base.scss';
import './assets/scss/reset.scss';

function App() {

  const location = useLocation();
  const pathname = location.pathname;
  const menuPage = pathname === '/menu'

  return (
    <React.Fragment>
      <Header />

      <main className='main'>

        {menuPage ? <ComicQuote /> : null}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='menu' component={Home} />
        </Switch>
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;
