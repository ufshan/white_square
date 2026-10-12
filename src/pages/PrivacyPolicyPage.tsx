import React from 'react';
import { PageHeader } from '../components/PageHeader';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Privacy Policy" breadcrumbs={[{ name: 'Privacy Policy' }]} />

      <div className="container" style={{ padding: '80px 15px', maxWidth: '850px' }}>
        <div style={{ lineHeight: '1.9', color: '#555', fontSize: '16px' }}>
          <h2 style={{ fontSize: '30px', color: 'var(--black)', marginBottom: '18px' }}>
            Privacy Policy
          </h2>
          <p>
            This privacy policy describes how White Square UPVC Windoor collects, uses, and protects your personal information when you use our website and services.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--black)', marginTop: '35px', marginBottom: '12px' }}>
            1. Information We Collect
          </h3>
          <p>
            We collect information that you provide directly to us, such as when you submit an enquiry form, schedule a measurement, create an account, or contact us for support. This may include your name, email address, phone number, and architectural location preferences.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--black)', marginTop: '35px', marginBottom: '12px' }}>
            2. How We Use Your Information
          </h3>
          <p>We use the information we collect to:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Process and fulfill your window & door measurement and fabrication requests</li>
            <li>Send you order confirmations, quotes, and installation updates</li>
            <li>Respond to your comments, questions, and customer support enquiries</li>
            <li>Improve our website, product offerings, and delivery experience</li>
            <li>Send you product updates and maintenance advice (with your consent)</li>
          </ul>

          <h3 style={{ fontSize: '22px', color: 'var(--black)', marginTop: '35px', marginBottom: '12px' }}>
            3. Information Sharing
          </h3>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share necessary details with verified delivery technicians and installation partners solely for completing your project.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--black)', marginTop: '35px', marginBottom: '12px' }}>
            4. Data Security
          </h3>
          <p>
            We implement appropriate industry security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--black)', marginTop: '35px', marginBottom: '12px' }}>
            5. Your Rights
          </h3>
          <p>
            You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving promotional communications.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--black)', marginTop: '35px', marginBottom: '12px' }}>
            6. Contact Us
          </h3>
          <p>
            For any questions regarding this Privacy Policy, please contact us at <strong>Sales@jbwhitesquare.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
