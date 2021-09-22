import React from 'react';
import CollegeHistory from '../../shared/CollegeHistory/CollegeHistory';
import CounterUp from '../../shared/Counter/CounterUp';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import HeaderNotice from '../../shared/HeaderNotice/HeaderNotice';
import HomeContact from '../../shared/HomeContact/HomeContact';
import LatestInfo from '../../shared/LatestInfo/LatestInfo';
import Slider from '../../shared/Slider/HomeSlider';

import './Home.css'

const Home = () => {
    return (
        <div className='home'>
           <Header/> 
           <HeaderNotice/>
           <Slider/>
           <CollegeHistory/>
           <CounterUp/>
           <LatestInfo/>
           <HomeContact/>
           <Footer/>
        </div>
    );
};

export default Home;