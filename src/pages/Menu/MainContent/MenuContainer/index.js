import React from 'react'
import { useLocation } from 'react-router-dom'


import MenuSplatterHdr from './MenuSplatterHdr'
import MealDealsHdr from './MealDealsHdr'
import BurgersMenu from './BurgersMenu'
// import BurgersMenu from './BurgersMenu'
// import WingsMenu from './WingsMenu'
// import ShakesNSmoothiesMenu from './ShakesNSmoothiesMenu'
// import DessertsMenu from './DessertsMenu'

import './styles.scss'

const MenuBase = () => {

    const location = useLocation();
    const pathname = location.pathname;

    const burgerPage = pathname === '/menu/krunk-burgers';

    return (
        <React.Fragment>
            <div className='menu-container'>
                <MenuSplatterHdr />
                <MealDealsHdr />

                {burgerPage && <BurgersMenu />}
            </div>
        </React.Fragment>
    )
}

export default MenuBase
