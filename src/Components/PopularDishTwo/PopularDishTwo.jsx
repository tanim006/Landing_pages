
import { IoBagRemoveOutline } from "react-icons/io5";


const PopularDishTwo = ({food}) => {
    const {img,foodName,description,price} = food
    return (
        <div>
           <div>
      
      <div>
        <div className="p-10  rounded-4xl bg-white w-[403px] ">
          <div className="rounded-4xl">
            <img src={img} alt="" className=" " />
            <h1 className="poppins-regular mt-3 text-xl">{foodName}</h1>
            <p className=" poppins-regular mt-3 text-base  text-[#6C6C6C]">
              {description}
            </p>
            <div className="flex items-center  justify-between mt-7">
              <p className="poppins-medium  text-[#FF7500] text-xl ">{price}</p>
              <div className="bg-[#FFF4E5] w-11 h-11 rounded-full p-2.5">
                <IoBagRemoveOutline className="text-2xl " />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
            
        </div>
    );
};

export default PopularDishTwo;