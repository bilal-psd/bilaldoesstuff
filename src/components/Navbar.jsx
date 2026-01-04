import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <motion.header
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0.2, 1] }}
        >
            <div className="navbar-container">
                <NavLink to="/" className="navbar-logo">
                    BILAL
                </NavLink>

                <nav className="navbar-links">
                    {/* Removing extra links as per request */}
                    <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Blog</NavLink>
                </nav>
            </div>
        </motion.header>
    );
};

export default Navbar;
