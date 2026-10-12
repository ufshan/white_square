import React from 'react';
import { PageHeader } from '../components/PageHeader';

export const TermsPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Terms and Conditions" breadcrumbs={[{ name: 'Terms and Conditions' }]} />

      <div className="container" style={{ padding: '80px 15px', maxWidth: '850px' }}>
        <div style={{ lineHeight: '1.9', color: '#555', fontSize: '16px' }}>
          <h2 style={{ fontSize: '30px', color: 'var(--black)', marginBottom: '18px' }}>
            Terms and Conditions
          </h2>
          <p>
            Please read these terms and conditions carefully before using our website and purchasing our services.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--black)', marginTop: '35px', marginBottom: '12px' }}>
            1. Acceptance of Terms
          </h3>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--black)', marginTop: '35px', marginBottom: '12px' }}>
            2. Custom Fabrication & Measurements
          </h3>
          <p>
            Because our uPVC doors and windows are custom-fabricated based on exact client architectural specifications, dimensions verified during the on-site measurement phase are finalized prior to manufacturing.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--black)', marginTop: '35px', marginBottom: '12px' }}>
            3. 10-Year Warranty
          </h3>
          <p>
            White Square uPVC profiles carry up to 10 years warranty against discoloration, warping, and manufacturing defects, subject to standard operation and maintenance guidelines.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--black)', marginTop: '35px', marginBottom: '12px' }}>
            4. Revisions
          </h3>
          <p>
            We may revise these terms of service at any time without notice. By using this website you agree to be bound by the then-current version of these terms.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--black)', marginTop: '35px', marginBottom: '12px' }}>
            5. Contact Information
          </h3>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at <strong>Sales@jbwhitesquare.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
