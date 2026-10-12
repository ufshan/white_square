import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import servicesData from '../data/services.json';
import { PageHeader } from '../components/PageHeader';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [ctaName, setCtaName] = useState('');
  const [ctaPhone, setCtaPhone] = useState('');
  const [ctaSubmitted, setCtaSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormName('');
      setFormEmail('');
      setFormMessage('');
      setFormSubmitted(false);
    }, 4000);
  };

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ctaName || !ctaPhone) return;
    setCtaSubmitted(true);
    setTimeout(() => {
      setCtaName('');
      setCtaPhone('');
      setCtaSubmitted(false);
    }, 4000);
  };

  return (
    <div>
      <PageHeader
        title={service.title}
        breadcrumbs={[
          { name: 'Services', path: '/services/' },
          { name: service.title },
        ]}
      />

      <div className="container" style={{ padding: '70px 15px' }}>
        <div className="row centered" style={{ justifyContent: 'center' }}>
          <div className="col-8">
            <article style={{ lineHeight: '1.9', color: '#555', fontSize: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <span
                  className={`icon ${service.icon}`}
                  style={{ fontSize: '48px', color: 'var(--main)' }}
                ></span>
                <h1 style={{ fontSize: '36px', color: 'var(--black)', margin: 0 }}>
                  {service.title}
                </h1>
              </div>

              <p style={{ fontSize: '18px', color: '#444', fontWeight: 500, marginBottom: '30px' }}>
                {service.shortDesc}
              </p>

              {/* Service Detailed Sections */}
              <div style={{ margin: '30px 0' }}>
                <h3 style={{ fontSize: '22px', color: 'var(--black)', marginBottom: '15px' }}>
                  Features & Advantages
                </h3>
                <ul style={{ paddingLeft: '20px', marginBottom: '25px' }}>
                  <li><strong>Cost-effective:</strong> High thermal efficiency leads to significant heating & air conditioning savings</li>
                  <li><strong>Design Freedom:</strong> Wide variety of profiles, colors, sizes, and architectural designs</li>
                  <li><strong>Fire Retardant:</strong> Tested and certified fire-resistant materials ensuring home safety</li>
                  <li><strong>Bug Mesh Option:</strong> Integrated mosquito mesh frames for undisturbed ventilation</li>
                  <li><strong>100% UV Resistance:</strong> Enhanced with TiO2 to protect whiteness from intense sunlight</li>
                </ul>

                <h3 style={{ fontSize: '22px', color: 'var(--black)', marginBottom: '15px' }}>
                  Why Choose JB White Square Services?
                </h3>
                <p>
                  At JB Whitesquare, in technical partnership with Prominance Window Systems, our profiles undergo rigorous quality checks to withstand tropical weather conditions and coastal climates across Kerala, Tamil Nadu, and Karnataka. We ensure fast, clean, and reliable installation backed by a comprehensive 10-year warranty.
                </p>
              </div>

              {/* Service Enquiry Form */}
              <div
                style={{
                  backgroundColor: '#f6f3ee',
                  padding: '35px',
                  borderRadius: '10px',
                  border: '1px solid #ebe6dd',
                  marginTop: '40px',
                }}
              >
                <h3 style={{ fontSize: '22px', marginBottom: '15px', color: 'var(--black)' }}>
                  Enquire About {service.title}
                </h3>
                {formSubmitted ? (
                  <div style={{ color: '#2e7d32', fontWeight: 600, padding: '10px 0' }}>
                    Thank you! Your enquiry has been submitted. Our team will contact you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="row">
                      <div className="col-6 form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your name"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                        />
                      </div>
                      <div className="col-6 form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-12 form-group">
                        <textarea
                          className="form-control"
                          rows={4}
                          placeholder="Message"
                          value={formMessage}
                          onChange={(e) => setFormMessage(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-second">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </article>

            {/* Bottom CTA Box */}
            <div
              style={{
                backgroundColor: 'var(--black)',
                color: '#ffffff',
                padding: '40px',
                borderRadius: '10px',
                marginTop: '50px',
              }}
            >
              <h6 style={{ color: 'var(--main)', margin: '0 0 6px 0', fontSize: '14px', textTransform: 'uppercase' }}>
                Contact Us
              </h6>
              <h3 style={{ color: '#ffffff', margin: '0 0 10px 0', fontSize: '28px' }}>
                Schedule a Free Consultation
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '25px' }}>
                Get in touch with us for measurements, samples, and customized quotes.
              </p>

              {ctaSubmitted ? (
                <div style={{ color: '#25d366', fontWeight: 600 }}>
                  Request received! We will call you within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleCtaSubmit}>
                  <div className="row">
                    <div className="col-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name*"
                        required
                        value={ctaName}
                        onChange={(e) => setCtaName(e.target.value)}
                      />
                    </div>
                    <div className="col-6 form-group">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Your phone*"
                        required
                        value={ctaPhone}
                        onChange={(e) => setCtaPhone(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-second" style={{ width: '100%' }}>
                        Send request
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
