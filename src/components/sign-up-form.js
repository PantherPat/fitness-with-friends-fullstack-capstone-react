import React from 'react'
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signupUser } from "../actions";

    export class SignUpForm extends React.Component{
      constructor(props){
          super(props);
          this.state =
          {userName: "",
          distance: "",
          time: "",
          average: ""};
            this.onSubmit = this.onSubmit.bind(this)
      }
            onSubmit(e){
                e.preventDefault();
                const inputs = [this.username, this.password]

                const user = {
                    username: this.userName.value,
                    password: this.password.value,
                }
                this.props.dispatch(signupUser(user));
                console.log(user)
                if(user.userName === ""){
                    console.log("please create a user name")
                }
                if (user.password === ""){
                    console.log("please create a password")
                }
            }

        render(){
            if (this.props.loggedIn) {
                return <Redirect to="/input-page" />;
              }
        return (
            <form className="signUpForm" onSubmit={this.onSubmit}>

        <fieldset className="sign-up-page-user-wrapper">
            <input ref={input =>(this.userName = input)} id="signUpPageUserName"
            type="text"
            placeholder="User Name"/>
                </fieldset>

        <fieldset className="sign-up-page-password-wrapper">
            <input ref={input =>(this.password = input)}  id="signUpPagePassword"
            type="password"
            placeholder="Password"/>
                </fieldset>

        <fieldset className="sign-up-page-confirm-password-wrapper">
            <input ref={input =>(this.confirmPassword = input)} id="signUpPageConfirmPassword"
            type="password"
            placeholder="Confirm Password"/>
                </fieldset>

            <button id="signUpButton"
                    type="submit">Sign Up</button>
        <p>To Sign In <a className="showSignIn" href="#"> click here</a></p>

            </form>
          )
    };
}


export const mapStateToProps = function(state) {
    return {
        loggedIn: state.user,
        error: state.error
    }
};

export default connect(mapStateToProps)(SignUpForm);
