import React from 'react';
import Advantages from '../Advantages/Advantages';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import HomeSercvices from '../HomeServices/HomeServices';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <HomeSercvices></HomeSercvices>
            <Advantages></Advantages>
            <Gallery></Gallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;