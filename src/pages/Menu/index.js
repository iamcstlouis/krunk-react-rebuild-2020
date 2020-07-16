import React from 'react'
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'

import MainContent from './MainContent'

const index = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Krunk Burgers | Menu</title>
            </Helmet>

            <Container style={{ paddingBottom: '12rem' }}>
                <MainContent />
            </Container>
        </React.Fragment>
    )
}

export default index
