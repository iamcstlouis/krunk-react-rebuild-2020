import React from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import PageTitle from '../../components/PageTitle'

import './styles.scss'

const About = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>About Krunk</title>
            </Helmet>

            <div className='about-krunk'>
                <Container style={{ paddingBottom: '12rem' }}>
                    <div className='about-krunk__content-wrapper'>

                        <PageTitle title={'About'} />

                        <div className='about-krunk__about-main-copy' data-aos='fade-up' data-aos-delay='200'>
                            <div className='about-krunk__copy-wrapper'>
                                <h2>In the Krunk kitchen...</h2>
                                <p>
                                    Are you in the mood for the perfect burger? Krunk Burgers has what you’re looking for, at a price you can afford. You’ve never tasted anything quite like Krunk's!

                                    No matter what you’re in the mood for, you’ll find it at our burger shop. From mouthwatering burgers to our famous chilli fries made with homemade chili, you’re sure to find something to please your taste buds. You’ll find nothing but fast, friendly service at our burger shop, and the food is always fresh. We don’t make it until you order it. Choose to dine inside our quaint burger shop, or opt for outside seating for a breath of fresh air while you enjoy your meal.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default About
