import React from 'react';

import SignInForm from './sign-in-form';
import SignUpForm from './sign-up-form';


export default function LandingPage(props) {
  return (
      <main className="homePage" role="main">
<div className="home-page-column">
<div className="home-page-layout">
<h2 id="inspiration-quote">"Fitness is not about being better than someone else...It's about being better than you used to be."</h2>


<SignInForm />
<SignUpForm />

</div>
<div id="homePageImage">
<img src="images/steven-erixon-698801-unsplash.jpg" alt=""/>
</div>
</div>
</main>
  );
}
