import React from 'react';

// these components will replace lines 16 and 17
import ShowSavedWorkouts from './show-saved-workouts';


// when the user clicks on the buttons below, it will take them to the savedworkouts page as well as the search page where they can search for youtube videos
export default function  Menu(props){

    return(

        <div className="dropdown">
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
        <a href="#">Saved Workouts</a>
        <a href="#">Search Workouts</a>
        </div>
        </div>
    )
}
