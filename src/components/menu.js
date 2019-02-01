import React from 'react';






export function  Menu(props){

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
