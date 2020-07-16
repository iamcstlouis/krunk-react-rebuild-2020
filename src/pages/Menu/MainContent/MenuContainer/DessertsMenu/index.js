import React from 'react'

import dessertsFeatImage from '../../../../../images/menu/desserts/dessert-1.jpg'
import MenuData from '../../MenuData'

import './styles.scss'

const DessertsMenu = () => {
    return (
        <div class="main-content">
            <div class="img-hdr-wrapper">
                <div class="img-wrapper">
                    <img
                        src={dessertsFeatImage}
                        alt="Krunks Desserts"
                        class="featured-img"
                        data-aos="fade-up"
                        data-aos-delay="1200"
                    />
                </div>

                <div class="desserts-hdr-wrapper">
                    <div class="desserts-flavours-hdr">
                        <div class="hdr-wrapper">
                            <h2 data-aos="fade-up" data-aos-delay="600">Flavours</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="desserts-flavours-list">
                <ul id="desserts-flavours">

                    {
                        MenuData.desserts.map((dessert) => {
                            return (
                                <li
                                    key={dessert.id}
                                    data-aos="fade-up"
                                    data-aos-delay="450"
                                >
                                    <a
                                        href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
                                        rel='noopener noreferrer'
                                        target="_blank"
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
