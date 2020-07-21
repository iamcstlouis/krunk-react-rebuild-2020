import React from 'react'

import deliverooWidgetImage from '../../images/global/deliveroo-widget.png'

import './style.scss'

const DeliverooWidget = ({ aosAnimationStyle, aosDelay }) => {
    return (
        <div className='deliveroo-widget' data-aos={aosAnimationStyle} data-aos-delay={aosDelay}>
            <a
                href='https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=CR02JJ&time=ASAP'
                rel='noopener noreferrer'
                target='_blank'
                className='deliveroo-widget__link'
            >
                <div className='deliveroo-widget__image-wrapper'>
                    <img src={deliverooWidgetImage} alt='Deliveroo Widget' className='deliveroo-widget__image' />
                </div>
            </a>
        </div>
    )
}

export default DeliverooWidget
