import React from 'react';
import FlavourNavbar from '../FlavourNavbar/FlavourNavbar';
import HUBbanner1 from '../HUBbanner1/HUBbanner1';
import Why from '../Why/Why';
import PopularDish from '../PopularDish/PopularDish';
import PopularDishTwo from '../PopularDishTwo/PopularDishTwo';

const FlabourHOME = () => {
    return (
        <div>
            <div className='lg:pl-16 lg:pr-16 pt-5'>
            <FlavourNavbar></FlavourNavbar>
            <HUBbanner1></HUBbanner1>
            <Why></Why>
            </div>
            <PopularDish></PopularDish>
            
            
        </div>
    );
};

export default FlabourHOME;