import React from 'react'

import MenuData from '../../MenuData'
import BurgerCard from './BurgerCard'

import './styles.scss'
import MealsSeparator from '../../MealsSeparator'

const BurgersMenu = () => {
    return (
        <div className='cards'>

            <h2 class="cards__mobile-menu-tab" data-aos="fade-left" data-aos-delay="1300">Beef</h2>
            <div className="cards cards__beef">
                {
                    MenuData.burgers.beef.map((burger) => {
                        return (
                            <BurgerCard burgerImage={burger.burgerImg} burgerImageAlt={burger.alt} burgerName={burger.burgerName} burgerDesc={burger.burgerDesc} key={burger.id} />
                        )
                    })
                }
            </div>

            <MealsSeparator />

            <h2 class="cards__mobile-menu-tab" data-aos="fade-left" data-aos-delay="1300">Chicken</h2>
            <div className="cards cards__chicken">
                {
                    MenuData.burgers.chicken.map((burger) => {
                        return (
                            <BurgerCard burgerImage={burger.burgerImg} burgerImageAlt={burger.alt} burgerName={burger.burgerName} burgerDesc={burger.burgerDesc} key={burger.id} />
                        )
                    })
                }
            </div>

            <MealsSeparator />

            <h2 class="cards__mobile-menu-tab" data-aos="fade-left" data-aos-delay="1300">Vegan</h2>
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
