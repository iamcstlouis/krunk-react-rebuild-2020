import React from 'react'

import './styles.scss'

const MealDealsHdr = () => {
    return (
        <div class="meal-deals-hdr">
            <h1 className='meal-deals-hdr__hdr' data-aos="fade-right" data-aos-delay="800">Meal Deals</h1>
            <h3 className='meal-deals-hdr__excerpt' data-aos="fade-left" data-aos-delay="900">'Meals served with regular fries and a soft drink'</h3>
        </div>
    )
}

export default MealDealsHdr
