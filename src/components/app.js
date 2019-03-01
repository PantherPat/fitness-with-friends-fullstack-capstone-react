import React, { Component } from "react";

import {connect} from 'react-redux';




import Footer from "./footer";
import Header from "./header";
//import Header from './header';
import InputPage from "./input-page";
import LandingPage from "./landing-page";
import Menu from "./menu";
//import footer from "./components/result-page";
//import footer from "./components/save-workout";
import ShowSavedWorkouts from "./show-saved-workouts";
//import SignInForm from "./sign-in-form";
//import SignUpForm from "./sign-up-form";
//import footer from "./components/time-calculator";
//import footer from "./components/tracked-information";
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
            <Route exact path="/dashboard/tracked-information" component={TrackedInformation} />
                    <Route exact path="/dashboard/watchlist" conponent={ShowSavedWorkouts} />
                    <Footer />
                </div>
            </Router>
        );
    }

}

export const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(App);
