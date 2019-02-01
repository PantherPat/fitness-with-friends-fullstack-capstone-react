import React from 'react'

    export default function SignUpForm(props){



        return (
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
            )
    }
