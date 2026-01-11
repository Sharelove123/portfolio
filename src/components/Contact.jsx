import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Copy, Check } from 'lucide-react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "raworkemai1253@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="section container" style={{ textAlign: 'center', paddingBottom: '3rem' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card"
                style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}
            >
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Let's <span style={{ color: 'var(--accent-color)' }}>Connect</span></h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <a href={`mailto:${email}`} className="btn btn-primary">
                        <Mail size={20} /> Say Hello
                    </a>

                    <button onClick={handleCopy} className="btn btn-outline" style={{ cursor: 'pointer' }}>
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                        {copied ? 'Copied!' : 'Copy Email'}
                    </button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
                    <a href="https://www.linkedin.com/in/rachit-kumar-singh-862285326" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="nav-link">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/rachit-kumar-singh-862285326" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="nav-link">
                        LinkedIn
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
