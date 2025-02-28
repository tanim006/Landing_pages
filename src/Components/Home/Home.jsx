import React from 'react';
import FirstBanner from '../FirstBanner/FirstBanner';
import SecondBanner from '../SecondBanner/SecondBanner';
import Bento from '../Bento/Bento';
import Explore from '../Explore/Explore';
import Join from '../Join/Join';
import Discover from '../Discover/Discover';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <div className='lg:pl-16 lg:pr-16 pt-5'>
            <Navbar></Navbar>
            <FirstBanner></FirstBanner>
            <SecondBanner></SecondBanner>
            <Bento></Bento>
            <Explore></Explore>
            <Join></Join>
            <Discover></Discover>
            <FAQ></FAQ>
            <Footer></Footer>
            </div>
            

        </div>
    );
};

export default Home;