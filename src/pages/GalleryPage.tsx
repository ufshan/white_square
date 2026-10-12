import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';

export const GalleryPage: React.FC<{ columns?: 2 | 3 | 4 }> = ({ columns = 3 }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const galleryItems = [
    { title: 'Two Track Sliding Window', cat: 'windows', img: '/assets/product-two-track.jpg' },
    { title: 'Sliding Mosquito Frame', cat: 'installing', img: '/assets/product-mosquito.jpg' },
    { title: 'Window Sash Interlock Detail', cat: 'profiles', img: '/assets/product-sash-interlock.jpg' },
    { title: 'Z Mullion Architectural Assembly', cat: 'construction', img: '/assets/product-z-mullion.webp' },
    { title: 'Case Outer Frame Section', cat: 'windows', img: '/assets/product-case-outer.webp' },
    { title: 'Georgian Bar French Window', cat: 'interior', img: '/assets/product-georgian-bar.jpg' },
    { title: 'Modern Living Room UPVC Sliders', cat: 'interior', img: '/assets/about-window.webp' },
    { title: 'Precision Fabrication Profiles', cat: 'upvc', img: '/assets/slide_01_01.png' },
    { title: 'Factory Production Line', cat: 'upvc', img: '/assets/slide_02_01.png' },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === 'all' || item.cat === activeFilter
  );

  const colClass = columns === 2 ? 'col-6' : columns === 4 ? 'col-3' : 'col-4';

  return (
    <div>
      <PageHeader
        title={`Gallery ${columns}-columns`}
        breadcrumbs={[{ name: `Gallery ${columns}-columns` }]}
      />

      <div className="container" style={{ padding: '80px 15px' }}>
        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '50px',
          }}
        >
          {['all', 'windows', 'installing', 'interior', 'construction', 'upvc'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className="btn"
              style={{
                backgroundColor: activeFilter === cat ? 'var(--main)' : '#f6f3ee',
                color: activeFilter === cat ? '#ffffff' : 'var(--black)',
                padding: '10px 22px',
                fontSize: '14px',
                borderRadius: '25px',
                border: 'none',
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="row">
          {filteredItems.map((item, idx) => (
            <div key={idx} className={colClass} style={{ marginBottom: '30px' }}>
              <div
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#f5f5f5',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  aspectRatio: '4 / 3',
                }}
                onClick={() => setLightboxImg(item.img)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  className="gallery-thumb"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(27, 39, 79, 0.6)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    padding: '20px',
                    textAlign: 'center',
                  }}
                  className="gallery-overlay"
                >
                  <div>
                    <i className="fa-solid fa-magnifying-glass-plus" style={{ fontSize: '28px', marginBottom: '10px' }}></i>
                    <h4 style={{ color: '#ffffff', fontSize: '18px', margin: 0 }}>{item.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="modal-backdrop"
          onClick={() => setLightboxImg(null)}
          style={{ zIndex: 100000 }}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                fontSize: '32px',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
            <img
              src={lightboxImg}
              alt="Enlarged gallery view"
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                borderRadius: '8px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
