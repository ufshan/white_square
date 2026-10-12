import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

export const ElementsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const activeElement = slug || 'buttons';

  const [activeTab, setActiveTab] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(0);

  const elementTypes = [
    { slug: 'buttons', title: 'Buttons' },
    { slug: 'accordions', title: 'Accordions' },
    { slug: 'tabs', title: 'Tabs' },
    { slug: 'forms', title: 'Forms' },
    { slug: 'icons-page', title: 'Icons' },
    { slug: 'table', title: 'Table' },
  ];

  return (
    <div>
      <PageHeader
        title={`Elements: ${activeElement.replace(/-/g, ' ').toUpperCase()}`}
        breadcrumbs={[
          { name: 'Elements', path: '/elements/' },
          { name: activeElement },
        ]}
      />

      <div className="container" style={{ padding: '80px 15px' }}>
        <div className="row">
          {/* Elements Navigation Sidebar */}
          <div className="col-4">
            <div
              style={{
                backgroundColor: '#f6f3ee',
                padding: '30px',
                borderRadius: '10px',
                border: '1px solid #ebe6dd',
                marginBottom: '30px',
              }}
            >
              <h4 style={{ fontSize: '20px', color: 'var(--black)', marginBottom: '20px' }}>
                Element Types
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2.4' }}>
                {elementTypes.map((el) => (
                  <li key={el.slug} style={{ borderBottom: '1px solid #e2ddd5' }}>
                    <Link
                      to={`/elements/${el.slug}/`}
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-headers)',
                        fontWeight: 700,
                        color: activeElement === el.slug ? 'var(--main)' : 'var(--black)',
                        fontSize: '15px',
                        padding: '4px 0',
                      }}
                    >
                      {el.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Preview Main Area */}
          <div className="col-8">
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #ebebeb',
                borderRadius: '10px',
                padding: '40px',
                boxShadow: '0 5px 25px rgba(0,0,0,0.03)',
              }}
            >
              {activeElement === 'buttons' && (
                <div>
                  <h3 style={{ marginBottom: '20px' }}>Button Styles</h3>
                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '30px' }}>
                    <button className="btn btn-second">Cyan Button (Second)</button>
                    <button className="btn btn-black">Black Button</button>
                    <button className="btn btn-gray">Dark Blue Button</button>
                  </div>

                  <h4 style={{ marginTop: '30px', marginBottom: '15px' }}>WhatsApp CTA Button</h4>
                  <button className="enquire-wa-btn" style={{ border: 'none', cursor: 'pointer' }}>
                    <i className="fa-brands fa-whatsapp"></i>
                    Enquire Now
                  </button>
                </div>
              )}

              {activeElement === 'accordions' && (
                <div>
                  <h3 style={{ marginBottom: '20px' }}>Accordions</h3>
                  {[
                    { title: 'Standard Double Glazed uPVC Window', desc: 'Superior soundproofing and acoustic dampening for homes in busy urban corridors.' },
                    { title: 'Sliding Mosquito Net System', desc: 'Custom integrated insect screens with ultra-durable nylon and fiberglass mesh options.' },
                    { title: 'Lead-Free Certified Prominance Profile', desc: 'Environmentally safe and eco-friendly composition certified to RoHS safety benchmarks.' },
                  ].map((item, idx) => (
                    <div key={idx} style={{ border: '1px solid #eee', borderRadius: '6px', marginBottom: '12px', overflow: 'hidden' }}>
                      <button
                        type="button"
                        onClick={() => setAccordionOpen(accordionOpen === idx ? null : idx)}
                        style={{
                          width: '100%',
                          padding: '16px 20px',
                          textAlign: 'left',
                          background: accordionOpen === idx ? '#f6f3ee' : '#fff',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: 700,
                          fontSize: '16px',
                          color: accordionOpen === idx ? 'var(--main)' : 'var(--black)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        {item.title}
                        <i className={`fa-solid ${accordionOpen === idx ? 'fa-minus' : 'fa-plus'}`}></i>
                      </button>
                      {accordionOpen === idx && (
                        <div style={{ padding: '20px', color: '#555', fontSize: '15px', lineHeight: '1.7' }}>
                          {item.desc}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeElement === 'tabs' && (
                <div>
                  <h3 style={{ marginBottom: '20px' }}>Interactive Tabs</h3>
                  <div style={{ display: 'flex', gap: '20px', borderBottom: '2px solid #eee', marginBottom: '25px' }}>
                    {['Product Overview', 'Technical Specs', 'Warranty'].map((t, i) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setActiveTab(i)}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: '10px 15px',
                          fontWeight: 700,
                          fontSize: '16px',
                          color: activeTab === i ? 'var(--main)' : 'var(--black)',
                          borderBottom: activeTab === i ? '3px solid var(--main)' : 'none',
                          cursor: 'pointer',
                          marginBottom: '-2px',
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div style={{ lineHeight: '1.8', color: '#555' }}>
                    {activeTab === 0 && <p>All White Square profiles are engineered for tropical climates with multi-chamber heat resistance.</p>}
                    {activeTab === 1 && <p>Profile wall thickness: 2.2mm - 2.5mm. Internal reinforcement: Galvanized steel 1.2mm.</p>}
                    {activeTab === 2 && <p>Guaranteed 10-year profile color-stability and resistance against warping or yellowing.</p>}
                  </div>
                </div>
              )}

              {activeElement === 'icons-page' && (
                <div>
                  <h3 style={{ marginBottom: '20px' }}>Windazo Custom Icons</h3>
                  <div className="row">
                    {[
                      { icon: 'icon-single', name: 'Single' },
                      { icon: 'icon-standard', name: 'Standard' },
                      { icon: 'icon-wide', name: 'Wide' },
                      { icon: 'icon-vintage', name: 'Vintage' },
                      { icon: 'icon-office', name: 'Office' },
                      { icon: 'icon-decorative', name: 'Decorative' },
                      { icon: 'icon-green-energy', name: 'Energy' },
                      { icon: 'icon-sound', name: 'Sound' },
                      { icon: 'icon-sun', name: 'Sun' },
                      { icon: 'icon-protect', name: 'Warranty' },
                      { icon: 'icon-leaf', name: 'Eco' },
                      { icon: 'icon-pantone', name: 'Design' },
                    ].map((item, idx) => (
                      <div key={idx} className="col-4" style={{ textAlign: 'center', marginBottom: '25px' }}>
                        <span className={`icon ${item.icon}`} style={{ fontSize: '42px', color: 'var(--main)', display: 'block', marginBottom: '8px' }}></span>
                        <span style={{ fontSize: '13px', fontWeight: 600 }}>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeElement === 'forms' && (
                <div>
                  <h3 style={{ marginBottom: '20px' }}>Form Controls</h3>
                  <div className="form-group">
                    <label>Text Field</label>
                    <input type="text" className="form-control" placeholder="Enter text..." />
                  </div>
                  <div className="form-group">
                    <label>Select Field</label>
                    <select className="form-control">
                      <option>Sliding Window</option>
                      <option>Casement Window</option>
                      <option>French Door</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Textarea</label>
                    <textarea className="form-control" rows={3} placeholder="Enter message..."></textarea>
                  </div>
                  <button className="btn btn-second">Submit Form</button>
                </div>
              )}

              {activeElement === 'table' && (
                <div>
                  <h3 style={{ marginBottom: '20px' }}>Specifications Table</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                    <thead>
                      <tr style={{ backgroundColor: 'var(--black)', color: '#fff' }}>
                        <th style={{ padding: '12px' }}>Parameter</th>
                        <th style={{ padding: '12px' }}>White Square uPVC</th>
                        <th style={{ padding: '12px' }}>Aluminium</th>
                        <th style={{ padding: '12px' }}>Wood</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '12px' }}>Thermal Insulation</td>
                        <td style={{ padding: '12px', color: '#2e7d32', fontWeight: 700 }}>Excellent</td>
                        <td style={{ padding: '12px' }}>Poor</td>
                        <td style={{ padding: '12px' }}>Good</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '12px' }}>Maintenance Required</td>
                        <td style={{ padding: '12px', color: '#2e7d32', fontWeight: 700 }}>Zero</td>
                        <td style={{ padding: '12px' }}>Moderate</td>
                        <td style={{ padding: '12px' }}>High (Varnish/Paint)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '12px' }}>Sound Dampening</td>
                        <td style={{ padding: '12px', color: '#2e7d32', fontWeight: 700 }}>Up to 40 dB</td>
                        <td style={{ padding: '12px' }}>Up to 25 dB</td>
                        <td style={{ padding: '12px' }}>Up to 30 dB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
