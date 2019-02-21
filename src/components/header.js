import React from 'react';

import Menu from './menu'

import './header.css';

export default function Header(props) {
  return (
      <nav role="navigation">
      <div id="headerImage">
      <img src="images/twitter_header_photo_1.png" alt=""/>
      <Menu />
      </div>
      </nav>
  );
}
