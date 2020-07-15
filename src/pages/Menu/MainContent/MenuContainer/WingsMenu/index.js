import React from 'react'

import wingsFeatImage from '../../../../../images/menu/wings/wings.jpg'
import MenuData from '../../MenuData'

import './styles.scss'

const WingsMenu = () => {
    return (
        <div className='wings-menu'>
            <div className='wings-menu__img-hdr-wrapper'>
                <div className='wings-menu__img-wrapper'>
                    <img
                        src={wingsFeatImage}
                        alt='Krunks Wings'
                        className='wings-menu__featured-img'
                        data-aos='fade-up'
                        data-aos-delay='1300'
                    />
                </div>

                <div className='wings-menu__outer-hdr-wrapper'>
                    <div className='wings-menu__inner-hdr-wrapper'>
                        <div className='wings-menu__hdr-wrapper'>
                            <h2 className='wings-menu__hdr' data-aos='fade-up' data-aos-delay='1450'>Flavours</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='wings-menu__flavours-list'>
                <ul className='wings-menu__flavours'>
                    {
                        MenuData.wings.map((wing) => {
                            return (
                                <li
                                    data-aos='fade-up'
                                    data-aos-delay='1450'
                                    key={wing.id}
                                >
                                    <a
                                        href='https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP'
                                        rel='noopener noreferrer'
                                        target='_blank'
                                        data-aos='fade-up'
                                        data-aos-delay='450'
                                    >
                                        {wing.flavour}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default WingsMenu
