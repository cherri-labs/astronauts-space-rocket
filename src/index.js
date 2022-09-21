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
