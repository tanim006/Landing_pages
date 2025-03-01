import React, { useEffect, useState } from 'react';
import PopularDishTwo from '../PopularDishTwo/PopularDishTwo';


const PopularDish = () => {
    const [foods,setFoods] = useState([])

    const [dataLength,setDataLength] = useState(8)

    useEffect(()=>{
        fetch('Data.json')
        .then(res =>res.json())
        .then(data=>setFoods(data))
    },[])
  return (
    <div>
         <h1 className="lg:text-6xl text-3xl  poppins-semibold justify-center text-center mt-3">
        Our Popular Dish : {foods.length}
      </h1>
      <div className="bg-[#FFF6EA] grid lg:grid-cols-4 md:grid-cols-2 lg:p-20 p-10 space-y-5 mt-10 lg:mt-20 ">
        {
            foods.slice(0,dataLength).map(food => <PopularDishTwo food ={food}></PopularDishTwo>)
        }
          <div className={` ${dataLength === foods.length ? 'hidden' : ''}`}>
  <button
    onClick={() => setDataLength(foods.length)}
    className="btn text-white bg-[#FB5C60] rounded-lg poppins  h-12"
  >
    Show more dishes
  </button>
</div>
      </div>
  



    </div>
    
  );
};

export default PopularDish;
