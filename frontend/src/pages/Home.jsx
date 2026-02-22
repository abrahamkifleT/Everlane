import React from 'react';
import Hero from '../features/home/components/Hero';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            {/* Additional sections like Collections or Featured Products could go here */}
        </div>
    );
};

export default Home;
