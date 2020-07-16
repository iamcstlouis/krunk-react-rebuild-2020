import React from 'react'
import { NavLink } from 'react-router-dom'

import PageTitle from '../../../../components/PageTitle'
import subMenuBangImage from '../../../../images/menu/icn_sub_menu_bang.svg'

import './styles.scss'

const SubMenu = () => {
    return (
        <div className='sub-menu'>

            <PageTitle title={'Menu'} />

            <div className='links'>
                <NavLink to='/menu/krunk-burgers' data-aos='fade-down' data-aos-delay='100'>Burgers</NavLink>
                <span>
                    <img
                        src={subMenuBangImage}
                        alt='Sub Menu Separator'
                        className='separator'
                        data-aos='fade-down'
                        data-aos-delay='200'
                    />
                </span>
                <NavLink to='/menu/krunk-wings' data-aos='fade-down' data-aos-delay='300'>Wings</NavLink>
                <span>
                    <img
                        src={subMenuBangImage}
                        alt='Sub Menu Separator'
                        className='separator'
                        data-aos='fade-down'
                        data-aos-delay='400'
                    />
                </span>
                <NavLink to='/menu/krunk-shakes-n-smoothies' data-aos='fade-down' data-aos-delay='500'>Shakes</NavLink>
                <span>
                    <img
                        src={subMenuBangImage}
                        alt='Sub Menu Separator'
                        className='separator'
                        data-aos='fade-down'
                        data-aos-delay='600'
                    />
                </span>
                <NavLink to='/menu/krunk-desserts' data-aos='fade-down' data-aos-delay='700'>Desserts</NavLink>
            </div>
        </div>
    )
}

export default SubMenu
