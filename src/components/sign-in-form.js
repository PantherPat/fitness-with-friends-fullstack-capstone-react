import React from 'react'
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions";

export class SignInForm extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e){

        e.preventDefault();
        console.log(this.props);
        const inputs = [this.username, this.password]

        const user = {
            userName: this.username.value,
            password: this.password.value,
        }
        console.log(user);
        this.props.dispatch(login(user));
        if(user.username === ""){
            console.log("please enter user name")
        }
        if (user.password === ""){
            console.log("please enter correct password")
        }
    }

render(){
    if (this.props.loggedIn) {
        return <Redirect to="/input-page" />;
      }
  return (
      <form onSubmit={this.onSubmit}
            className="sign-in-form"
            id="signInPage">

      <h1 id="formHeader">It all starts here!</h1>

      <fieldset className="sign-in-page-user-wrapper">
                <input id="signInPageUserName"
                type="text"
                placeholder="User Name"
                ref={input => (this.username = input)}
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

export const mapStateToProps = state => ({
    loggedIn: state.user,
    error: state.error
})

export default connect(mapStateToProps)(SignInForm);


