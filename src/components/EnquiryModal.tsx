import React, { useState } from 'react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle?: string;
  productName?: string;
  productSlug?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  productTitle,
  productName,
  productSlug,
}) => {
  const activeTitle = productTitle || productName || '';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState(
    activeTitle ? `I am interested in ${activeTitle}. Please share pricing and measurement details.` : ''
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !mobile.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    // Save submission to localStorage so it is persistently retained!
    const enquiries = JSON.parse(localStorage.getItem('whitesquare_enquiries') || '[]');
    enquiries.push({
      name,
      email,
      mobile,
      message,
      product: activeTitle || 'General Enquiry',
      slug: productSlug || '',
      date: new Date().toISOString(),
    });
    localStorage.setItem('whitesquare_enquiries', JSON.stringify(enquiries));

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setEmail('');
        setMobile('');
        setMessage('');
        onClose();
      }, 2500);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello jb whitesquare! I'm interested in purchasing ${productTitle || 'UPVC Windows & Doors'}.\nName: ${name || 'Customer'}\nPhone: ${mobile || 'N/A'}\nMessage: ${message || 'Please contact me.'}`
    );
    window.open(`https://api.whatsapp.com/send?phone=919072000006&text=${text}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <h2 style={{ fontSize: '26px', color: 'var(--black)', marginBottom: '8px' }}>
          Enquiry Form
        </h2>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '22px' }}>
          {productTitle ? (
            <>
              Inquiring about: <strong>{productTitle}</strong>
            </>
          ) : (
            'Fill out the form below and our team will get back to you promptly.'
          )}
        </p>

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
            <p style={{ margin: 0 }}>Enquiry submitted successfully!</p>
            <p style={{ fontSize: '13px', color: '#2e7d32', marginTop: '6px' }}>
              Our manager will contact you for details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && (
              <div
                style={{
                  padding: '10px 14px',
                  backgroundColor: '#fde8e8',
                  color: '#c81e1e',
                  borderRadius: '6px',
                  fontSize: '13px',
                  marginBottom: '15px',
                }}
              >
                {error}
              </div>
            )}

            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Your Email *</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Your Mobile Number *</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Mobile Number (e.g. +91 9072900024)"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Your Message *</label>
              <textarea
                className="form-control"
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button
                type="submit"
                className="btn btn-second"
                style={{ flex: 1, padding: '12px' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="btn"
                style={{
                  backgroundColor: '#25d366',
                  color: '#ffffff',
                  padding: '12px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                title="Send via WhatsApp"
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i>
                WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
