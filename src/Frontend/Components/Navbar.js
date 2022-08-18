import React from 'react';
import {FaBars} from 'react-icons/fa';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {RiNotification2Line} from 'react-icons/ri';
import Logo from '../../Assets/logo.png'

const Navbar = () => {
    return (
        <header className='bg-main px-2 lg:px-4'>
            <div class="navbar">
           
            <div class="navbar-start">
                <a class="btn btn-ghost normal-case text-xl"><img src={Logo} alt="logo" className='w-full' /></a>
            </div>

            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Dashboard</a></li>
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Campaign</a></li>
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Hypesocial</a></li>
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Insights</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <ul class="menu menu-horizontal p-0">
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a><RiNotification2Line className='text-2xl'/></a></li>
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a><BsFillMoonStarsFill className='text-xl'/></a></li>
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold sm-none'><a>Hi! Rakib</a></li>
                </ul>
                <div class="flex gap-2">
                    <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div className='flex w-8 rounded-lg'>
                            <img src="https://placeimg.com/80/80/people"/>
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded w-52 bg-main">
                        <li className='text-lg text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Profile</a></li>
                        <li className='text-lg text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Settings</a></li>
                        <li className='text-lg text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Logout</a></li>
                    </ul>
                    </div>
                </div>

                 {/* =====Mobile Menu==== */}
                <div class="dropdown">
                    <label tabindex="0" class="cursor-pointer lg:hidden">
                        <FaBars className="text-gray-200 text-2xl"/>
                    </label>

                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-6 p-2 shadow bg-base-100 rounded w-52 absolute right-0 bg-main">
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