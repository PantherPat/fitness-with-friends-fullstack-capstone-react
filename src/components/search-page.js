import React from 'react';


import SavedWorkouts from './save-workouts'
import {WorkoutSearch} from './workout-search'

export default function SearchPage(props) {
  return (
      <main role="main">
      <section>
      <h1>Search Workouts</h1>
      <WorkoutSearch />
      <li className="result-items">
      <div className="result-item-image">
      <SavedWorkouts />
      <img id="youtubeImage" src="images/In-Black-128px-R.png" alt=""/>
      </div>
      <div className="youtube-results">
      <h3>Title of the image
      </h3>
      <ul>
      <li className="result-description">
      <p>rest of the information from results here</p>
      </li>
      </ul>
      </div>
      </li>
      </section>
      <section>
      <h2>Saved Workouts</h2>
      <ul>
      <li id="savedWorkoutLinks">
      <a href="" target="_blank">  <img src="images/GitHub-Mark-32px.png" alt=""/>Link to workout page</a>
      </li>
      </ul>


      </section>

      </main>
  );
};