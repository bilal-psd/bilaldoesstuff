import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} Bilal
                </div>
                <div className="footer-tagline">
                    Further Through Growth
                </div>
                <div className="footer-socials">
                    <a href="https://linkedin.com/in/bilal1999" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
