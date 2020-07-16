import React from 'react'

import MealsSeparator from '../../MealsSeparator'
import smoothiesFeatImage from '../../../../../../images/menu/shakes-n-smoothies/krunk-snickers-milkshake-1.jpg'
import menuTitle from '../../../../../../images/menu/shakes-n-smoothies/smoothies-menu-title.svg'
import MenuData from '../../../MenuData'

import './styles.scss'

const SmoothiesMenu = () => {
    return (

        <div className='smoothies-menu'>
            <MealsSeparator />
            <div className='smoothies-menu__menu-hdr'>
                <div className='smoothies-menu__content-wrapper'>
                    <img src={menuTitle} alt='Krunk Menu' className='smoothies-menu__menu-title' />
                </div>
            </div>

            <div className='smoothies-menu__main-content'>
                <div className='smoothies-menu__img-hdr-wrapper'>
                    <div className='smoothies-menu__img-wrapper'>
                        <img
                            src={smoothiesFeatImage}
                            alt='Krunks Smoothies'
                            className='smoothies-menu__featured-img'
                            data-aos='fade-left'
                            data-aos-delay='1200'
                        />
                    </div>

                    <div className='smoothies-menu__outer-hdr-wrapper'>
                        <div className='smoothies-menu__inner-hdr-wrapper'>
                            <div className='smoothies-menu__hdr-wrapper'>
                                <h2 className='smoothies-menu__hdr'>Flavours</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='smoothies-menu__flavours-list-section'>
                    <div className='smoothies-menu__flavours-hdr-desktop'>
                        <div className='smoothies-menu__desktop-hdr-wrapper'>
                            <h2 className='smoothies-menu__desktop-hdr' data-aos='fade-up' data-aos-delay='600'>Flavours</h2>
                        </div>
                    </div>

                    <ul className='smoothies-menu__flavours-list'>
                        {

                            MenuData.smoothies.map((smoothie) => {
                                return (
                                    <li
                                        className='smoothies-menu__flavours-list-item'
                                        key={smoothie.id}
                                        data-aos='fade-up'
                                        data-aos-delay='450'
                                    >
                                        <a
                                            href='https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP'
                                            rel='noopener noreferrer'
                                            target='_blank'
                                        >
                                            {smoothie.flavour}
                                            <p>{smoothie.smoothieDesc}</p>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SmoothiesMenu
