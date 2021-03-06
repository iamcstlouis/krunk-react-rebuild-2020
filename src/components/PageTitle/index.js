import React from 'react'

import './styles.scss'

const PageTitle = ({ title }) => {
    return (
        <div className='krunk-page-title' data-aos='fade-in'>
            <h1>{title}</h1>
        </div>
    )
}

export default PageTitle
