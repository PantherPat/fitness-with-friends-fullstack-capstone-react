import React from 'react'

    export class SignUpForm extends React.Component{
      constructor(props){
          super(props);


        this.state = {
            fullName:" ",
            userName: " ",
            password: " ",
            confirmPassword: " "

        };
      }
        validateForm(){
            if(this.state.fullName === " "){
                console.log("please insert name")
            }else if(this.state.userName === " "){
                console.log("please create a user name")
            }else if (this.state.password === " "){
                console.log("please create a password")
            } else if (this.state.confirmPassword !== this.state.password){
                console.log("Passwords do not match")
            }
            console.log("errors here")
        }

        handleChange = event => {
            this.setState({
                [event.target.id]: event.target.value
            });
        }

        handleSubmit = event => {
            event.preventDefault();
        }

        render(){
        return (
        <form className="signUpForm" onSubmit={this.handlesubmit} >

            <fieldset className="sign-up-page-full-wrapper">
            <input ref={(this.state.fullName)}id="signUpPageFullName" type="text" placeholder="Full Name"/>
                    </fieldset>


        <fieldset className="sign-up-page-user-wrapper">
            <input ref={(this.state.userName)} id="signUpPageUserName" type="text" placeholder="User Name"/>
                </fieldset>

        <fieldset className="sign-up-page-password-wrapper">
            <input ref={(this.state.password)} id="signUpPagePassword" type="password" placeholder="Password"/>
                </fieldset>

        <fieldset className="sign-up-page-confirm-password-wrapper">
            <input ref={(this.state.confirmPassword)} id="signUpPageConfirmPassword" type="password" placeholder="Confirm Password"/>
                </fieldset>

            <button id="signUpButton" type="submit">Sign Up</button>
        <p>To Sign In <a className="showSignIn" href="#"> click here</a></p>

            </form>
          )
    };
}
export default SignUpForm;
