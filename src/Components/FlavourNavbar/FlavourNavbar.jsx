import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../../public/FlabourHub/logo.png'
import { IoBagRemoveOutline } from "react-icons/io5";

const FlavourNavbar = () => {
    const links = <>
        <li className='text-base poppins font-semibold'><NavLink to="/">Sneakers World</NavLink></li>
        <li className='text-base poppins font-semibold'><NavLink to="/FlavourHub">FlavourHub</NavLink></li>
        <li className='text-base poppins font-semibold'><NavLink to="/education">Education</NavLink></li>
        <li className='text-base poppins font-semibold'><NavLink to="/events">Events</NavLink></li>
        <li className='text-base poppins font-semibold'><NavLink to="/about">About Us</NavLink></li>
    </>;

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img src={logo} alt="FlavourHub Logo" className='h-12 w-12' />
                    <a className="btn btn-ghost text-2xl poppins font-semibold">FlavourHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                {/* Navbar End Section */}
                <div className="navbar-end flex items-center gap-4">
                    <a className="btn bg-[#FB5C60] text-white rounded-lg roboto w-28 h-12">Get Started</a>
                    <IoBagRemoveOutline className='text-2xl  cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default FlavourNavbar;
