import React from 'react'
//import { connect } from 'react-redux';

//import './feedback.css';

export class SignInForm extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e){
        e.preventDefault();
        const inputs = [this.username, this.password]

        const user = {
            userName: this.userName.value,
            password: this.password.value,
        }
        console.log(user)
        if(user.userName === ""){
            console.log("please enter user name")
        }
        if (user.password === ""){
            console.log("please enter correct password")
        }
render(){
  return (
      <form onSubmit={this.onSubmit}
            className="sign-in-form"
            id="signInPage">

      <h1 id="formHeader">It all starts here!</h1>

      <fieldset className="sign-in-page-user-wrapper">
                <input id="signInPageUserName"
                type="text"
                placeholder="User Name"
                ref={input => (this.userName = input)}
                required
      />
      </fieldset>

      <fieldset className="sign-in-page-password-wrapper">
                <input id="signInPagePassword"
                type="password"
                placeholder="Password"
                ref={input => (this.password = input)}
                required/>

      </fieldset>
      <p>Demo Login: Johnny@gmail.com Password: 123</p>
      <button id="signInButton" type="submit">Sign In</button>
      <p>To Register <a className="showRegister" href="#"> click here</a></p>

      </form>
  );
}
}

