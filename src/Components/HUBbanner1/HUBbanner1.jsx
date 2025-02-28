import React from 'react';
import headerImg from '../../../public/FlabourHub/headerimg.png'

const HUBbanner1 = () => {
    return (
        <div>
             <div>
            {/* Header Section */}
            <div className='lg:flex items-center space-x-5 p-5'>
                <h1 className='lg:text-8xl text-5xl quando lg:mt-15 mt-10 lg:w-2/3 border w-full'>
                Enjoy
                </h1>
                <h1>
                    <img src={headerImg} alt="" />
                </h1>
                <img src="" alt="" />
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
                <img className='w-full lg:w-1/2 h-auto object-cover' src="" alt="Red Sneakers" />
                <img className='w-full lg:w-1/2 h-auto object-cover' src="" alt="Yellow Sneakers" />
            </div>
            
        </div>
            
        </div>
    );
};

export default HUBbanner1;