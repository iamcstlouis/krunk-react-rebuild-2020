import React from 'react'

import shakesFeatImage from '../../../../../../images/menu/shakes-n-smoothies/krunk-snickers-milkshake.jpg'
import MenuData from '../../../MenuData'

import './styles.scss'

const ShakesMenu = () => {
    return (
        <React.Fragment>
            <div className='shakes-menu'>
                <div className='shakes-menu__img-hdr-wrapper'>
                    <div className='shakes-menu__img-wrapper'>
                        <img
                            src={shakesFeatImage}
                            alt='Krunks Shakes'
                            className='shakes-menu__featured-img'
                            data-aos='fade-right'
                            data-aos-delay='1300'
                        />
                    </div>

                    <div className='shakes-menu__outer-hdr-wrapper'>
                        <div className='shakes-menu__inner-hdr-wrapper'>
                            <div className='shakes-menu__hdr-wrapper'>
                                <h2 className='shakes-menu__hdr'>Flavours</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='shakes-menu__flavours-list'>
                    <div className='shakes-menu__flavours-hdr-desktop'>
                        <div className='shakes-menu__hdr-wrapper'>
                            <h2 className='shakes-menu__hdr' data-aos='fade-up' data-aos-delay='1200'>Flavours</h2>
                        </div>
                    </div>

                    <ul className='shakes-menu__shakes-flavours-list'>
                        {
                            MenuData.shakes.map((flavour) => {
                                return (
                                    <li
                                        className='shakes-menu__list-item'
                                        key={flavour.id}
                                        data-aos='fade-up-left'
                                        data-aos-delay='450'
                                    >
                                        <a
                                            href='https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='shakes-menu__link'
                                        >{flavour.flavour}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShakesMenu
