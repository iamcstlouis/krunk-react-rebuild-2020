import React from 'react'
import { useLocation } from 'react-router-dom'


import MenuSplatterHdr from './MenuSplatterHdr'
import MealDealsHdr from './MealDealsHdr'
import BurgersMenu from './BurgersMenu'
import WingsMenu from './WingsMenu'
import ShakesNSmoothiesMenu from './ShakesNSmoothiesMenu'
import DessertsMenu from './DessertsMenu'

import './styles.scss'

const MenuBase = () => {

    const location = useLocation();
    const pathname = location.pathname;

    const burgersPage = pathname === '/menu/krunk-burgers';
    const wingsPage = pathname === '/menu/krunk-wings';
    const shakesNSmoothiesPage = pathname === '/menu/krunk-shakes-n-smoothies';
    const dessertsPage = pathname === '/menu/krunk-desserts';

    return (
        <React.Fragment>
            <div className='menu-container'>
                <MenuSplatterHdr />
                <MealDealsHdr />

                {burgersPage && <BurgersMenu />}
                {wingsPage && <WingsMenu />}
                {shakesNSmoothiesPage && <ShakesNSmoothiesMenu />}
                {dessertsPage && <DessertsMenu/> }
            </div>
        </React.Fragment>
    )
}

export default MenuBase
