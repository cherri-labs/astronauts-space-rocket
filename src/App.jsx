/* eslint-disable react/no-unescaped-entities */

import React, { FC } from 'react';

import Context from './Components/Wallet/Context';
import Footer from './Components/Sections/Footer';
import Main from './Components/Sections/Main';

const App: FC = () => {
  return (
    <Context>
    <Content />
    </Context>
  );
};

export default App;

const Content: FC = () => {
  return (
    <>
    <Main />
    <Footer />
    </>
  );
};
