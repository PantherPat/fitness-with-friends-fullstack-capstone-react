import React from 'react'
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions";
import InputPage from './input-page'

export class SignInForm extends React.Component {
    constructor(props){
        super(props);
        this.state =
            {username: "",
            distance: "",
            time: "",
            average: ""};
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e){

        e.preventDefault();
        const inputs = [this.username, this.password]

        this.setState({
            username: this.username.value
});
        const user = {
            username: this.username.value,
            password: this.password.value,
        }
        if(user.username === ""){
            console.log("please enter user name")
        }
        if (user.password === ""){
            console.log("please enter correct password")
            
        }
        this.props.dispatch(login(user));
    }

render(){
    console.log(this.state.username);
    if (this.state.username) {
        return <Redirect to="/input-page" render={() => <InputPage  userName = {this.state.userName} distance ={this.state.distance} time ={this.state.time} average = {this.state.average} />} />;
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


