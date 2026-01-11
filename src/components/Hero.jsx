import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg"></div>
            <div className="hero-bg-2"></div>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '1.25rem', color: 'var(--accent-color)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        Full-Stack Developer
                    </h2>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: '800', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        Hi, I'm <span className="gradient-text">Rachit</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        I build scalable web and mobile applications with focus on seamless user experiences.
                        Specializing in React, Django, Flutter, and Modern Web Tech.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn btn-primary">
                            View Work <ArrowRight size={18} />
                        </a>
                        <a href="/resumewithintern.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            Resume <Download size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
