import React from 'react'

import MenuData from '../../MenuData'
import BurgerCard from './BurgerCard'

import './styles.scss'

const BurgersMenu = () => {
    return (
        <div className='cards'>
            <div className="cards cards__beef">
                {
                    MenuData.burgers.beef.map((burger) => {
                        return (
                            <BurgerCard burgerImage={burger.burgerImg} burgerImageAlt={burger.alt} burgerName={burger.burgerName} burgerDesc={burger.burgerDesc} key={burger.id} />
                        )
                    })
                }
            </div>

            <div className="cards cards__chicken">
                {
                    MenuData.burgers.chicken.map((burger) => {
                        return (
                            <BurgerCard burgerImage={burger.burgerImg} burgerImageAlt={burger.alt} burgerName={burger.burgerName} burgerDesc={burger.burgerDesc} key={burger.id} />
                        )
                    })
                }
            </div>

            <div className="cards cards__vegan">
                {
                    MenuData.burgers.vegan.map((burger) => {
                        return (
                            <BurgerCard burgerImage={burger.burgerImg} burgerImageAlt={burger.alt} burgerName={burger.burgerName} burgerDesc={burger.burgerDesc} key={burger.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BurgersMenu
