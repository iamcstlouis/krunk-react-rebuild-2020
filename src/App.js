import React from 'react';

import Header from './components/Header'
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './pages/Home'
import Menu from './pages/Menu';
import ComicQuote from './components/ComicQuote';
import DeliverooWidget from './components/DeliverooWidget';
import Footer from './components/Footer';

import './assets/scss/base.scss';
import './assets/scss/reset.scss';

function App() {

  const location = useLocation();
  const pathname = location.pathname;
  const menuPage = pathname === '/menu'
  const menuBurgerPage = pathname === '/menu/krunk-burgers'
  const menuWingsPage = pathname === '/menu/krunk-wings'
  const menuShakesPage = pathname === '/menu/krunk-shakes-n-smoothies'
  const menuDessertsPage = pathname === '/menu/krunk-desserts'
  const homePage = pathname === '/'

  const showComicQuote = () => {
    if (menuPage) {
      return <ComicQuote />
    } else if (menuBurgerPage) {
      return <ComicQuote />
    } else if (menuWingsPage) {
      return <ComicQuote />
    } else if (menuShakesPage) {
      return <ComicQuote />
    } else if (menuDessertsPage) {
      return <ComicQuote />
    } else { return null }
  }

  return (
    <React.Fragment>
      <Header />

      <main className='main'>
        <div className='top-section-wrapper'>
          <Container>
            <div className="content-wrapper">
              {showComicQuote()}
              {!homePage ? <DeliverooWidget /> : null}
            </div>
          </Container>
        </div>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/menu' component={Menu} />
          </Switch>
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;
