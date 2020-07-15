import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import MenuContainer from './MenuContainer'
import SubMenu from './SubMenu'

const MainContent = () => {
    return (
        <React.Fragment>
            <SubMenu />

            <Route exact path='/menu' render={() => <Redirect to='/menu/krunk-burgers' />} />
            <Route path='/menu/krunk-burgers' component={MenuContainer} />
            <Route path='/menu/krunk-wings' component={MenuContainer} />
            <Route path='/menu/krunk-shakes-n-smoothies' component={MenuContainer} />
            <Route path='/menu/krunk-desserts' component={MenuContainer} />
        </React.Fragment>
    )
}

export default MainContent
