import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import DeliverooWidget from '../../../../components/DeliverooWidget'

import HeroSectionImage from '../../../../images/home/krunk-chicken-flamer-burger.jpg'

import './styles.scss'

const Hero = () => {
    return (
        <section className='hero-img'>
            <Container>
                <div className="content-wrapper">
                    <div className='featured-meal-deal' data-aos='fade-up'>
                        <div className='content-wrapper'>
                            <div className='content'>
                                <h1 className='meal-deals-hdr'>Meal Deals</h1>
                                <span>Meals served with regular fries and a soft drink</span>

                                <div className='featured-meal'>
                                    <img
                                        src={HeroSectionImage}
                                        alt='Krunks Chicken Flamer Burger'
                                    />
                                    <div className='featured-meal-info'>
                                        <h2 className='featured-meal-name'>Classic Chicken</h2>
                                        <p className='featured-meal-desc'>Cheese, pickles, home-made coleslaw & burger</p>
                                        <div className='view-more-btn'>
                                            <Link to='/krunk-burgers' exact className='view-more'>View More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <DeliverooWidget />
                </div>
            </Container>
        </section>
    )
}

export default Hero
