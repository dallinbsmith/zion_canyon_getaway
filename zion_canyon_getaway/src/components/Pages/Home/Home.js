import React, { Component } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import HomeBannerLogo from '../../../media/svg/HomeBannerLogo';
import Sun from '../../../media/svg/Sun';
import Mtns1 from '../../../media/svg/Mtns1';
import Mtns2 from '../../../media/svg/Mtns2';
import Mtns3 from '../../../media/svg/Mtns3';
import Marsh from '../../../media/svg/Marsh';
import Rocks from '../../../media/svg/Rocks';
import Clouds from '../../../media/svg/Clouds';
import HomeBooking from '../../Pages/Home/HomeBooking';

const ParallaxBackground = () => (
    <div>
        <Parallax y={[-330 + 'px', 270 + 'px']}>
            <Clouds />
        </Parallax>
        <Parallax y={[-250 + 'px', 360 + 'px']}>
            <Sun />
        </Parallax>
        <Parallax y={[-130 + 'px', 470 + 'px']}>
            <Mtns1 />
        </Parallax>
        <Parallax y={[-105 + 'px', 485 + 'px']}>
            <Mtns2 />
        </Parallax>
        <Parallax y={[5 + 'px', 575 + 'px']}>
            <Marsh />
        </Parallax>
        <Parallax y={[-145 + 'px', 425 + 'px']}>
            <Mtns3 />
        </Parallax>
        <Parallax y={[5 + 'px', 475 + 'px']}>
            <img
                className="mtns-4"
                src={require('../../../media/svg/Mtns4.png')}
            />
        </Parallax>
        <Parallax y={[-125 + 'px', 445 + 'px']}>
            <img
                className="mtns-5"
                src={require('../../../media/svg/Mtns5.png')}
            />
        </Parallax>
        <Parallax y={[-25 + 'px', 455 + 'px']}>
            <img
                className="mtns-7"
                src={require('../../../media/svg/Mtns7.png')}
            />
        </Parallax>
        <Parallax y={[-85 + 'px', 315 + 'px']}>
            <img
                className="mtns-8"
                src={require('../../../media/svg/Mtns8.png')}
            />
        </Parallax>
        <Parallax y={[-470 + 'px', 140 + 'px']}>
            <HomeBannerLogo />
        </Parallax>
        <Parallax className="explore-button" y={[-220 + 'px', 390 + 'px']}>
            <a href="/booking" rel="noopener" className="button">
                Booking
            </a>
        </Parallax>
        <Parallax y={[485 + 'px', 625 + 'px']}>
            <Rocks />
        </Parallax>
        <Parallax y={[515 + 'px', 535 + 'px']}>
            <img
                className="people"
                src={require('../../../media/svg/People.png')}
            />
        </Parallax>
        <Parallax y={[905 + 'px', 925 + 'px']}>
            <div className="gradient-square" />
        </Parallax>
    </div>
);

const Home = () => (
    <div className="home-body">
        <ParallaxProvider>
            <main className="banner-container">
                <ParallaxBackground />
                <Parallax y={[1065 + 'px', 1085 + 'px']}>
                    <div className="content-container">
                        <HomeBooking />
                    </div>
                </Parallax>
            </main>
        </ParallaxProvider>
    </div>
);

export default Home;
