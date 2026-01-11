import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>About <span style={{ color: 'var(--accent-color)' }}>Me</span></h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                            I am a results-driven Full-Stack Developer with a passion for building scalable solutions.
                            Currently pursuing my B.Tech at Global Engineering College (2022-2026).
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                            My expertise spans across mobile and web development, leveraging technologies like
                            <span style={{ color: 'white' }}> Flutter, React, Next.js, and Django</span>.
                            I thrive in solving complex problems, from real-time geolocation features to secure authentication systems.
                        </p>
                    </div>

                    <div className="glass-card">
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Education</h3>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <h4 style={{ fontWeight: '600' }}>B.Tech (Computer Science)</h4>
                                <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>2022 - 2026</span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Global Engineering College, Jabalpur</p>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <h4 style={{ fontWeight: '600' }}>Higher Education</h4>
                                <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>2022</span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Kendriya Vidyalaya No. 1, Goa</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
