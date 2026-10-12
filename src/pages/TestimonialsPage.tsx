import React from 'react';
import testimonialsData from '../data/testimonials.json';
import { PageHeader } from '../components/PageHeader';

export const TestimonialsPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Testimonials" breadcrumbs={[{ name: 'Testimonials' }]} />

      <div className="container" style={{ padding: '80px 15px' }}>
        <div className="section-header text-center" style={{ marginBottom: '60px' }}>
          <span className="section-subtitle">Client Feedback</span>
          <h2 className="section-title">What Our Customers Say About Us</h2>
        </div>

        <div className="row">
          {testimonialsData.map((item, idx) => (
            <div key={idx} className="col-4" style={{ marginBottom: '35px' }}>
              <div
                style={{
                  border: '1px solid #ebebeb',
                  borderRadius: '10px',
                  padding: '35px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ color: '#fcb900', fontSize: '18px', marginBottom: '15px' }}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star" style={{ marginRight: '4px' }}></i>
                  ))}
                </div>

                <p style={{ fontStyle: 'italic', color: '#555', lineHeight: '1.8', flexGrow: 1, marginBottom: '25px' }}>
                  "{item.text}"
                </p>

                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '15px' }}>
                  <h4 style={{ fontSize: '18px', color: 'var(--black)', margin: '0 0 4px 0' }}>
                    {item.name}
                  </h4>
                  <span style={{ fontSize: '13px', color: 'var(--main)', fontWeight: 600 }}>
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
