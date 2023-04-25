import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ConnectionWalletProvider from './Components/Wallet/ConnectionWalletProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <ConnectionWalletProvider>
      <App />
    </ConnectionWalletProvider>
  </React.StrictMode>
);

/* add mouse click listener */
window.addEventListener('click', function(e) {
  /* bar container */
  const nav = document.getElementById("footer-nav");

  /* click outside nav menu */
  if (!nav.contains(e.target) ||
      (e.target.tagName.toLowerCase() !== 'button' &&
       e.target.tagName.toLowerCase() !== 'a' &&
       e.target.tagName.toLowerCase() !== 'span' &&
       e.target.tagName.toLowerCase() !== 'i')) {
    /* hide dropdown */
    nav.classList.remove("dropdown");

    /* close curtains */
    const curtains = nav.querySelectorAll('ul');
    [...curtains].forEach(function (c) {
      c.classList.remove('open');
    });
  }
});
