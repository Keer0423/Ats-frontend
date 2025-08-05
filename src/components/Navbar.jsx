import React, { useState } from 'react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: '#fff',
    fontWeight: '500',
    fontSize: '16px',
    position: 'relative',
  };

  const profileInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    position: 'relative',
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '60px',
    right: '24px',
    width: '220px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '12px',
    zIndex: 1000,
  };

  const dropdownItemStyle = {
    padding: '8px 0',
    borderBottom: '1px solid #eee',
    fontSize: '14px',
    color: '#333',
  };

  const logoutStyle = {
    padding: '8px 0',
    fontSize: '14px',
    color: '#d00',
    cursor: 'pointer',
  };

  const avatarStyle = {
    width: '36px',
    height: '36px',
    borderRadius: '80%',
    backgroundColor: '#ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '14px',
  };

  return (
    <div style={navbarStyle}>
      <span>Admin Interface Dashboard</span>
      <div style={profileInfoStyle}>
        <div style={avatarStyle}>MC</div>
        <button onClick={() => setShowDropdown(!showDropdown)}>
          Your Profile
        </button>

        {showDropdown && (
          <div style={dropdownStyle}>
            <div style={dropdownItemStyle}>
              <strong>Name of Candidate</strong>
              <div style={{ fontSize: '12px', color: '#777' }}>
                abcde@gmail.com
              </div>
              <div style={{ fontSize: '12px', color: '#555', marginTop: '4px' }}>
                Role: Candidate
              </div>
            </div>
            <div style={dropdownItemStyle}>⚙ Settings</div>
            <div style={logoutStyle}>↩ Logout</div>
          </div>
        )}
      </div>
    </div>
  );
}
