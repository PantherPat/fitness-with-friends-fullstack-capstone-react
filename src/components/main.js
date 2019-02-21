import React from 'react';

import Header from './header';
import LandingPage from './landing-page';
import InputPage from './input-page';
import ResultPage from './result-page';
import Footer from './footer';




export default function Game(props) {
  return (
    <div>
      <Header />
      <LandingPage />
      <InputPage />
      <ResultPage />
      <Footer />

    </div>
  );
}
