import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

export const CartPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Cart" breadcrumbs={[{ name: 'Cart' }]} />

      <div className="container" style={{ padding: '80px 15px', textAlign: 'center', maxWidth: '750px' }}>
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #ebebeb',
            borderRadius: '12px',
            padding: '60px 30px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#f6f3ee',
              color: 'var(--main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              margin: '0 auto 24px auto',
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </div>

          <h2 style={{ fontSize: '28px', color: 'var(--black)', marginBottom: '14px' }}>
            Your Cart is Currently Empty
          </h2>
          <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
            Before proceed to checkout you must add some products to your shopping cart.
            Browse our catalog of high quality uPVC window and door profiles.
          </p>

          <Link to="/shop/" className="btn btn-second" style={{ padding: '14px 34px' }}>
            Return to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};
