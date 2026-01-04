import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PageLoader.css';

const interests = ["Product", "Design", "Tech", "Travel", "Photography"];

const PageLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [activeInterest, setActiveInterest] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                // Random increments to feel organic
                return prev + Math.random() * 5 + 1;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        // Update active interest based on progress
        const index = Math.min(
            Math.floor((progress / 100) * interests.length),
            interests.length - 1
        );
        setActiveInterest(index);

        if (progress >= 100) {
            setTimeout(() => {
                onComplete();
            }, 500); // Small delay before unmounting
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            className="page-loader"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="loader-content">
                <div className="loader-bar-container">
                    <motion.div
                        className="loader-bar"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="loader-labels">
                    {interests.map((interest, index) => (
                        <span
                            key={interest}
                            className={`loader-label ${index <= activeInterest ? 'active' : ''}`}
                        >
                            {interest}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default PageLoader;
