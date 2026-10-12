import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

export const NotFoundPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop/?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="not-found-page">
      <PageHeader
        title="404 Page Not Found"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: '404' }
        ]}
      />

      <section className="section-padding" style={{ padding: '90px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '650px', margin: '0 auto' }}>
            <h1
              style={{
                fontSize: '110px',
                lineHeight: '1',
                color: 'var(--main)',
                fontFamily: 'var(--font-headers)',
                fontWeight: 900,
                marginBottom: '15px',
                letterSpacing: '2px',
              }}
            >
              404
            </h1>
            <h2
              style={{
                fontSize: '32px',
                fontFamily: 'var(--font-headers)',
                color: 'var(--black)',
                marginBottom: '15px',
              }}
            >
              Oops! Page Not Found
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.8',
                marginBottom: '35px',
              }}
            >
              It looks like nothing was found at this location. Perhaps you've followed an outdated link or mistyped the URL. You can try searching our catalog or navigate using the links below.
            </p>

            {/* Search Box */}
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', marginBottom: '35px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search products or services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  padding: '12px 18px',
                  borderRadius: '6px',
                  border: '1px solid #ddd',
                  fontSize: '15px',
                }}
              />
              <button type="submit" className="btn btn-second" style={{ padding: '12px 24px' }}>
                Search
              </button>
            </form>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-black">
                Back to Homepage
              </Link>
              <Link to="/shop/" className="btn btn-outline">
                Browse Products
              </Link>
              <Link to="/contacts/" className="btn btn-outline">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
