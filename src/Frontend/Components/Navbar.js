import React from 'react';
import {FaBars} from 'react-icons/fa';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {RiNotification2Line} from 'react-icons/ri';
import Logo from '../../Assets/logo.png';
import User from '../../Assets/user.png'

const Navbar = () => {
    return (
        <header className='bg-main px-2 lg:px-4'>
            <div className="navbar">
           
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl"><img src={Logo} alt="logo" className='w-full' /></a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Dashboard</a></li>
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Campaign</a></li>
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Hypesocial</a></li>
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Insights</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a><RiNotification2Line className='text-2xl'/></a></li>
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a><BsFillMoonStarsFill className='text-xl'/></a></li>
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold sm-none'><a>Hi! Rakib</a></li>
                </ul>
                <div className="flex gap-2">
                    <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className='flex w-8 rounded-lg'>
                            <img src={User}/>
                        </div>
                    </label>
                    <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded w-52 bg-main">
                        <li className='text-lg text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Profile</a></li>
                        <li className='text-lg text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Settings</a></li>
                        <li className='text-lg text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Logout</a></li>
                    </ul>
                    </div>
                </div>

                 {/* =====Mobile Menu==== */}
                <div className="dropdown">
                    <label tabindex="0" className="cursor-pointer lg:hidden">
                        <FaBars className="text-gray-200 text-2xl"/>
                    </label>

                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-6 p-2 shadow bg-base-100 rounded w-52 absolute right-0 bg-main">
                        <li className='text-lg text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Dashboard</a></li>
                        <li className='text-lg text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Campaign</a></li>
                        <li className='text-lg text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Hypesocial</a></li>
                        <li className='text-lg text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Insights</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </header>
        
    );
};

export default Navbar;