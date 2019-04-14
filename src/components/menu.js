import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShowSavedWorkouts from './show-saved-workouts'
import WorkoutSearch from './workout-search'

// when the user clicks on the buttons below, it will take them to the savedworkouts page as well as the search page where they can search for youtube videos
export default function  Menu(props){

    return(
        <div className="dropdown">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
                <Link to="/show-saved-workouts">Saved Workouts</Link>
                <Link to="/workout-search">Search Workouts</Link>
            </div>
        </div>
    )
}
