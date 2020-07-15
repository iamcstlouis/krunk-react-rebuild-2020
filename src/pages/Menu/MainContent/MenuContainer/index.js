import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import BurgersMenu from './BurgersMenu'
import WingsMenu from './WingsMenu'
import ShakesNSmoothiesMenu from './ShakesNSmoothiesMenu'
import DessertsMenu from './DessertsMenu'

import './styles.scss'

const MenuBase = () => {
    return (
        <div className='menu-container'>
            <h1>Hello</h1>
            {/* Meal Deal Hdr above */}

            <Route exact path='/menu' render={() => <Redirect to='/menu/krunk-burgers' />} />
            <Route path='/menu/krunk-burgers' component={BurgersMenu} />
            <Route path='/menu/krunk-wings' component={WingsMenu} />
            <Route path='/menu/krunk-shakes-n-smoothies' component={ShakesNSmoothiesMenu} />
            <Route path='/menu/krunk-desserts' component={DessertsMenu} />
        </div>
    )
}

export default MenuBase
