import React from 'react';
import redSneakers from '../../../public/unsplash_164_6wVEHfI.jpg';
import yellowSneakers from '../../../public/unsplash_LG88A2XgIXY.jpg';

const FirstBanner = () => {
    return (
        <div>
            {/* Header Section */}
            <div className='lg:flex items-center space-x-5 p-5'>
                <h1 className='lg:text-8xl text-5xl bebas lg:mt-15 mt-10 lg:w-1/2 w-full'>
                    Sneaker World / Where Passion, Style, 
                    <br className='block lg:hidden' />  
                    and Comfort Unite
                </h1>
                <div className='lg:w-1/2 w-full'>
                    <p className='liter  lg:text-xl'>
                        At Sneaker Haven, we believe sneakers are more than just footwear—they’re a statement. 
                        Whether you're a sneakerHead chasing the latest drops or someone who values both style 
                        and comfort, we’ve got the perfect pair for you. From timeless classics to cutting-edge designs, 
                        step into a world where every sneaker tells a story.
                    </p>
                    <button className='btn bg-black text-white mt-5 roboto w-24 h-12'>See more</button>
                    <button className='btn bg-white text-black border-black ml-5 mt-5 roboto w-24 h-12'>Explore</button>
                </div>
            </div>

            {/* Image Section (Responsive) */}
            <div className='flex flex-col lg:flex-row items-center gap-5 p-5'>
                <img className='w-full lg:w-1/2 h-auto object-cover' src={redSneakers} alt="Red Sneakers" />
                <img className='w-full lg:w-1/2 h-auto object-cover' src={yellowSneakers} alt="Yellow Sneakers" />
            </div>
            
        </div>
    );
};

export default FirstBanner;
