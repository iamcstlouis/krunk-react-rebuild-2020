import React from 'react'

import ShakesMenu from './ShakesMenu'
import SmoothiesMenu from './SmoothiesMenu'

import './styles.scss'

const ShakesNSmoothiesMenu = () => {
    return (
        <React.Fragment>
            <ShakesMenu />
            <SmoothiesMenu />
        </React.Fragment >
    )
}

export default ShakesNSmoothiesMenu
