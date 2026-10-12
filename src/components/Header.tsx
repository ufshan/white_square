import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop/?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/shop/' },
    { name: 'Services', path: '/services/' },
    { name: 'About Us', path: '/about-us/' },
    { name: 'Contact Us', path: '/contacts/' },
  ];

  return (
    <header className="header-wrapper">
      <div className={`navbar-wrapper ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          <div className="navbar-container">
            {/* Logo */}
            <Link to="/" className="navbar-logo">
              <img
                src="/assets/jbwhite-logo-d.png"
                alt="White Square UPVC Windoor"
                style={{ maxHeight: '58px' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav>
              <ul className="navbar-nav">
                {navLinks.map((link) => {
                  const isActive =
                    link.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(link.path);
                  return (
                    <li key={link.path} className={isActive ? 'active' : ''}>
                      <Link to={link.path}>
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Icons & Contact */}
            <div className="navbar-icons">
              {/* Phone info */}
              <div className="nav-phone">
                <span className="icon icon-phone_top"></span>
                <div className="phone-details">
                  <a href="tel:+919072900024" className="phone-number">
                    +91 9072900024
                  </a>
                  <div className="phone-hours">Mo - Fr: 9:00 - 18:00</div>
                </div>
              </div>

              {/* Shopping Cart */}
              <Link to="/cart/" className="nav-cart-btn" title="View your shopping cart">
                <span className="cart-count">0</span>
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>

              {/* Search Toggle */}
              <div style={{ position: 'relative' }}>
                <button
                  type="button"
                  className="nav-search-btn"
                  onClick={() => setSearchOpen(!searchOpen)}
                  style={{ background: 'none', border: 'none', padding: 0 }}
                  aria-label="Search"
                >
                  <i className={`fa-solid ${searchOpen ? 'fa-xmark' : 'fa-magnifying-glass'}`}></i>
                </button>

                {searchOpen && (
                  <form
                    onSubmit={handleSearchSubmit}
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '40px',
                      background: '#ffffff',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      padding: '10px',
                      borderRadius: '6px',
                      display: 'flex',
                      width: '260px',
                      zIndex: 100,
                    }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      style={{ padding: '8px 12px', fontSize: '14px' }}
                    />
                    <button
                      type="submit"
                      className="btn btn-second"
                      style={{ padding: '8px 14px', marginLeft: '6px', fontSize: '13px' }}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </form>
                )}
              </div>

              {/* Mobile Hamburger */}
              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <img src="/assets/logo-square.jpg" alt="White Square" style={{ maxHeight: '50px', borderRadius: '4px' }} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#1b274f' }}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
          {navLinks.map((link) => (
            <li key={link.path} style={{ borderBottom: '1px solid #f0f0f0' }}>
              <Link
                to={link.path}
                style={{
                  display: 'block',
                  padding: '14px 0',
                  fontFamily: 'var(--font-headers)',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: location.pathname === link.path ? 'var(--main)' : 'var(--black)',
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li style={{ borderBottom: '1px solid #f0f0f0' }}>
            <Link
              to="/faq/"
              style={{
                display: 'block',
                padding: '14px 0',
                fontFamily: 'var(--font-headers)',
                fontWeight: 700,
                fontSize: '18px',
                color: 'var(--black)',
              }}
            >
              FAQ
            </Link>
          </li>
          <li style={{ borderBottom: '1px solid #f0f0f0' }}>
            <Link
              to="/team/"
              style={{
                display: 'block',
                padding: '14px 0',
                fontFamily: 'var(--font-headers)',
                fontWeight: 700,
                fontSize: '18px',
                color: 'var(--black)',
              }}
            >
              Our Team
            </Link>
          </li>
        </ul>

        {/* Contact info inside mobile drawer */}
        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #eee' }}>
          <a
            href="tel:+919072900024"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--black)',
              fontWeight: 700,
              marginBottom: '10px',
            }}
          >
            <i className="fa-solid fa-phone" style={{ color: 'var(--main)' }}></i>
            +91 9072900024
          </a>
          <div style={{ fontSize: '13px', color: '#777' }}>Mo - Fr: 9:00 - 18:00</div>
          
          <button
            type="button"
            className="btn btn-second"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenEnquiry) onOpenEnquiry();
            }}
            style={{ width: '100%', marginTop: '20px' }}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </header>
  );
};
