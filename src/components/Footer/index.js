import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import menuBangImage from '../../images/global/icn_footer_menu_bang.svg'
import logo from '../../images/global/krunk-burgers-logo.png'

import './styles.scss'

const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <footer className='footer'>
            <Container>
                <div className='view-our-menu'>
                    <NavLink
                        to='/menu'
                        className='menu-link'
                        data-aos='fade-up'
                        data-aos-delay='50'
                    >View Our Menu
                    </NavLink>
                </div>
                <div className='footer-nav'>
                    <div className='content-wrapper'>
                        <div className='links'>
                            <NavLink to='/krunk-burgers' data-aos='fade-up' data-aos-delay='150'>Burgers</NavLink>
                            <span>
                                <img
                                    src={menuBangImage}
                                    alt='Footer nav separator'
                                    className='separator'
                                    data-aos='fade-up'
                                    data-aos-delay='250'
                                />
                            </span>
                            <NavLink to='/krunk-wings' data-aos='fade-up' data-aos-delay='350'>Wings</NavLink>
                            <span>
                                <img
                                    src={menuBangImage}
                                    alt='Footer nav separator'
                                    className='separator'
                                    data-aos='fade-up'
                                    data-aos-delay='450'
                                />
                            </span>
                            <NavLink to='/krunk-shakes' data-aos='fade-up' data-aos-delay='550'>Shakes</NavLink>
                            <span>
                                <img
                                    src={menuBangImage}
                                    alt='Footer nav separator'
                                    className='separator'
                                    data-aos='fade-up'
                                    data-aos-delay='650'
                                />
                            </span>
                            <NavLink
                                to='/krunk-desserts'
                                data-aos='fade-up'
                                data-aos-delay='750'
                            >Desserts</NavLink>
                        </div>
                    </div>
                </div>

                <div className='copyright-section'>
                    <div className='logo-wrapper'>
                        <img
                            src={logo}
                            alt='Krunks Burgers Logo'
                            className='footer-logo'
                        />
                    </div>
                    <p
                        className='copyright'
                    >copyright &copy; {getYear()} Krunk. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
