import React from 'react';
import {IoLocation} from 'react-icons/io5';
import {BsClock} from 'react-icons/bs';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import user1 from '../../Assets/user1.png';
import user2 from '../../Assets/user2.png'
import user3 from '../../Assets/user3.png'
import user4 from '../../Assets/user4.png'
import user5 from '../../Assets/user5.png'
import user6 from '../../Assets/user6.png'

const ProfileCard = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
            <div className="flex flex-col rounded-md justify-center items-center w-full bg-main shadow-xl text-color">
                <figure className="px-10 pt-10">
                    <img src={user1} alt="user" className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white text-2xl">Maksudul Hasan</h2>
                    <p className='flex items-center gap-1 text-md'><IoLocation/>Dhaka Bangladesh</p>
                    <p className='flex items-center gap-1 text-md'><BsClock/>Joined On: July 26th, 2022</p>
                    <ul className="flex gap-2">
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaFacebookSquare/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaInstagram/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaLinkedin/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaTwitter/></a></li>
                    </ul>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            12k <br/>
                            Follwers
                        </div>
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            Fashion <br/>
                            Categories
                        </div>
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            Male  <br/>
                            Gender
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col rounded-md justify-center items-center w-full bg-main shadow-xl text-color">
                <figure className="px-10 pt-10">
                    <img src={user2} alt="user" className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white text-2xl">Refez Hossain</h2>
                    <p className='flex items-center gap-1 text-md'><IoLocation/>Dhaka Bangladesh</p>
                    <p className='flex items-center gap-1 text-md'><BsClock/>Joined On: July 26th, 2022</p>
                    <ul className="flex gap-2">
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaFacebookSquare/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaInstagram/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaLinkedin/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaTwitter/></a></li>
                    </ul>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            12k <br/>
                            Follwers
                        </div>
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            Fashion <br/>
                            Categories
                        </div>
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            Male  <br/>
                            Gender
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col rounded-md justify-center items-center w-full bg-main shadow-xl text-color">
                <figure className="px-10 pt-10">
                    <img src={user3} alt="user" className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white text-2xl">John Doe</h2>
                    <p className='flex items-center gap-1 text-md'><IoLocation/>Dhaka Bangladesh</p>
                    <p className='flex items-center gap-1 text-md'><BsClock/>Joined On: July 26th, 2022</p>
                    <ul className="flex gap-2">
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaFacebookSquare/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaInstagram/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaLinkedin/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaTwitter/></a></li>
                    </ul>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            12k <br/>
                            Follwers
                        </div>
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            Fashion <br/>
                            Categories
                        </div>
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            Male  <br/>
                            Gender
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col rounded-md justify-center items-center w-full bg-main shadow-xl text-color">
                <figure className="px-10 pt-10">
                    <img src={user4} alt="user" className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white text-2xl">Neymar Jr.</h2>
                    <p className='flex items-center gap-1 text-md'><IoLocation/>Dhaka Bangladesh</p>
                    <p className='flex items-center gap-1 text-md'><BsClock/>Joined On: July 26th, 2022</p>
                    <ul className="flex gap-2">
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaFacebookSquare/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaInstagram/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaLinkedin/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaTwitter/></a></li>
                    </ul>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            12k <br/>
                            Follwers
                        </div>
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            Fashion <br/>
                            Categories
                        </div>
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            Male  <br/>
                            Gender
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col rounded-md justify-center items-center w-full bg-main shadow-xl text-color">
                <figure className="px-10 pt-10">
                    <img src={user5} alt="user" className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white text-2xl">Jonathan Smith</h2>
                    <p className='flex items-center gap-1 text-md'><IoLocation/>Dhaka Bangladesh</p>
                    <p className='flex items-center gap-1 text-md'><BsClock/>Joined On: July 26th, 2022</p>
                    <ul className="flex gap-2">
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaFacebookSquare/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaInstagram/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaLinkedin/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaTwitter/></a></li>
                    </ul>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            12k <br/>
                            Follwers
                        </div>
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            Fashion <br/>
                            Categories
                        </div>
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            Male  <br/>
                            Gender
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col rounded-md justify-center items-center w-full bg-main shadow-xl text-color">
                <figure className="px-10 pt-10">
                    <img src={user6} alt="user" className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white text-2xl">John Sina</h2>
                    <p className='flex items-center gap-1 text-md'><IoLocation/>Dhaka Bangladesh</p>
                    <p className='flex items-center gap-1 text-md'><BsClock/>Joined On: July 26th, 2022</p>
                    <ul className="flex gap-2">
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaFacebookSquare/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaInstagram/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaLinkedin/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a><FaTwitter/></a></li>
                    </ul>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            12k <br/>
                            Follwers
                        </div>
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            Fashion <br/>
                            Categories
                        </div>
                        <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                            Male  <br/>
                            Gender
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;