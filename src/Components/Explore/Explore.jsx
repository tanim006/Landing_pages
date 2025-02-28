import React from "react";
import { FaBox } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

const Explore = () => {
  return (
    <div className="p-5">
      <h1 className="liter font-bold mt-10">Discover</h1>
      <h1 className="bebas text-7xl mt-10">
        Explore OUr Exciting Features and offerings
      </h1>
      <p className="liter font-bold lg:text-xl lg:w-1/2 mt-4">
        Dive into the vibrant world of sneakers through our curated exhibitions
        and collections. Stay updated with our events calendar and enrich your
        knowledge with educational resources.
      </p>

      <div className="mt-15 space-y-15 lg:space-y-0 lg:grid grid-cols-3">
        <div className="space-y-3 ">
          <p className="lg:text-4xl text-3xl">
            {" "}
            <FaBox />{" "}
          </p>
          <h1 className="roboto font-bold lg:text-2xl text-2xl">
            Exhibitions and Collections
          </h1>
          <h1 className="liter font-semibold lg:text-xl text-lg lg:w-2/3 ">
            experience a showcase of iconic sneakers and their stories
          </h1>
        </div>
        <div className="space-y-3">
          <p className="lg:text-4xl text-3xl">
            {" "}
            <FaBox />{" "}
          </p>
          <h1 className="roboto font-bold lg:text-2xl text-2xl">
            Exhibitions and Collections
          </h1>
          <h1 className="liter font-semibold lg:text-xl text-lg lg:w-2/3 ">
            experience a showcase of iconic sneakers and their stories
          </h1>
        </div>
        <div className="space-y-3">
          <p className="lg:text-4xl text-3xl">
            {" "}
            <FaBox />{" "}
          </p>
          <h1 className="roboto font-bold lg:text-2xl text-2xl">
            Exhibitions and Collections
          </h1>
          <h1 className="liter font-semibold lg:text-xl text-lg lg:w-2/3 ">
            experience a showcase of iconic sneakers and their stories
          </h1>
        </div>
      </div>
      <div className="lg:mt-15">
        <button className="btn bg-white text-black border-black mt-5 roboto  h-12">
          Learn More
        </button>
        <button className="btn bg-white text-black  ml-5 mt-5 roboto  h-12">
          Sign Up <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default Explore;
