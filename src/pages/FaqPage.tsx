import React, { useState } from 'react';
import faqsData from '../data/faqs.json';
import { PageHeader } from '../components/PageHeader';

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <PageHeader title="Frequently Asked Questions" breadcrumbs={[{ name: 'FAQ' }]} />

      <div className="container" style={{ padding: '80px 15px', maxWidth: '900px' }}>
        <div className="section-header text-center" style={{ marginBottom: '50px' }}>
          <span className="section-subtitle">Common Questions</span>
          <h2 className="section-title">Everything You Need to Know About Our uPVC Solutions</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqsData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  border: '1px solid #ebebeb',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 6px 20px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    textAlign: 'left',
                    background: isOpen ? '#f6f3ee' : '#ffffff',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontFamily: 'var(--font-headers)',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: isOpen ? 'var(--main)' : 'var(--black)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <span>{item.q}</span>
                  <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`} style={{ color: 'var(--main)' }}></i>
                </button>

                {isOpen && (
                  <div style={{ padding: '24px', color: '#555', fontSize: '15px', lineHeight: '1.8' }}>
                    <p style={{ margin: 0 }}>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
