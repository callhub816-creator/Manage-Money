import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>Manage Money</h3>
                        <p className="footer-desc">
                            Your trusted partner for smart financial decisions in India. Compare cards, loans, and calculate EMIs instantly.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Products</h4>
                        <Link to="/credit-cards">Credit Cards</Link>
                        <Link to="/personal-loans">Personal Loans</Link>
                        <Link to="/cibil-score">CIBIL Score</Link>
                        <Link to="/insurance">Insurance</Link>
                    </div>

                    <div className="footer-links">
                        <h4>Tools</h4>
                        <Link to="/emi-calculator">EMI Calculator</Link>
                        <Link to="/sip-calculator">SIP Calculator</Link>
                        <Link to="/fd-calculator">FD Calculator</Link>
                        <Link to="/documents">Documents Required</Link>
                    </div>

                    <div className="footer-links">
                        <h4>Legal</h4>
                        <Link to="/about-us">About Us</Link>
                        <Link to="/contact-us">Contact Us</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-conditions">Terms & Conditions</Link>
                        <Link to="/disclaimer">Disclaimer</Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} Manage Money. All rights reserved. Made for India 🇮🇳
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
