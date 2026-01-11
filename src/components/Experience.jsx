import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}
            >
                Work <span style={{ color: 'var(--accent-color)' }}>Experience</span>
            </motion.h2>

            <div style={{ position: 'relative', borderLeft: '2px solid var(--glass-border)', paddingLeft: '2rem', marginLeft: '1rem' }}>
                <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'relative' }}
                >
                    {/* Timeline Dot */}
                    <div style={{
                        position: 'absolute',
                        left: '-2.6rem',
                        top: '1.5rem',
                        width: '1rem',
                        height: '1rem',
                        background: 'var(--accent-color)',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px var(--accent-color)'
                    }}></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem', gap: '0.5rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Flutter Tech Intern</h3>
                            <div style={{ fontSize: '1.1rem', color: 'var(--accent-color)', fontWeight: '500' }}>Khwaaish</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                <Calendar size={16} /> Jan 2026 – Present
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', justifyContent: 'flex-end', marginTop: '0.25rem' }}>
                                <MapPin size={16} /> Remote
                            </div>
                        </div>
                    </div>

                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li>Developed and maintained cross-platform mobile application features using Flutter and Dart, following clean architecture.</li>
                        <li>Integrated RESTful APIs to handle user authentication, data retrieval, and dynamic content rendering across multiple screens.</li>
                        <li>Integrated Google Maps for real-time location display, markers, and geolocation features to enhance user experience.</li>
                        <li>Collaborated with backend developers and designers to debug issues, optimize performance, and deliver features on schedule.</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
