import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import postsData from '../data/posts.json';
import { PageHeader } from '../components/PageHeader';

export const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = postsData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <PageHeader title="Our Blog" breadcrumbs={[{ name: 'Blog' }]} />

      <div className="container" style={{ padding: '80px 15px' }}>
        {/* Search bar */}
        <div style={{ maxWidth: '500px', margin: '0 auto 50px auto' }}>
          <div style={{ display: 'flex' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ borderRadius: '4px 0 0 4px' }}
            />
            <button
              type="button"
              className="btn btn-second"
              style={{ borderRadius: '0 4px 4px 0', padding: '10px 20px' }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="row">
          {filteredPosts.map((post) => (
            <div key={post.id} className="col-4" style={{ marginBottom: '40px' }}>
              <article
                style={{
                  border: '1px solid #ebebeb',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <div style={{ height: '240px', overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                  <Link to={`/${post.slug}/`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Link>
                </div>

                <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ fontSize: '13px', color: '#888', marginBottom: '8px' }}>
                    <i className="fa-regular fa-calendar" style={{ marginRight: '6px' }}></i>
                    {post.date}
                  </div>

                  <h3 style={{ fontSize: '20px', color: 'var(--black)', marginBottom: '14px', lineHeight: '1.4' }}>
                    <Link to={`/${post.slug}/`} style={{ color: 'var(--black)' }}>
                      {post.title}
                    </Link>
                  </h3>

                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7', flexGrow: 1, marginBottom: '20px' }}>
                    {post.excerpt.length > 140 ? `${post.excerpt.slice(0, 140)}...` : post.excerpt}
                  </p>

                  <div>
                    <Link
                      to={`/${post.slug}/`}
                      className="btn btn-second"
                      style={{ padding: '8px 18px', fontSize: '12px' }}
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
