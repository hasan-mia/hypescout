import React, { useContext } from 'react';
import { userContext } from '../../App';
import {IoLocation} from 'react-icons/io5';
import {BsClock} from 'react-icons/bs';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ResultProfile = () => {
    const {searchResult} = useContext(userContext)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        {
           searchResult?.map(user=>
            <div  key={user?.id} className="flex flex-col rounded-md justify-center items-center w-full bg-main shadow-xl text-color">
            <figure className="px-10 pt-10">
                <img src={user?.img} alt="user" className="rounded-full w-52 h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white text-2xl">{user?.name}</h2>
                <p className='flex items-center gap-1 text-md'><IoLocation/>{user?.location}</p>
                <p className='flex items-center gap-1 text-md'><BsClock/>{user?.join}</p>
                <ul className="flex gap-2">
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a href={user?.facebook} target="_blank"><FaFacebookSquare/></a></li>
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a href={user?.instagram} target="_blank"><FaInstagram/></a></li>
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a href={user?.linkedin} target="_blank"><FaLinkedin/></a></li>
                    <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold p-1'><a href={user?.twitter} target="_blank"><FaTwitter/></a></li>
                </ul>
                <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                        {user?.follwers} <br/>
                        Follwers
                    </div>
                    <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                        {user?.category} <br/>
                        Categories
                    </div>
                    <div className="bg-main border border-dashed border-gray-500 p-2 text-sm">
                        {user?.gender} <br/>
                        Gender
                    </div>
                </div>
            </div>
        </div>
            ) 
        }
        
    </div>
    );
};

export default ResultProfile;