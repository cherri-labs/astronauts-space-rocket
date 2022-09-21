/* eslint-disable react/no-unescaped-entities */

import React, { FC } from 'react';

import Context from './Components/Wallet/Context';
import Header from './Components/Sections/Header';
import Fullpage from './Components/Sections/Fullpage';
import Footer from './Components/Sections/Footer';

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
    <Header />
    <Fullpage />
    <Footer />
    </>
  );
};
