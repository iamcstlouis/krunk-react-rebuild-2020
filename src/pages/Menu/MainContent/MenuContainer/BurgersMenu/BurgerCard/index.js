import React from 'react'

import './styles.scss'

const BurgerCard = ({ burgerImage, burgerImageAlt, burgerName, burgerDesc }) => {
    return (
        <div className='burger-card' data-aos='fade-up' data-aos-delay='1200'>
            <div className='content-wrapper'>
                <a
                    href='https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=CR02JJ&time=ASAP'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <img
                        src={burgerImage}
                        alt={burgerImageAlt}
                        data-aos='fade-up'
                        data-aos-delay='1300'
                    />
                    <div className='meal-info'>
                        <h2>{burgerName}</h2>
                        <p className='meal-desc'>{burgerDesc}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default BurgerCard
