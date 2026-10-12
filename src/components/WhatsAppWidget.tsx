import React, { useState } from 'react';

export const WhatsAppWidget: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('Hello jb whitesquare!');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(userMsg);
    window.open(`https://api.whatsapp.com/send?phone=919072000006&text=${encoded}`, '_blank');
  };

  return (
    <>
      {/* Floating Chat Popup Dialog */}
      {chatOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '25px',
            width: '320px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            zIndex: 9999,
            overflow: 'hidden',
            fontFamily: 'var(--font-ui)',
            animation: 'modalFadeIn 0.25s ease',
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: '#075e54',
              color: '#ffffff',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#25d366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                }}
              >
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div>
                <h4 style={{ margin: 0, color: '#ffffff', fontSize: '16px' }}>JB White Square</h4>
                <div style={{ fontSize: '12px', color: '#a7e4cf' }}>Typically replies within minutes</div>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '18px', cursor: 'pointer' }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Body */}
          <div
            style={{
              padding: '18px',
              backgroundColor: '#e5ddd5',
              backgroundImage: 'radial-gradient(#cfd8dc 1px, transparent 1px)',
              backgroundSize: '16px 16px',
              minHeight: '140px',
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '12px 14px',
                borderRadius: '8px 8px 8px 0',
                maxWidth: '85%',
                fontSize: '14px',
                color: '#333333',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              Hello! 👋 Welcome to White Square UPVC Windoor. How can we help you today?
              <div style={{ fontSize: '10px', color: '#888', textAlign: 'right', marginTop: '4px' }}>
                Just now
              </div>
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} style={{ display: 'flex', padding: '10px', backgroundColor: '#ffffff' }}>
            <input
              type="text"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                border: '1px solid #ddd',
                borderRadius: '20px',
                padding: '8px 14px',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                background: '#25d366',
                border: 'none',
                color: '#ffffff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                marginLeft: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Send to WhatsApp"
            >
              <i className="fa-solid fa-paper-plane" style={{ fontSize: '14px' }}></i>
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div
        className="floating-whatsapp"
        onClick={() => setChatOpen(!chatOpen)}
        title="Chat on WhatsApp"
        aria-label="WhatsApp Support"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </div>
    </>
  );
};
