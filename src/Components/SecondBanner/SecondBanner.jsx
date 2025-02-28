import React from 'react';
import redSneakers from '../../../public/unsplash_164_6wVEHfI.jpg';
import yellowSneakers from '../../../public/unsplash_LG88A2XgIXY.jpg';

const SecondBanner = () => {
    return (
        <div>

                <div className='lg:flex items-center space-x-5 p-5'>
    
                <div className='lg:w-1/2 w-full'>
                    <p className='liter font-bold lg:text-xl'>
                    Our shoes are built for those who demand both performance and aesthetics. With premium materials, innovative designs, and unmatched comfort, each pair is made to elevate your everyday experience. Whether you're hitting the streets or making a statement, our sneakers ensure you do it in style.
                    </p>
                
                </div>
                <h1 className='lg:text-8xl text-5xl bebas lg:mt-15 mt-10 lg:w-1/2 w-full'>
                Crafted for Comfort, Designed for Style 
                    <br className='block lg:hidden' />  
                    and Comfort Unite
                </h1>
            </div>

            
            
        </div>
    );
};

export default SecondBanner;