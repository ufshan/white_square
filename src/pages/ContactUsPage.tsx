import React, { useState } from 'react';
import siteInfo from '../data/site_info.json';
import { PageHeader } from '../components/PageHeader';

export const ContactUsPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div>
      <PageHeader title="Contact Us" breadcrumbs={[{ name: 'Contact Us' }]} />

      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Office, Hours & Photo */}
          <div className="row" style={{ alignItems: 'center', marginBottom: '80px' }}>
            {/* Central Office info */}
            <div className="col-4">
              <h3 style={{ fontSize: '26px', marginBottom: '10px' }}>Central Office</h3>
              <h4 style={{ color: 'var(--main)', marginBottom: '24px' }}>
                WhiteSquare upvc windoor
              </h4>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 25px 0', lineHeight: '2.2' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-phone" style={{ color: 'var(--main)' }}></i>
                  <span>+91 9072000006</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-envelope" style={{ color: 'var(--main)' }}></i>
                  <span>Sales@jbwhitesquare.com</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: 'var(--main)' }}></i>
                  <span>Tirur , Malappuram , kerala</span>
                </li>
              </ul>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href="https://www.facebook.com/profile.php?id=61559805834259&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--black)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/whitesquareupvc?igsh=d3lidTc3dncyZWVr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--black)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="col-4">
              <h3 style={{ fontSize: '26px', marginBottom: '20px' }}>Opening Hours</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2.1' }}>
                {siteInfo.hours.map((h, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ebe6dd', padding: '4px 0' }}>
                    <strong>{h.day}:</strong>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Photo */}
            <div className="col-4">
              <img
                src="/assets/office-photo.png"
                alt="White Square Central Office"
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* Send Message Form */}
          <div
            style={{
              backgroundColor: '#f6f3ee',
              padding: '60px 40px',
              borderRadius: '12px',
              maxWidth: '900px',
              margin: '0 auto 80px auto',
              border: '1px solid #ebe6dd',
            }}
          >
            <div className="section-header text-center">
              <h3 style={{ fontSize: '32px', color: 'var(--black)' }}>Send message</h3>
            </div>

            {submitted ? (
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#e6f9ee',
                  color: '#1b7f43',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 600,
                }}
              >
                <i className="fa-solid fa-circle-check" style={{ fontSize: '28px', marginBottom: '10px' }}></i>
                <p style={{ margin: 0 }}>Your message has been sent successfully! Our team will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      className="form-control"
                      rows={6}
                      placeholder="Message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="col-12 text-center" style={{ marginTop: '10px' }}>
                    <button type="submit" className="btn btn-second" style={{ minWidth: '180px' }}>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Embedded Google Map */}
          <div>
            <h3 style={{ fontSize: '26px', marginBottom: '20px', textAlign: 'center' }}>
              Our Location in Tirur, Kerala
            </h3>
            <div
              style={{
                width: '100%',
                height: '450px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              }}
            >
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62682.4920419422!2d75.83981841067605!3d10.91374542984025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b18ce2f8645d%3A0x460f5865302bbabc!2sTirur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1715668540878!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
