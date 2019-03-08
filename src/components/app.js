import React, { Component } from "react";

import {connect} from 'react-redux';




import Footer from "./footer";
import Header from "./header";
import InputPage from "./input-page";
import LandingPage from "./landing-page";
import Menu from "./menu";
//import footer from ".result-page";
//import footer from ".save-workout";
import ShowSavedWorkouts from "./show-saved-workouts";
//import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";
import TimeCalculator from "./time-calculator";
//import footer from ".tracked-information";
//import WorkoutSearch from "./workout-search";
import TrackedInformation from "./tracked-information";


import { BrowserRouter as Router, Route, Link } from "react-router-dom";






class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Header />
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/show-saved-workouts" component={ShowSavedWorkouts} />
                    <Route exact path="/tracked-information" component={TrackedInformation} />
                    <Route exact path="/watchlist" component={ShowSavedWorkouts} />
                    <Route exact path="/landing-page" component={LandingPage} />
                    <Route exact path="/footer" component={Footer} />
                    <Route exact path="/sign-up-form" component={SignUpForm} />
                    <Footer />
                </div>
            </Router>
        );
    }

}

export const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(App);
