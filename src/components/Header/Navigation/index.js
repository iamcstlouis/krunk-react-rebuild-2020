import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import logo from '../../../images/global/krunk-burgers-logo.png'

import './styles.scss'


const Navigation = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='top-nav'>
            <Container>
                <div className='logo-wrapper'>
                    <Link to='/' exact className='top-nav-link'>
                        <img
                            src={logo}
                            alt='Krunks Burgers Logo'
                            className='top-nav-logo'
                        />
                    </Link>
                </div>

                {/* <!-- ***** Hamburger Toggler ***** --> */}
                <div className='hamburger-btn' onClick={() => { setOpen(!open) }}>
                    <div className={`hamburger-toggler ${open ? 'open' : ''}`}>
                        <div className={`bar bar__top ${open ? 'open' : ''}`}></div>
                        <div className={`bar bar__mid ${open ? 'open' : ''}`}></div>
                        <div className={`bar bar__btm ${open ? 'open' : ''}`}></div>
                    </div>
                </div>

                {/* <!-- ***** Mobile Menu ***** --> */}

                <div id='mobile-menu' className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden='true'>
                    <div className='mobile-menu-links'>
                        <NavLink to='/' exact>Home</NavLink>
                        <NavLink to='/krunk-burgers' exact>Menu</NavLink>
                        <NavLink to='/about' exact>About</NavLink>
                        <NavLink to='/contact' exact>Contact</NavLink>
                    </div>

                    <div className='socials'>
                        <a href='https://www.facebook.com/Krunk-Burgers-442165483212032/' rel="noopener noreferrer" target='_blank'>
                            <i className='fab fa-facebook'></i>
                        </a>

                        <a href='https://www.instagram.com/krunkburgers/?hl=en' rel="noopener noreferrer" target='_blank'>
                            <i className='fab fa-instagram'></i>
                        </a>
                    </div>

                    {/* <DeliverooWidget /> */}
                </div>

                {/* <!-- Desktop Links-- > */}

                <div className='desktop-links'>
                    <ul className='menu-links'>
                        <li>
                            <router-link to='/' exact className='topNavBtn'>Home</router-link>
                        </li>
                        <li>
                            <router-link to='/krunk-burgers' exact className='topNavBtn'>Menu</router-link>
                        </li>
                        <li>
                            <router-link to='/about' exact className='topNavBtn'>About</router-link>
                        </li>
                        <li>
                            <router-link to='/contact' exact className='topNavBtn'>Contact</router-link>
                        </li>
                    </ul>

                    <div className='socials'>
                        <a href='https://www.facebook.com/Krunk-Burgers-442165483212032/' rel="noopener noreferrer" target='_blank'>
                            <i className='fab fa-facebook'></i>
                        </a>

                        <a href='https://www.instagram.com/krunkburgers/?hl=en' rel="noopener noreferrer" target='_blank'>
                            <i className='fab fa-instagram'></i>
                        </a>
                    </div>
                </div>
            </Container >
        </nav >
    )
}

export default Navigation