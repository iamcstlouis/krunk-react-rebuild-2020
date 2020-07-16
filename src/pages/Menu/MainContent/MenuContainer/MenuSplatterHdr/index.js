import React from 'react'
import { useLocation } from 'react-router-dom'

import burgersMenuTitle from '../../../../../images/menu/burgers/burgers-menu-title.svg'
import wingsMenuTitle from '../../../../../images/menu/wings/wings-menu-title.svg'
import shakesMenuTitle from '../../../../../images/menu/shakes-n-smoothies/shakes-menu-title.svg'
import dessertsMenuTitle from '../../../../../images/menu/desserts/desserts-menu-title.svg'

import './styles.scss'

const MenuSplatterHdr = () => {

    const location = useLocation();
    const pathname = location.pathname;

    const menuPage = pathname === '/menu'
    const menuBurgerPage = pathname === '/menu/krunk-burgers'
    const menuWingsPage = pathname === '/menu/krunk-wings'
    const menuShakesPage = pathname === '/menu/krunk-shakes-n-smoothies'
    // const menuDessertsPage = pathname === '/menu/krunk-desserts'

    function menuSplatterHdr() {
        return menuPage ? burgersMenuTitle
            : menuBurgerPage ? burgersMenuTitle
                : menuWingsPage ? wingsMenuTitle
                    : menuShakesPage ? shakesMenuTitle
                        : dessertsMenuTitle
    }

    return (
        <div className='menu-hdr'>
            <div className='content-wrapper'>
                <img src={menuSplatterHdr()} alt='Krunk Menu' className='menu-hdr-graphic' />
            </div>
        </div>
    )
}

export default MenuSplatterHdr
