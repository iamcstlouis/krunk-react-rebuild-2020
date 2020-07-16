import React from 'react'

import dessertsFeatImage from '../../../../../images/menu/desserts/dessert-1.jpg'
import MenuData from '../../MenuData'

import './styles.scss'

const DessertsMenu = () => {
    return (
        <div className='desserts-menu'>
            <div className='desserts-menu__img-hdr-wrapper'>
                <div className='desserts-menu__img-wrapper'>
                    <img
                        src={dessertsFeatImage}
                        alt='Krunks Desserts'
                        className='desserts-menu__featured-img'
                        data-aos='fade-up'
                        data-aos-delay='1200'
                    />
                </div>

                <div className='desserts-menu__outer-hdr-wrapper'>
                    <div className='desserts-menu__inner-hdr-wrapper'>
                        <div className='desserts-menu__hdr-wrapper'>
                            <h2 className='desserts-menu__hdr' data-aos='fade-up' data-aos-delay='600'>Flavours</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='desserts-menu__flavours-wrapper'>
                <ul className='desserts-menu__flavours-list'>

                    {
                        MenuData.desserts.map((dessert) => {
                            return (
                                <li
                                    className='desserts-menu__flavours-list-item'
                                    key={dessert.id}
                                    data-aos='fade-up'
                                    data-aos-delay='450'
                                >
                                    <a
                                        href='https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=CR02JJ&time=ASAP'
                                        rel='noopener noreferrer'
                                        target='_blank'
                                    >{dessert.flavour}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default DessertsMenu
