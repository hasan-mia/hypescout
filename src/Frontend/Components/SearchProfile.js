import { CFormRange } from '@coreui/react';
import React, { useContext } from 'react';
import {FiFilter, FiSearch} from 'react-icons/fi';
import { userContext } from '../../App';

const SearchProfile = () => {
    // ======Search Handeler=====
    const {searchHandler} = useContext(userContext)
    return (
        <div className='w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-2 bg-main p-2 my-4 lg:my-6 rounded-md'>
            <div className='w-12/12 lg:w-1/12'>
            <p className='text-white text-xl font-semibold'>Profile(100)</p>
            </div>
            <div className='w-12/12 lg:w-9/12'>
                <div className='bg-main py-2 px-4 relative rounded'>
                    <input onChange={searchHandler} type="text" placeholder="Search Profile" className="rounded p-2 bg-main border text-color border-gray-700 w-full px-2 lg:px-8" />
                    <p><FiSearch className='text-color z-10 text-xl absolute top-5 mx-2'/></p>
                </div>
            </div>
            <div className='w-12/12 lg:w-2/12'>
                <div className="dropdown">
                    <label tabindex="0" className="cursor-pointer">
                        <button className='text-white text-xl flex items-center p-2 btn-bg rounded'><FiFilter/> Advance Filter</button>
                    </label>

                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-6 p-2 shadow bg-main rounded w-52 absolute right-0 bg-main">
                        <div className='bg-main text-gray-200 px-1 py-2 border-b border-gray-700 text-xl'><a href="#">Filter Options</a></div>
                        <div className='bg-main text-gray-200 px-1 py-2'><a href="#">Influencer’s industry</a>
                        <select className="select select-bordered w-full max-w-xs bg-black text-color">
                            <option disabled selected>Selection Options</option>
                            <option>Normal Apple</option>
                            <option>Normal Orange</option>
                            <option>Normal Tomato</option>
                        </select>
                        </div>

                        <div className='bg-main text-gray-200 px-1 py-2'><a href="#">Influencer’s Country</a>
                        <select className="select select-bordered w-full max-w-xs bg-black text-color">
                            <option disabled selected>Selection Options</option>
                            <option>Normal Apple</option>
                            <option>Normal Orange</option>
                            <option>Normal Tomato</option>
                        </select>
                        </div>
                        <div className='bg-main text-gray-200 px-1 py-2'><a href="#">Audience’s Country</a>
                        <select className="select select-bordered w-full max-w-xs bg-black text-color">
                            <option disabled selected>Selection Options</option>
                            <option>Normal Apple</option>
                            <option>Normal Orange</option>
                            <option>Normal Tomato</option>
                        </select>
                        </div>
                        <div className='bg-main text-gray-200 px-1 py-2'><a href="#">Influencer’s Social Media Platform</a>
                        <select className="select select-bordered w-full max-w-xs bg-black text-color">
                            <option disabled selected>Selection Options</option>
                            <option>Normal Apple</option>
                            <option>Normal Orange</option>
                            <option>Normal Tomato</option>
                        </select>
                        </div>

                        <div className='bg-main text-gray-200 py-2'>
                            <CFormRange min="0" max="100" step="1" label="Influencer's range" defaultValue="3" className="p-2 w-full" /> 
                        </div>

                        <div className='bg-main text-gray-200 py-2'><a href="#">Influencer's Gender </a>
                            <div className="flex flex-row gap-4 justify-center items-center py-2">
                            <input type="radio" name="radio-2" className="radio radio-primary" checked /> <span>Male</span>
                            <input type="radio" name="radio-2" className="radio radio-primary" /> <span>Female</span>
                            </div>
                        </div>
                        <div className='bg-main text-gray-200 py-2'>
                            <div className="btn-group justify-end gap-1 py-2">
                                <button className="py-2 px-4 bg-slate-900 rounded">Reset</button>
                                <button className="py-2 px-4 bg-slate-900 rounded btn-active">Apply</button>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default SearchProfile;