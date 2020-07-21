import React, { useEffect } from 'react';

import Header from './components/Header'
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import ComicQuote from './components/ComicQuote';
import DeliverooWidget from './components/DeliverooWidget';
import Home from './pages/Home'
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

import AOS from 'aos'
import 'aos/dist/aos.css'

import './assets/scss/base.scss';
import './assets/scss/reset.scss';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1800,
      delay: 500,
      once: true
    })
  }, []);

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
              {!homePage ? <DeliverooWidget aosAnimationStyle='fade-in' aosDelay='800' /> : null}
            </div>
          </Container>
        </div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;
