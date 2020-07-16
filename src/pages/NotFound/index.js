import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className="not-found__msg">
                <span className='not-found__msg--404-graphic'>404</span>
                <h1 className='not-found__msg--hdr' data-aos='zoom-in' data-aos-delay='200'>
                    <span className='not-found__msg--accent'>Oops!</span> It appears you're lost.
                </h1>
                <p className='not-found__msg--sub' data-aos='zoom-in' data-aos-delay='400'>This page does not exist.</p>

                <div className='not-found__home-btn' data-aos='zoom-in'>
                    <Link exact to='/' className='not-found__link'>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
