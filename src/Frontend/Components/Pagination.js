import React from 'react';
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi'

const Pagination = () => {
    return (
        <div className="flex justify-between pt-6">
            <button class="hover:bg-slate-900 px-2 rounded-full text-color flex items-center"><HiArrowLeft/> Previous</button>
            <div class="btn-group justify-center items-center">
                <button class="w-8 h-8 hover:bg-slate-900 rounded-full text-color">1</button>
                <button class="w-8 h-8 hover:bg-slate-900 rounded-full text-color">2</button>
                <button class="w-8 h-8 hover:bg-slate-900 rounded-full text-color">3</button>
                <button class="w-8 h-8 text-color">.......</button>
                <button class="w-8 h-8 hover:bg-slate-900 rounded-full text-color">8</button>
                <button class="w-8 h-8 hover:bg-slate-900 rounded-full text-color">9</button>
                <button class="w-8 h-8 hover:bg-slate-900 rounded-full text-color">10</button>
            </div>
            <button class="hover:bg-slate-900 px-2 rounded-full text-color flex items-center">Next<HiArrowRight/></button>
        </div>
    );
};

export default Pagination;