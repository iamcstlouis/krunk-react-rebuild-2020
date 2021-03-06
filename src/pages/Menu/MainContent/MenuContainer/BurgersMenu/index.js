import React from 'react'

import MenuData from '../../MenuData'
import BurgerCard from './BurgerCard'
import DesktopMenuTitleTab from '../DesktopMenuTitleTab'

import './styles.scss'
import MealsSeparator from '../MealsSeparator'

const BurgersMenu = () => {
    return (
        <div className='cards'>

            <h2 className='cards__mobile-menu-tab' data-aos='fade-left' data-aos-delay='1300'>Beef</h2>
            <div className='cards--grid cards__beef'>
                <DesktopMenuTitleTab menuTitle={'Beef'} />

                {
                    MenuData.burgers.beef.map((burger) => {
                        return (
                            <BurgerCard burgerImage={burger.burgerImg} burgerImageAlt={burger.alt} burgerName={burger.burgerName} burgerDesc={burger.burgerDesc} key={burger.id} />
                        )
                    })
                }
            </div>

            <MealsSeparator />

            <h2 className='cards__mobile-menu-tab' data-aos='fade-left' data-aos-delay='1300'>Chicken</h2>
            <div className='cards--grid cards__chicken'>
                <DesktopMenuTitleTab menuTitle={'Chicken'} />

                {
                    MenuData.burgers.chicken.map((burger) => {
                        return (
                            <BurgerCard burgerImage={burger.burgerImg} burgerImageAlt={burger.alt} burgerName={burger.burgerName} burgerDesc={burger.burgerDesc} key={burger.id} />
                        )
                    })
                }
            </div>

            <MealsSeparator />

            <h2 className='cards__mobile-menu-tab' data-aos='fade-left' data-aos-delay='1300'>Vegan</h2>
            <div className='cards--grid cards__vegan'>
                <DesktopMenuTitleTab menuTitle={'Vegan'} />

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
