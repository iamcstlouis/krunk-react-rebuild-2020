import React from 'react'
import MainContent from './MainContent'
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Krunk Burgers | Welcome</title>
            </Helmet>

            <MainContent />
        </React.Fragment>
    )
}

export default Home
