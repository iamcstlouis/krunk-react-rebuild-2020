import React from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

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
                        <div className='about-krunk__about-hdr'>
                            <h1>About</h1>
                        </div>

                        <div className='about-krunk__about-main-copy' data-aos='fade-up' data-aos-delay='200'>
                            <div className='about-krunk__copy-wrapper'>
                                <h2>In the Krunk kitchen...</h2>
                                <p>Duis metus ex, malesuada at tempus ut, laoreet sit amet orci. Phasellus lobortis nibh et sapien facilisis malesuada. Phasellus euismod eros at elit euismod, eget blandit tortor pretium. Vivamus sit amet mauris eros. Nam eget lacus vitae purus iaculis dictum sit amet eget velit. Sed vel rutrum leo. Sed vel fermentum lacus, at bibendum metus. Cras tristique ac urna ut egestas. Nam mattis sit amet diam vel tempor. Pellentesque at elit pharetra, tempor nulla eget, blandit sem. Morbi sollicitudin mauris massa, ac tincidunt ipsum bibendum nec. Etiam in ipsum non tortor interdum bibendum. Donec dolor arcu, ullamcorper at tincidunt at, auctor sit amet ipsum.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default About
