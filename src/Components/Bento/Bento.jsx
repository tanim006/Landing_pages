import React from 'react';
import imani from '../../../public/imani-bahati-LxVxPA1LOVM-unsplash.jpg'
import maksim from '../../../public/maksim-larin-1vy2QcZd5FU-unsplash.jpg'
import taylor from '../../../public/taylor-smith-aDZ5YIuedQg-unsplash.jpg'
import placeholder from '../../../public/Placeholder Image.jpg'
import dk from '../../../public/the-dk-photography-NUoPWImmjCU-unsplash.jpg'
import unsplash from '../../../public/unsplash_164_6wVEHfI.jpg'





const Bento = () => {
    return (
        <div>
            <div className="h-screen flex flex-col mt-20">
      {/* First Row */}
      <div>
        {/* <title>SOA_AGENTS | JOIN US</title> */}
      </div>
      <div className="flex w-full h-1/2 ">
        <div
          className="w-1/3 bg-cover bg-center border-2 transition-all duration-500 ease-in-out hover:rotate-3 hover:scale-110"
          style={{ backgroundImage: `url(${imani})` }}
        ></div>
        <div
          className="w-1/3 bg-cover bg-center border-2 transition-all duration-500 ease-in-out hover:rotate-3 hover:scale-110"
          style={{ backgroundImage: `url(${maksim})` }}
        ></div>
        <div
          className="w-1/3 bg-cover bg-center border-2 transition-all duration-500 ease-in-out hover:rotate-3 hover:scale-110"
          style={{ backgroundImage: `url(${taylor})` }}
        ></div>
      </div>

      {/* Second Row */}
      <div className="flex w-full h-1/2 ">
        <div
          className="w-1/3 bg-cover bg-center border-2 transition-all duration-500 ease-in-out hover:rotate-3 hover:scale-110"
          style={{ backgroundImage: `url(${placeholder})` }}
        ></div>
        <div
          className="w-1/3 bg-cover bg-center border-2 transition-all duration-500 ease-in-out hover:rotate-3 hover:scale-110"
          style={{ backgroundImage: `url(${dk})` }}
        ></div>
        <div
          className="w-1/3 bg-cover bg-center border-2 transition-all duration-500 ease-in-out hover:rotate-3 hover:scale-110"
          style={{ backgroundImage: `url(${unsplash})` }}
        ></div>
      </div>
      
    </div>
        </div>
    );
};

export default Bento;