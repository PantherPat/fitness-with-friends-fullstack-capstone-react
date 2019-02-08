import React from 'react'

    export class SignUpForm extends React.Component{
      constructor(props){
          super(props);
            this.onSubmit = this.onSubmit.bind(this)
      }
            onSubmit(e){
                e.preventDefault();
                const inputs = [this.username, this.password, this.confirmPassword]

                const user = {
                    userName: this.userName.value,
                    password: this.password.value,
                    confirmPassword: this.confirmPassword.value
                }
                console.log(user)
                if(user.userName === ""){
                    console.log("please create a user name")
                }
                if (user.password === ""){
                    console.log("please create a password")
                }
                if (user.confirmPassword !== user.password){
                    console.log("Passwords do not match")
                }
            }

        render(){
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
export default SignUpForm;
