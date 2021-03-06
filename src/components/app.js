import React, { Component } from "react";

import {connect} from 'react-redux';




import Footer from "./footer";
import Header from "./header";
import InputPage from "./input-page";
import LandingPage from "./landing-page";
import Menu from "./menu";
//import footer from ".result-page";
//import footer from ".save-workout";
import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";
import TimeCalculator from "./time-calculator";
//import footer from ".tracked-information";
import WorkoutSearch from "./workout-search";
import TrackedInformation from "./tracked-information";


import { BrowserRouter as Router, Route, Link } from "react-router-dom";






class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Header />
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/tracked-information" component={TrackedInformation} />
                    <Route exact path="/landing-page" component={LandingPage} />
                    <Route exact path="/footer" component={Footer} />
                    <Route exact path="/workout-search" component={WorkoutSearch} />
                    <Route exact path="/sign-up-form" component={SignUpForm} />
                    <Route exact path="/time-calculator" component={TimeCalculator} />
                    <Route exact path="/sign-in-form" component={SignInForm} />
                    {/* <Route exact path="/input-page" component={InputPage} /> */}
                    <Route exact path="/input-page" render={() => <InputPage userName = {this.props.username} distance ={this.props.distance} time ={this.props.time} average = {this.props.average} />} />

                    <Footer />
                </div>
            </Router>
        );
    }

}

export const mapStateToProps = state => ({
    loggedIn: state.user,
    error: state.error
});

export default connect(mapStateToProps)(App);
