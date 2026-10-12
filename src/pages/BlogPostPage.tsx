import React from 'react';
import { useParams, Link } from 'react-router-dom';
import postsData from '../data/posts.json';
import { PageHeader } from '../components/PageHeader';
import { NotFoundPage } from './NotFoundPage';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = postsData.find((p) => p.slug === slug);

  if (!post) {
    return <NotFoundPage />;
  }

  const recentPosts = postsData.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <div>
      <PageHeader
        title={post.title}
        breadcrumbs={[
          { name: 'Blog', path: '/blog/' },
          { name: post.title },
        ]}
      />

      <div className="container" style={{ padding: '80px 15px' }}>
        <div className="row">
          {/* Main Article Content */}
          <div className="col-8">
            <article style={{ lineHeight: '1.9', color: '#555', fontSize: '16px' }}>
              <div style={{ marginBottom: '30px', borderRadius: '10px', overflow: 'hidden' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', maxHeight: '480px', objectFit: 'cover' }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  color: '#888',
                  fontSize: '14px',
                  marginBottom: '20px',
                }}
              >
                <span>
                  <i className="fa-regular fa-calendar" style={{ marginRight: '6px' }}></i>
                  {post.date}
                </span>
                <span>•</span>
                <span>
                  <i className="fa-regular fa-user" style={{ marginRight: '6px' }}></i>
                  White Square Team
                </span>
              </div>

              <h1 style={{ fontSize: '34px', color: 'var(--black)', marginBottom: '25px', lineHeight: '1.3' }}>
                {post.title}
              </h1>

              {/* Body */}
              <div
                dangerouslySetInnerHTML={{ __html: post.contentHtml || `<p>${post.excerpt}</p>` }}
                style={{ marginBottom: '40px' }}
              />

              {/* Share & Tag footer */}
              <div
                style={{
                  borderTop: '1px solid #eee',
                  paddingTop: '25px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Link to="/blog/" style={{ fontWeight: 700, color: 'var(--main)' }}>
                  &larr; Back to all articles
                </Link>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', color: '#777' }}>Share:</span>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#1877f2', fontSize: '18px' }}
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#25d366', fontSize: '18px' }}
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="col-4">
            <div style={{ paddingLeft: '20px' }}>
              <div
                style={{
                  backgroundColor: '#f9f9f9',
                  padding: '30px',
                  borderRadius: '10px',
                  border: '1px solid #ebebeb',
                  marginBottom: '35px',
                }}
              >
                <h4 style={{ fontSize: '20px', color: 'var(--black)', marginBottom: '20px' }}>
                  Recent Articles
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
                  {recentPosts.map((rp) => (
                    <li key={rp.id} style={{ borderBottom: '1px solid #eee', paddingBottom: '12px', marginBottom: '12px' }}>
                      <Link
                        to={`/${rp.slug}/`}
                        style={{
                          color: 'var(--black)',
                          fontWeight: 600,
                          fontSize: '15px',
                          display: 'block',
                          marginBottom: '4px',
                        }}
                      >
                        {rp.title}
                      </Link>
                      <span style={{ fontSize: '12px', color: '#999' }}>{rp.date}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Widget */}
              <div
                style={{
                  backgroundColor: 'var(--black)',
                  color: '#ffffff',
                  padding: '30px',
                  borderRadius: '10px',
                  textAlign: 'center',
                }}
              >
                <h4 style={{ color: '#ffffff', fontSize: '20px', marginBottom: '12px' }}>
                  Upgrade Your Home Today
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', marginBottom: '20px' }}>
                  Experience premium soundproofing and energy efficiency with White Square uPVC.
                </p>
                <Link to="/shop/" className="btn btn-second" style={{ width: '100%' }}>
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
