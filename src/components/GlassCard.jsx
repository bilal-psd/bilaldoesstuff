import React from 'react';
import { motion } from 'framer-motion';
import './GlassCard.css';

const GlassCard = ({ children, className = '', hoverEffect = true, ...props }) => {
    return (
        <motion.div
            className={`glass-card ${className} ${hoverEffect ? 'hover-effect' : ''}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
