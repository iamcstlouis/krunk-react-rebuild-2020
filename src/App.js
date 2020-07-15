import React from 'react';

import Header from './components/Header'
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './pages/Home'
import ComicQuote from './components/ComicQuote';
import DeliverooWidget from './components/DeliverooWidget';
import Footer from './components/Footer';

import './assets/scss/base.scss';
import './assets/scss/reset.scss';

function App() {

  const location = useLocation();
  const pathname = location.pathname;
  const menuPage = pathname === '/menu'
  const HomePage = pathname === '/'

  return (
    <React.Fragment>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />

        <main className='main'>
          <div className='top-section-wrapper'>
            <Container>
              <div className="content-wrapper">
                {menuPage ? <ComicQuote /> : null}
                {!HomePage ? <DeliverooWidget /> : null}
              </div>
            </Container>
          </div>
          <Route path='menu' component={Home} />
        </main>
      </Switch>

      <Footer />
    </React.Fragment>
  );
}

export default App;
