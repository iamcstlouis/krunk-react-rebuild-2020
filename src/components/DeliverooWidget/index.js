import React from 'react'

import deliverooWidgetImage from '../../images/global/deliveroo-widget.png'

import './style.scss'

const DeliverooWidget = () => {
    return (
        <div className='deliveroo-widget'>
            <a
                href='https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP'
                target='_blank'
            >
                <div className='deliveroo-widget__content-wrapper'>
                    <img src={deliverooWidgetImage} alt='Deliveroo Widget' />
                </div>
            </a>
        </div>
    )
}

export default DeliverooWidget
