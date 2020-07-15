import React from 'react'

import MainContent from './MainContent'
import { Container } from 'react-bootstrap'

const index = () => {
    return (
        <React.Fragment>
            <Container style={{ paddingBottom: '12rem' }}>
                <MainContent />
            </Container>
        </React.Fragment>
    )
}

export default index
