import { motion } from 'framer-motion';
import { ExternalLink, Github, Youtube } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Multi-Tenant Content Automation",
            tech: ["Next.js", "Django REST", "Celery", "Redis", "Stripe"],
            description: "SaaS platform for automated social media publishing. Features tenant isolation, OAuth2 social integration, background task processing with Celery, and Stripe billing.",
            video: "https://uploadanywherefrontend.vercel.app/",
            links: ["https://uploadanywherefrontend.vercel.app/"]
        },
        {
            title: "Full-Stack eCommerce",
            tech: ["Next.js", "Django REST", "PostgreSQL", "PayPal"],
            description: "Built a full-stack eCommerce web app. Features secure authentication, product management, shopping cart, and PayPal integration.",
            video: "https://eccomerce-django-and-next.vercel.app/",
            links: ["https://eccomerce-django-and-next.vercel.app/"]
        },
        {
            title: "Learning Management System",
            tech: ["Django", "WebSockets", "TailwindCSS", "JavaScript"],
            description: "Comprehensive LMS with role-based auth, course creation, real-time commenting via WebSockets, and educational marketplace features.",
            video: "https://uploadanywherebackend-p6gn.onrender.com",
            links: []
        },
        {
            title: "Multivendor E-Commerce App",
            tech: ["Flutter", "Riverpod", "GoRouter", "Dio", "WebSockets"],
            description: "A feature-rich multivendor marketplace with dedicated customer and vendor flows. Includes real-time chat, product discovery with advanced filtering, cart/wishlist management, and a comprehensive vendor dashboard for inventory and order tracking.",
            video: "https://github.com/Sharelove123/FlutterLiveApps/blob/main/multivendoreccomerceapp/app-release.apk",
            links: []
        },
        {
            title: "Vizzy Chat",
            tech: ["Django", "Gemini AI", "SQLite"],
            description: "An intuitive AI-powered chat interface that allows users to interact with language models, generate dynamic images and videos, and perform real-time refinements through an iterative prompting workflow.",
            video: "https://deckovizassigment-wp65.onrender.com",
            links: []
        },
        {
            title: "QuoteVault",
            tech: ["flutter", "riverpod", "supabase"],
            description: "QuoteVault is a beautiful, feature-rich Flutter application designed to inspire users with daily quotes, organized collections, and customizable sharing options. It features a modern, adaptive UI with dark/light mode support, user authentication, and cloud sync via Supabase.",
            video: "https://youtube.com/shorts/HL9XDj1AkFE?si=GxzNAZtQvWmFPAuv",
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
                                    <Youtube size={18} /> Live Demo
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
