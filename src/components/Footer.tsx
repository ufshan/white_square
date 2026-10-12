import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          {/* Left Column: Brand & Mission */}
          <div className="col-4 footer-widget-area">
            <Link to="/" className="logo">
              <img
                src="/assets/logo-square.jpg"
                alt="White Square UPVC Windoor"
                className="logo"
                style={{ maxWidth: '240px', borderRadius: '6px', marginBottom: '20px' }}
              />
            </Link>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', lineHeight: '1.7' }}>
              Our mission is to deliver high-quality products tailored to customer preferences
              while continuously introducing innovations in modern uPVC windows and doors.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="col-4 footer-widget-area">
            <h2 className="footer-heading" style={{ fontSize: '24px' }}>
              Quick Links
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2.2' }}>
              <li>
                <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop/" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services/" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about-us/" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contacts/" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq/" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/privacy/" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Privacy Policy
                </Link>
                {' · '}
                <Link to="/terms/" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact & Socials */}
          <div className="col-4 footer-widget-area">
            <h2 className="footer-heading" style={{ fontSize: '24px' }}>
              WhiteSquare upvc windoor
            </h2>
            <ul className="footer-contact-list">
              <li>
                <i className="fa-solid fa-phone"></i>
                <span>+91 9072900024 , +91 9072000006</span>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:Sales@jbwhitesquare.com" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Sales@jbwhitesquare.com
                </a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>Tirur , Malappuram , kerala</span>
              </li>
            </ul>

            <div className="footer-social-links">
              <a
                href="https://www.facebook.com/profile.php?id=61570362713205"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/whitesquareupvc?igsh=d3lidTc3dncyZWVr"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/@WhiteSquareUPVCWindoor"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-bar">
        <div className="container">
          <p style={{ margin: 0 }}>
            <Link to="/">jbWhiteSquare</Link> © All Rights Reserved - 2024 - Designed by{' '}
            <a href="https://loonyheads.com" target="_blank" rel="noopener noreferrer">
              loonyheads
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
