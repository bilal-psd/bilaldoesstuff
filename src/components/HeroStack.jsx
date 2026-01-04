import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import avatar from '../assets/avatar.png';
import './HeroStack.css';

const HeroStack = () => {
    return (
        <div className="hero-stack-container">
            {/* Decorative background gradients/blobs */}
            <div className="hero-blob blob-1"></div>
            <div className="hero-blob blob-2"></div>

            {/* Stacked Cards */}

            <motion.div
                className="stack-card card-product"
                initial={{ opacity: 0, y: 0, scale: 1.2, rotate: 4 }}
                animate={{ opacity: 1, y: -10, x: 40, scale: 1.3, rotate: 5 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, zIndex: 100 }}
            >
                <GlassCard className="stack-card-inner product-inner">
                    <div className="product-ui-header">
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="product-ui-body">
                        <div className="skeleton-bar" style={{ width: '60%' }}></div>
                        <div className="skeleton-bar" style={{ width: '80%' }}></div>
                        <div className="skeleton-bar" style={{ width: '40%' }}></div>
                        <div className="skeleton-rect"></div>
                    </div>
                </GlassCard>
            </motion.div>

            <motion.div
                className="stack-card card-photo"
                initial={{ opacity: 0, y: 30, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 6 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotate: 8, zIndex: 100 }}
            >
                <GlassCard className="stack-card-inner photo-inner">
                    <img src={avatar} alt="Bilal" className="hero-photo" />
                </GlassCard>
            </motion.div>

            <motion.div
                className="stack-card card-code"
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: -6 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotate: -8, zIndex: 100 }}
            >
                <GlassCard className="stack-card-inner">
                    <div className="code-snippet">
                        <span className="code-line">const create = () =&gt; &#123;</span>
                        <span className="code-line indent">return "Magic";</span>
                        <span className="code-line">&#125;</span>
                    </div>
                </GlassCard>
            </motion.div>

        </div>
    );
};

export default HeroStack;
