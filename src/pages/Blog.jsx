import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import './Products.css'; // Reuse styles for now as layout is similar

const posts = [
    {
        id: 1,
        title: "The Art of Micro-interactions",
        date: "Oct 2025",
        desc: "Why the smallest details in UI design often make the biggest impact on user retention.",
        tags: ["Design", "UX"]
    },
    {
        id: 2,
        title: "Building Resilient Systems",
        date: "Sep 2025",
        desc: "Lessons learned from scaling a Node.js application to 100k concurrent users.",
        tags: ["Engineering", "Node.js"]
    },
    {
        id: 3,
        title: "Digital Minimalism",
        date: "Aug 2025",
        desc: "A reflection on reducing digital noise and focusing on craft.",
        tags: ["Philosophy"]
    }
];

const Blog = () => {
    return (
        <div className="products-container">
            <div className="products-header">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="page-title">Blog_</h1>
                    <p className="page-subtitle">
                        Thoughts on building, designing, and <span className="highlight">shipping</span>.
                    </p>
                </motion.div>
            </div>

            <div className="projects-list">
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <GlassCard className="project-row-card" hoverEffect={true}>
                            <div className="project-content" style={{ borderLeft: 'none', paddingLeft: '32px' }}>
                                <div className="project-meta">
                                    <span className="project-role">{post.date}</span>
                                </div>
                                <h2 className="project-title">{post.title}</h2>
                                <p className="project-desc">{post.desc}</p>
                                <div className="project-tags">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>

            <div style={{ height: '100px' }}></div>
        </div>
    );
};

export default Blog;
