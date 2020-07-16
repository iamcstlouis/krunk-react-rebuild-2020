import React from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import contactMainImage from '../../images/contact/contact-krunk.jpg'

import './styles.scss'

const Contact = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Contact Krunk</title>
            </Helmet>

            <div className='contact-krunk'>
                <Container style={{ paddingBottom: '12rem' }}>
                    <div className='content-wrapper'>
                        <div className='contact-hdr-wrapper'>
                            <div className='contact-hdr'>
                                <h1 data-aos='fade-down' data-aos-delay='50'>Contact</h1>
                            </div>
                        </div>

                        <div className='contact-main'>
                            <div className='content-wrapper'>
                                <div className='img-wrapper'>
                                    <img
                                        src={contactMainImage}
                                        alt='Krunk on Site'
                                        data-aos='fade-up'
                                        data-aos-delay='200'
                                    />
                                </div>

                                <div className='main-copy'>
                                    <div className='hdr-wrapper' data-aos='fade-up' data-aos-delay='500'>
                                        <h2>We'd love to hear from you!</h2>
                                    </div>

                                    <p className='contact-excerpt' data-aos='fade-left' data-aos-delay='700'>
                                        Pop in for something to eat, or
                                        <a
                                            href='https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP'
                                            rel='noopener noreferrer'
                                            target='_blank'
                                        > order</a> and have your meal delivered straight to your door!
                                </p>

                                    <div className='contact-details'>
                                        <p className='contact-no' data-aos='fade-left' data-aos-delay='800'>020 8684 1587</p>
                                        <p className='address' data-aos='fade-up' data-aos-delay='900'>
                                            79 Whitehorse,
                                        <br />London,
                                        <br />CR02JJ
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Contact
