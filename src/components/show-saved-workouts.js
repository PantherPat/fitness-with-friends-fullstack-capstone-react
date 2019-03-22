import React from 'react';
import SaveVideos from './save-videos';


export default function ShowSavedWorkouts() {

    return (

        <ul className="addToFavoritesList">
        <li id="savedWorkoutLinks">
        <SaveVideos />
        </li>
        </ul>
    );
}
