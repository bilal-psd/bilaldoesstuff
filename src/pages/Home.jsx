import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroStack from '../components/HeroStack';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-grid">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.2, 0, 0.2, 1] }}
                    >
                        <span className="hero-label">Product · Design · Tech</span>

                        <h1 className="hero-headline">
                            I like building things that people can <span className="highlight">actually</span> use.
                        </h1>

                        <p className="hero-subtext">
                            Hello! Im Bilal _ passionate builder based out of Bengaluru, India.
                            Im obsessed with solving problems and building tools that make life easier.
                        </p>

                        <div className="hero-cta-group">
                            <a href="mailto:hello@bilal.com" className="btn btn-primary btn-squared">
                                Get in touch
                            </a>
                        </div>
                    </motion.div>

                    <div className="hero-visual">
                        <HeroStack />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
