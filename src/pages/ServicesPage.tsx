import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/services.json';
import { PageHeader } from '../components/PageHeader';

export const ServicesPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="All Services" breadcrumbs={[{ name: 'Services' }]} />

      <div className="container" style={{ padding: '70px 15px' }}>
        <div className="row">
          {servicesData.map((service) => (
            <div key={service.slug} className="col-6" style={{ marginBottom: '40px' }}>
              <article
                style={{
                  border: '1px solid #ebebeb',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.03)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <span
                      className={`icon ${service.icon}`}
                      style={{ fontSize: '36px', color: 'var(--main)' }}
                    ></span>
                    <h3 style={{ margin: 0, fontSize: '24px' }}>
                      <Link to={`/services/${service.slug}/`} style={{ color: 'var(--black)' }}>
                        {service.title}
                      </Link>
                    </h3>
                  </div>

                  <p style={{ color: '#666', lineHeight: '1.7', fontSize: '15px', marginBottom: '25px', flexGrow: 1 }}>
                    {service.shortDesc}
                  </p>

                  <div>
                    <Link
                      to={`/services/${service.slug}/`}
                      className="btn btn-second"
                      style={{ padding: '10px 24px', fontSize: '13px' }}
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
