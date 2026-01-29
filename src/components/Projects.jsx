import { motion } from 'framer-motion';
import { ExternalLink, Github, Youtube } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Multi-Tenant Content Automation",
            tech: ["Next.js", "Django REST", "Celery", "Redis", "Stripe"],
            description: "SaaS platform for automated social media publishing. Features tenant isolation, OAuth2 social integration, background task processing with Celery, and Stripe billing.",
            video: "https://www.youtube.com/watch?v=MQLr6CvlGPA",
            links: []
        },
        {
            title: "Full-Stack eCommerce",
            tech: ["Next.js", "Django REST", "PostgreSQL", "PayPal"],
            description: "Built a full-stack eCommerce web app. Features secure authentication, product management, shopping cart, and PayPal integration.",
            video: "https://www.youtube.com/shorts/EEX6L1K_Ybc",
            links: []
        },
        {
            title: "Learning Management System",
            tech: ["Django", "WebSockets", "TailwindCSS", "JavaScript"],
            description: "Comprehensive LMS with role-based auth, course creation, real-time commenting via WebSockets, and educational marketplace features.",
            video: "https://www.youtube.com/shorts/DL3IorReKpQ",
            links: []
        },
        {
            title: "Flutter eCommerce App",
            tech: ["Flutter", "Riverpod", "Firebase"],
            description: "A beginner-friendly mobile app with Google/Facebook auth, product search, cart management, and personalized seller dashboards.",
            video: "https://www.youtube.com/watch?v=mIHrwDiWNkw",
            links: []
        }
    ];

    return (
        <section id="projects" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}
            >
                Featured <span style={{ color: 'var(--accent-color)' }}>Projects</span>
            </motion.h2>

            <div className="project-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>{project.title}</h3>

                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                            {project.tech.map(t => (
                                <span key={t} style={{ fontSize: '0.8rem', color: 'var(--accent-color)', background: 'rgba(139, 92, 246, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                            {project.description}
                        </p>

                        <div style={{ marginTop: 'auto' }}>
                            {project.video && (
                                <a
                                    href={project.video}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', width: '100%', justifyContent: 'center' }}
                                >
                                    <Youtube size={18} /> Watch Demo
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
