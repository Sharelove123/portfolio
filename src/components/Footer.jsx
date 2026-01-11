const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
            <p>&copy; {new Date().getFullYear()} Rachit Kumar Singh. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
