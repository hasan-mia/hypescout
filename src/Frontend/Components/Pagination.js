import React from 'react';
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi'

const Pagination = () => {
    return (
        <div className="flex justify-between pt-6">
            <button className="hover:bg-slate-600 px-2 rounded-full text-color flex items-center"><HiArrowLeft/> Previous</button>
            <div className="btn-group justify-center items-center text-xl">
                <button className="w-8 h-8 hover:bg-slate-600 rounded-full text-color">1</button>
                <button className="w-8 h-8 hover:bg-slate-600 rounded-full text-color">2</button>
                <button className="w-8 h-8 hover:bg-slate-600 rounded-full text-color">3</button>
                <button className="w-8 h-8 text-color">.......</button>
                <button className="w-8 h-8 hover:bg-slate-600 rounded-full text-color">8</button>
                <button className="w-8 h-8 hover:bg-slate-600 rounded-full text-color">9</button>
                <button className="w-8 h-8 hover:bg-slate-600 rounded-full text-color">10</button>
            </div>
            <button className="hover:bg-slate-600 px-2 rounded-full text-color flex items-center">Next<HiArrowRight/></button>
        </div>
    );
};

export default Pagination;