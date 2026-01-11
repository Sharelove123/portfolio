import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        "Python", "JavaScript", "Dart",
        "React", "Next.js", "Django", "Django REST Framework",
        "Flutter", "Firebase", "PostgreSQL",
        "Git", "Docker", "VS Code"
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <section id="skills" className="section container">
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={container}
                viewport={{ once: true }}
            >
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>Technical <span style={{ color: 'var(--accent-color)' }}>Skills</span></h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {skills.map((skill) => (
                        <motion.span
                            key={skill}
                            variants={item}
                            className="skill-tag"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
