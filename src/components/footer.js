import React from 'react';

export default function Footer(props) {
    return (

        <footer role="contentinfo">
        <ul id="social-media-images">
        <li><a href="mailto:patrick.keshishian@gmail.com" target="_blank">
        <img className="social-images" id="angellistImage" src="images/AngelList_Black_Victory_Hand.png" alt=""/></a>
        </li>



        <li><a href="https://www.linkedin.com/in/patrick-keshishian-81932068/" target="_blank">
        <img className="social-images" id="linkedinImage" src="images/In-Black-128px-R.png" alt=""/></a>
        </li>



        <li><a href="https://github.com/PantherPat" target="_blank"> <img className="social-images" id="githubImage" src="images/GitHub-Mark-32px.png" alt=""/></a>
        </li>
        </ul>
        </footer>
    );
}






