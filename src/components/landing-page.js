import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessSection(props) {
  return (
      <main className="homePage" role="main">
      `
<div className="home-page-column">
<div className="home-page-layout">
<h2 id="inspiration-quote">"Fitness is not about being better than someone else...It's about being better than you used to be."</h2>
<form className="sign-in-form" id="signInPage">
<h1 id="formHeader">It all starts here!</h1>

<fieldset className="sign-in-page-user-wrapper">
<input id="signInPageUserName" type="text" placeholder="User Name"/>
</fieldset>

<fieldset className="sign-in-page-password-wrapper">
<input id="signInPagePassword" type="password" placeholder="Password"/>
</fieldset>
<p>Demo Login: Johnny@gmail.com Password: 123</p>
<button id="signInButton" type="submit">Sign In</button>
<p>To Register <a className="showRegister" href="#"> click here</a></p>

</form>

<form className="signUpForm">

<fieldset className="sign-up-page-full-wrapper">
<input id="signUpPageFullName" type="text" placeholder="Full Name"/>
</fieldset>


<fieldset className="sign-up-page-user-wrapper">
<input id="signUpPageUserName" type="text" placeholder="User Name"/>
</fieldset>

<fieldset className="sign-up-page-password-wrapper">
<input id="signUpPagePassword" type="password" placeholder="Password"/>
</fieldset>

<fieldset className="sign-up-page-confirm-password-wrapper">
<input id="signUpPageConfirmPassword" type="password" placeholder="Confirm Password"/>
</fieldset>

<button id="signUpButton" type="submit">Sign Up</button>
<p>To Sign In <a className="showSignIn" href="#"> click here</a></p>

</form>
</div>
<div id="homePageImage">
<img src="images/steven-erixon-698801-unsplash.jpg" alt=""/>
</div>
</div>
</main>
  );
}
