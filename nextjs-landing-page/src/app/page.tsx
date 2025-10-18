import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    );
};

export default HomePage;