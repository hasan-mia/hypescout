import React from 'react';
import Pagination from '../Components/Pagination';
import ProfileCard from '../Components/ProfileCard';
import SearchProfile from '../Components/SearchProfile';

const Home = () => {
    return (
        <main className='px-2 lg:px-4 min-h-screen'>
            <section className='px-2 lg:px-6'>
                <SearchProfile/>
            </section>
            {/* end search profile */}
            <section className='px-2 lg:px-6'>
                <ProfileCard/>
            </section>
            <section className='px-2 lg:px-6'>
                <Pagination/>
            </section>
        </main>
    );
};

export default Home;