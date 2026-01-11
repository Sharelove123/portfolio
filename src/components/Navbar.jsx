import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--glass-bg)] backdrop-blur-md border-b border-[var(--glass-border)]' : 'bg-transparent'}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            background: scrolled ? 'rgba(17, 24, 39, 0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
            padding: '1rem 0'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    Rachit<span style={{ color: 'var(--accent-color)' }}>.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex" style={{ display: 'none' }}>
                    {/* Note: In pure CSS approach without Tailwind, I need media queries in App.css for 'hidden'. 
               For now, I'll use inline styles with a window resize listener or just CSS classes.
               I'll rely on CSS classes from App.css or global.css. 
               Let's assume standard CSS media queries in global.css handling .desktop-menu and .mobile-menu-btn
           */}
                    {/* Actually I'll implement the CSS classes in global.css properly later or use inline logic briefly? 
               Better, let's stick to using classNames and ensure I add the media queries to global.css 
           */}
                </div>

                {/* I will use a simple CSS class based approach */}
                <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="nav-link" style={{ fontSize: '0.95rem', fontWeight: '500' }}>{link.name}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'none' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="mobile-menu glass-card" style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2rem',
                    gap: '1.5rem',
                    borderTop: '1px solid var(--glass-border)',
                    background: 'var(--bg-color)'
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{ fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'center' }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
