import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';

export const MyAccountPage: React.FC = () => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoggedInUser(email);
  };

  return (
    <div>
      <PageHeader title="My Account" breadcrumbs={[{ name: 'My account' }]} />

      <div className="container" style={{ padding: '80px 15px', maxWidth: '650px' }}>
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #ebebeb',
            borderRadius: '12px',
            padding: '40px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
          }}
        >
          {loggedInUser ? (
            <div>
              <h2 style={{ fontSize: '26px', color: 'var(--black)', marginBottom: '15px' }}>
                Welcome, {loggedInUser}!
              </h2>
              <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '25px' }}>
                From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
              </p>
              <button
                type="button"
                onClick={() => setLoggedInUser(null)}
                className="btn btn-black"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', gap: '20px', borderBottom: '2px solid #f0f0f0', marginBottom: '30px' }}>
                <button
                  type="button"
                  onClick={() => setTab('login')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '10px 0',
                    fontFamily: 'var(--font-headers)',
                    fontWeight: 700,
                    fontSize: '18px',
                    cursor: 'pointer',
                    color: tab === 'login' ? 'var(--main)' : 'var(--black)',
                    borderBottom: tab === 'login' ? '3px solid var(--main)' : 'none',
                    marginBottom: '-2px',
                  }}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setTab('register')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '10px 0',
                    fontFamily: 'var(--font-headers)',
                    fontWeight: 700,
                    fontSize: '18px',
                    cursor: 'pointer',
                    color: tab === 'register' ? 'var(--main)' : 'var(--black)',
                    borderBottom: tab === 'register' ? '3px solid var(--main)' : 'none',
                    marginBottom: '-2px',
                  }}
                >
                  Register
                </button>
              </div>

              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Username or email address *</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div style={{ marginTop: '25px' }}>
                  <button type="submit" className="btn btn-second" style={{ width: '100%', padding: '12px' }}>
                    {tab === 'login' ? 'Log in' : 'Register'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
