import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to Our Landing Page</h1>
                <p className="hero-subtitle">Your journey starts here. Discover amazing content and features.</p>
                <a href="#get-started" className="hero-cta-button">Get Started</a>
            </div>
        </section>
    );
};

export default Hero;