import React from 'react';
import teamData from '../data/team.json';
import { PageHeader } from '../components/PageHeader';

export const TeamPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Our Team" breadcrumbs={[{ name: 'Team' }]} />

      <div className="container" style={{ padding: '80px 15px' }}>
        <div className="section-header text-center" style={{ marginBottom: '50px' }}>
          <span className="section-subtitle">Dedicated Experts</span>
          <h2 className="section-title">Meet Our Leadership & Engineering Team</h2>
        </div>

        <div className="row">
          {teamData.map((member, idx) => (
            <div key={idx} className="col-3" style={{ marginBottom: '35px' }}>
              <div
                style={{
                  border: '1px solid #ebebeb',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  textAlign: 'center',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ height: '280px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '22px 15px' }}>
                  <h3 style={{ fontSize: '20px', color: 'var(--black)', marginBottom: '6px' }}>
                    {member.name}
                  </h3>
                  <span style={{ color: 'var(--main)', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase' }}>
                    {member.role}
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
