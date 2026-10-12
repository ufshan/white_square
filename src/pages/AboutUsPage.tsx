import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

export const AboutUsPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="About Us" breadcrumbs={[{ name: 'About Us' }]} />

      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'center', marginBottom: '70px' }}>
            {/* Image Column */}
            <div className="col-6">
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#ffffff',
                  padding: '15px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                  border: '1px solid #ebebeb',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '30px',
                    left: '-20px',
                    backgroundColor: 'var(--black)',
                    color: '#ffffff',
                    padding: '16px 28px',
                    borderRadius: '8px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    zIndex: 2,
                  }}
                >
                  <h2 style={{ fontSize: '20px', color: '#ffffff', margin: 0 }}>White Square</h2>
                  <span style={{ color: 'var(--main)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    upvc windoor
                  </span>
                </div>
                <img
                  src="/assets/about-window.webp"
                  alt="Modern UPVC Sliding Window"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="col-6">
              <div style={{ paddingLeft: '20px' }}>
                <h2 style={{ fontSize: '34px', color: 'var(--black)', marginBottom: '20px' }}>
                  Your Trusted Partner in Construction
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                  J B White Squire, founded in 2007, is a leading supplier of construction materials based in Tamil Nadu, Coimbatore. Specializing in South India, Kerala, and Karnataka, we prioritize sustainability and environmental harmony in our innovative building materials. Our mission is to deliver high-quality products tailored to customer preferences while continuously introducing innovations.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                  We use eco-friendly UPVC Technology in partnership with Prominance, ensuring our products are both customer-friendly and environmentally conscious. We believe in building a sustainable future for generations to come.
                </p>
                <Link to="/contacts/" className="btn btn-second" style={{ marginTop: '10px' }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div
            style={{
              backgroundColor: '#f6f3ee',
              padding: '50px',
              borderRadius: '12px',
              border: '1px solid #e9e5dc',
              marginBottom: '60px',
            }}
          >
            <span className="section-subtitle">Our vision</span>
            <h2 style={{ fontSize: '30px', marginBottom: '18px' }}>
              We want to lead in innovation & creativity
            </h2>
            <div className="row">
              <div className="col-6">
                <p style={{ lineHeight: '1.8', color: '#555' }}>
                  Our commitment is to innovate in building materials, adapting to changing needs while prioritizing sustainability. We aim to earn trust by delivering high-quality products tailored to your preferences.
                </p>
              </div>
              <div className="col-6">
                <p style={{ lineHeight: '1.8', color: '#555' }}>
                  At J B White Squire, we strive to constantly innovate construction materials, catering to the needs of every new generation. We provide the facilities needed to satisfy each new generation's demands.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Partner Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '40px',
              border: '1px solid #ebebeb',
              boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
            }}
          >
            <h2 style={{ fontSize: '28px', marginBottom: '24px', color: 'var(--black)' }}>
              Our Technical partner
            </h2>
            <div className="row" style={{ alignItems: 'center' }}>
              <div className="col-4">
                <img
                  src="/assets/prominance-partner.jpg"
                  alt="Prominance Window Systems"
                  style={{ borderRadius: '8px', maxWidth: '100%' }}
                />
              </div>
              <div className="col-8">
                <h3 style={{ fontSize: '24px', marginBottom: '14px', color: 'var(--black)' }}>
                  Prominance window systems
                </h3>
                <p style={{ margin: 0, lineHeight: '1.8', color: '#555', fontSize: '16px' }}>
                  Prominance’s uPVC windows present an exquisite coming together of form and function. The profiles meet various requirements right from the budget apartments to palatial villas and commercial establishments – through structural design that can withstand rough weather conditions and wear & tear, ensuring Quality consistency and durability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
