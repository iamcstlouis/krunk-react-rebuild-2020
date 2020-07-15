import React from 'react'

import wingsHeroImage from '../../../../../images/menu/wings/wings.jpg'

import './styles.scss'

const WingsMenu = () => {
    return (
        <div className='main-content'>
            <div className='img-hdr-wrapper'>
                <div className='img-wrapper'>
                    <img
                        src={wingsHeroImage}
                        alt='Krunks Wings'
                        className='featured-img'
                        data-aos='fade-up'
                        data-aos-delay='1300'
                    />
                </div>

                <div className='wings-hdr-wrapper'>
                    <div className='wings-flavours-hdr'>
                        <div className='hdr-wrapper'>
                            <h2 data-aos='fade-up' data-aos-delay='1450'>Flavours</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='wing-flavours-list'>
                <ul id='flavours'>
                    <li
              data-aos='fade-up'
              data-aos-delay='1450'
            >
              <a
                        href='https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP'
                        target='_blank'
                        data-aos='fade-up'
                        data-aos-delay='450'
                    ></a>
            </li>
          </ul>
        </div>
      </div >
    )
}

export default WingsMenu
