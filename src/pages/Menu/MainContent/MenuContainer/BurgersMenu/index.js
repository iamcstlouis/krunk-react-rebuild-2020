import React from 'react'

import MenuData from '../../MenuData'
import BurgerCard from './BurgerCard'

import './styles.scss'

const BurgersMenu = () => {
    return (
        <div className='cards'>
            {
                MenuData.burgers.beef.map((burger) => {
                    return (
                        <BurgerCard burgerImage={burger.burgerImg} burgerImageAlt={burger.alt} burgerName={burger.burgerName} burgerDesc={burger.burgerDesc} key={burger.id} />
                    )
                })
            }
        </div>
    )
}

export default BurgersMenu
