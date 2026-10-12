import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

export const CheckoutPage: React.FC = () => {
  const [placed, setPlaced] = useState(false);

  return (
    <div>
      <PageHeader title="Checkout" breadcrumbs={[{ name: 'Checkout' }]} />

      <div className="container" style={{ padding: '80px 15px', maxWidth: '850px' }}>
        {placed ? (
          <div
            style={{
              backgroundColor: '#e6f9ee',
              border: '1px solid #25d366',
              borderRadius: '10px',
              padding: '40px',
              textAlign: 'center',
              color: '#1b7f43',
            }}
          >
            <i className="fa-solid fa-circle-check" style={{ fontSize: '42px', marginBottom: '15px' }}></i>
            <h2>Thank you! Your order inquiry has been received.</h2>
            <p>Our sales executive will contact you to confirm custom frame measurements.</p>
            <Link to="/shop/" className="btn btn-second" style={{ marginTop: '20px' }}>
              Return to Catalog
            </Link>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #ebebeb',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 6px 25px rgba(0,0,0,0.04)',
            }}
          >
            <h2 style={{ fontSize: '26px', color: 'var(--black)', marginBottom: '24px' }}>
              Billing & Contact Details
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setPlaced(true);
              }}
            >
              <div className="row">
                <div className="col-6 form-group">
                  <label>First Name *</label>
                  <input type="text" className="form-control" required placeholder="First name" />
                </div>
                <div className="col-6 form-group">
                  <label>Last Name *</label>
                  <input type="text" className="form-control" required placeholder="Last name" />
                </div>
                <div className="col-12 form-group">
                  <label>Street Address *</label>
                  <input type="text" className="form-control" required placeholder="House number and street name" />
                </div>
                <div className="col-6 form-group">
                  <label>Town / City *</label>
                  <input type="text" className="form-control" required placeholder="City / Town" />
                </div>
                <div className="col-6 form-group">
                  <label>State *</label>
                  <input type="text" className="form-control" required defaultValue="Kerala" />
                </div>
                <div className="col-6 form-group">
                  <label>Phone *</label>
                  <input type="tel" className="form-control" required placeholder="+91 9072900024" />
                </div>
                <div className="col-6 form-group">
                  <label>Email Address *</label>
                  <input type="email" className="form-control" required placeholder="email@domain.com" />
                </div>
                <div className="col-12 form-group">
                  <label>Order Notes (Optional)</label>
                  <textarea className="form-control" rows={3} placeholder="Notes about your order or custom sizing"></textarea>
                </div>
              </div>

              <div style={{ marginTop: '25px', borderTop: '1px solid #eee', paddingTop: '25px' }}>
                <button type="submit" className="btn btn-second" style={{ width: '100%', padding: '14px' }}>
                  Place Order Inquiry
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
