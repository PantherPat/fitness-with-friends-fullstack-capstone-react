import React from 'react';

import TopNav from './top-nav';

import './header.css';

export default function Header(props) {
  return (
      <nav role="navigation">
      <div id="headerImage">
      <img src="images/twitter_header_photo_1.png" alt=""/>
      <div className="dropdown">
      <button className="dropbtn">Menu</button>
      <div className="dropdown-content">
      <a href="#">Saved Workouts</a>
      <a href="#">Search Workouts</a>
      </div>
      </div>
      </div>
      </nav>
  );
}
