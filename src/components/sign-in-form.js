import React from 'react'
//import { connect } from 'react-redux';

//import './feedback.css';

export class SignInForm extends React.Component {
 onSubmit(event){
     event.preventDefault();

 var value = this.input.value;
     console.log(value)
 }

render(){
  return (
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
  );
}
}

