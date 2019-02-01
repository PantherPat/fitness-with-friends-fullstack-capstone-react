import React from 'react';

import Header from './header';
import LandingPage from './landing-page';
import InputPage from './input-page';
import SearchPage from './search-page';
import Footer from './footer';

export default function Game(props) {
  return (
    <div>
      <Header />
      <LandingPage />
      <InputPage />
      <SearchPage />
      <Footer />

    </div>
  );
}
