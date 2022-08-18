import React from 'react';
import {FiFilter, FiSearch} from 'react-icons/fi';
const SearchProfile = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-2 bg-main p-2 my-4 lg:my-6 rounded-md'>
            <div className='w-12/12 lg:w-1/12'>
            <p className='text-white text-xl font-semibold'>Profile(100)</p>
            </div>
            <div className='w-12/12 lg:w-9/12'>
                <div className='bg-main py-2 px-4 relative rounded'>
                    <input type="text" placeholder="Search Profile" className="rounded p-2 bg-main border border-gray-700 w-full px-8" />
                    <p><FiSearch className='text-color z-10 text-xl absolute top-5 mx-2'/></p>
                </div>
            </div>
            <div className='w-12/12 lg:w-2/12'>
                <button className='text-white text-xl flex items-center p-2 btn-bg rounded'><FiFilter/> Advance Filter</button>
            </div>
            
        </div>
    );
};

export default SearchProfile;