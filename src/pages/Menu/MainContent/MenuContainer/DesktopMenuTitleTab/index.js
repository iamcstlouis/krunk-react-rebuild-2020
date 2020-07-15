import React from 'react'

import './styles.scss'

const DesktopMenuTitleTab = ({ menuTitle }) => {
    return (
        <div className='desktop-menu-title-tab'>
            <div className='desktop-menu-title-tab__content-wrapper'>
                <h2>{menuTitle}</h2>
            </div>
        </div>
    )
}

export default DesktopMenuTitleTab
