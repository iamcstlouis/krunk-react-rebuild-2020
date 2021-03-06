import React from 'react'
import { useLocation } from 'react-router-dom'

import burgersMenuTitle from '../../../../../images/menu/burgers/burgers-menu-title2.png'
import wingsMenuTitle from '../../../../../images/menu/wings/wings-menu-title2.png'
import shakesMenuTitle from '../../../../../images/menu/shakes-n-smoothies/shakes-menu-title2.png'
import dessertsMenuTitle from '../../../../../images/menu/desserts/desserts-menu-title2.png'

import './styles.scss'

const MenuSplatterHdr = () => {

    const location = useLocation();
    const pathname = location.pathname;

    const menuPage = pathname === '/menu'
    const menuBurgerPage = pathname === '/menu/krunk-burgers'
    const menuWingsPage = pathname === '/menu/krunk-wings'
    const menuShakesPage = pathname === '/menu/krunk-shakes-n-smoothies'

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
                <img src={menuSplatterHdr()} alt='Krunk Menu' className='menu-hdr-graphic' data-aos='fade-in' />
            </div>
        </div>
    )
}

export default MenuSplatterHdr
