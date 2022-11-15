import React from 'react';
import Navbar from './Navbar';
import Wallet from '../Wallet/Wallet';

export default function Footer() {
  return (
    <div id="footer">
      <div className="nav-container">
        <Navbar />
        <Wallet />
      </div>
    </div>
  );
}
