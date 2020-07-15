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
            <div className='menu-hdr'>
                <div className='content-wrapper'>
                    <img src={menuTitle} alt='Krunk Menu' className='menu-hdr-graphic' />
                </div>
            </div>

            <div className='main-content'>
                <div className='img-hdr-wrapper'>
                    <div className='img-wrapper'>
                        <img
                            src={smoothiesFeatImage}
                            alt='Krunks Smoothies'
                            className='featured-img'
                            data-aos='fade-left'
                            data-aos-delay='1200'
                        />
                    </div>

                    <div className='smoothies-hdr-wrapper'>
                        <div className='smoothies-flavours-hdr'>
                            <div className='hdr-wrapper'>
                                <h2>Flavours</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='smoothies-flavours-list'>
                    <div className='smoothies-flavours-hdr-mobile'>
                        <div className='hdr-wrapper'>
                            <h2 data-aos='fade-up' data-aos-delay='600'>Flavours</h2>
                        </div>
                    </div>

                    <ul id='smoothie-flavours'>
                        {

                            MenuData.smoothies.map((smoothie) => {
                                return (
                                    <li
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
