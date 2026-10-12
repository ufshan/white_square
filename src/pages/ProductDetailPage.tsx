import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { PageHeader } from '../components/PageHeader';
import { EnquiryModal } from '../components/EnquiryModal';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = productsData.find((p) => p.slug === slug) || productsData[0];
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');
  const [modalOpen, setModalOpen] = useState(false);

  // Reviews state
  const [reviews, setReviews] = useState<{ author: string; text: string; date: string }[]>([]);
  const [authorName, setAuthorName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const relatedProducts = productsData.filter((p) => p.slug !== product.slug).slice(0, 3);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;
    setReviews([
      ...reviews,
      { author: authorName, text: reviewText, date: new Date().toLocaleDateString() },
    ]);
    setReviewSubmitted(true);
    setAuthorName('');
    setReviewText('');
    setTimeout(() => setReviewSubmitted(false), 4000);
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(product.waMessage);
    window.open(`https://api.whatsapp.com/send?phone=919072000006&text=${text}`, '_blank');
  };

  return (
    <div>
      <PageHeader
        title={product.name}
        breadcrumbs={[
          { name: 'Products', path: '/shop/' },
          { name: product.name },
        ]}
      />

      <div className="container" style={{ padding: '70px 15px' }}>
        <div className="row" style={{ marginBottom: '60px' }}>
          {/* Product Image */}
          <div className="col-6">
            <div
              style={{
                border: '1px solid #ebebeb',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#fbfbfb',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', maxHeight: '520px', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Product Summary */}
          <div className="col-6">
            <div style={{ paddingLeft: '20px' }}>
              <h1 style={{ fontSize: '36px', color: 'var(--black)', marginBottom: '15px' }}>
                {product.name}
              </h1>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '20px',
                  color: '#777',
                  fontSize: '14px',
                }}
              >
                <span>Categories:</span>
                {(product.categories as string[]).map((c: string, i: number) => (
                  <Link
                    key={c}
                    to={`/product-category/${c.toLowerCase()}/`}
                    style={{ color: 'var(--main)', fontWeight: 600 }}
                  >
                    {c}
                    {i < product.categories.length - 1 ? ', ' : ''}
                  </Link>
                ))}
              </div>

              <div
                style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#555',
                  marginBottom: '30px',
                  borderTop: '1px solid #f0f0f0',
                  paddingTop: '20px',
                }}
              >
                <p>{product.excerpt}</p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '30px' }}>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="enquire-wa-btn"
                  style={{ border: 'none', cursor: 'pointer', fontSize: '15px', padding: '14px 28px' }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i>
                  <span>Enquire via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="btn btn-black"
                >
                  Request Quote
                </button>
              </div>

              {/* Guarantees Box */}
              <div
                style={{
                  backgroundColor: '#f6f3ee',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #e9e5dc',
                  fontSize: '14px',
                  lineHeight: '1.7',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <i className="fa-solid fa-shield-halved" style={{ color: 'var(--main)' }}></i>
                  <strong>10-Year Quality Warranty</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <i className="fa-solid fa-ruler-combined" style={{ color: 'var(--main)' }}></i>
                  <strong>Free Professional Measurement Across South India</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-leaf" style={{ color: 'var(--main)' }}></i>
                  <strong>100% Lead-Free & Eco-friendly uPVC Profile</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs: Description & Reviews */}
        <div style={{ borderTop: '1px solid #e2ddd5', paddingTop: '40px', marginBottom: '70px' }}>
          <div style={{ display: 'flex', gap: '20px', borderBottom: '2px solid #f0f0f0', marginBottom: '30px' }}>
            <button
              type="button"
              onClick={() => setActiveTab('description')}
              style={{
                background: 'none',
                border: 'none',
                padding: '12px 20px',
                fontFamily: 'var(--font-headers)',
                fontWeight: 700,
                fontSize: '18px',
                cursor: 'pointer',
                color: activeTab === 'description' ? 'var(--main)' : 'var(--black)',
                borderBottom: activeTab === 'description' ? '3px solid var(--main)' : 'none',
                marginBottom: '-2px',
              }}
            >
              Description
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('reviews')}
              style={{
                background: 'none',
                border: 'none',
                padding: '12px 20px',
                fontFamily: 'var(--font-headers)',
                fontWeight: 700,
                fontSize: '18px',
                cursor: 'pointer',
                color: activeTab === 'reviews' ? 'var(--main)' : 'var(--black)',
                borderBottom: activeTab === 'reviews' ? '3px solid var(--main)' : 'none',
                marginBottom: '-2px',
              }}
            >
              Reviews ({reviews.length})
            </button>
          </div>

          {activeTab === 'description' ? (
            <div style={{ lineHeight: '1.9', color: '#555', fontSize: '16px' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Product Overview</h2>
              <p>{product.content || product.excerpt}</p>

              <h3 style={{ fontSize: '20px', marginTop: '25px', marginBottom: '14px' }}>Key Specifications</h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Precision engineered high-grade uPVC profiles tested against tropical weathering</li>
                <li>Multiple chambers designed to maximize thermal insulation and acoustic dampening</li>
                <li>Reinforced internal galvanized steel cores for extreme structural rigidity</li>
                <li>High security multi-point locking mechanism compatibility</li>
                <li>Ultra low maintenance: does not corrode, rot, peel, or require repainting</li>
                <li>Compliant with international building and energy conservation standards</li>
              </ul>
            </div>
          ) : (
            <div>
              <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>
                Customer Reviews
              </h2>
              {reviews.length === 0 ? (
                <p style={{ color: '#777' }}>There are no reviews yet. Be the first to review "{product.name}".</p>
              ) : (
                <div style={{ marginBottom: '30px' }}>
                  {reviews.map((r, i) => (
                    <div key={i} style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
                      <div style={{ fontWeight: 700, color: 'var(--black)' }}>{r.author}</div>
                      <div style={{ fontSize: '12px', color: '#888', marginBottom: '6px' }}>{r.date}</div>
                      <p style={{ margin: 0 }}>{r.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Add Review Form */}
              <div
                style={{
                  maxWidth: '600px',
                  backgroundColor: '#f9f9f9',
                  padding: '30px',
                  borderRadius: '8px',
                  border: '1px solid #eee',
                }}
              >
                <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Add a Review</h3>
                {reviewSubmitted ? (
                  <p style={{ color: '#2e7d32', fontWeight: 600 }}>Thank you! Your review has been submitted.</p>
                ) : (
                  <form onSubmit={handleReviewSubmit}>
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Your Review *</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        required
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-second" style={{ marginTop: '10px' }}>
                      Submit Review
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div>
          <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>Related Products</h2>
          <div className="row">
            {relatedProducts.map((rel) => (
              <div key={rel.id} className="col-4">
                <div className="product-card">
                  <div className="product-img-wrap">
                    <Link to={`/product/${rel.slug}/`}>
                      <img src={rel.image} alt={rel.name} />
                    </Link>
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">
                      <Link to={`/product/${rel.slug}/`}>{rel.name}</Link>
                    </h3>
                    <p className="product-excerpt">{rel.excerpt}</p>
                    <Link to={`/product/${rel.slug}/`} className="btn btn-second" style={{ textAlign: 'center' }}>
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productTitle={product.name}
        productSlug={product.slug}
      />
    </div>
  );
};
