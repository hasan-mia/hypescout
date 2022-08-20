import React, { useContext } from 'react';
import { userContext } from '../../App';
import Pagination from '../Components/Pagination';
import ProfileCard from '../Components/ProfileCard';
import ResultProfile from '../Components/ResultProfile';
import SearchProfile from '../Components/SearchProfile';

const Home = () => {
    const {searchResult} = useContext(userContext)
    return (
        <main className='px-2 lg:px-4 min-h-screen'>
            {/* <ResultProfile/>  */}
            <section className='px-2 lg:px-6'>
                <SearchProfile/>
            </section>
            {/* end search profile */}
            <section className='px-2 lg:px-6'>
                {
                searchResult?.length === 0 ? <ProfileCard/> : <ResultProfile/> 
                }
                
            </section>
            <section className='px-2 lg:px-6'>
                <Pagination/>
            </section>
        </main>
    );
};

export default Home;