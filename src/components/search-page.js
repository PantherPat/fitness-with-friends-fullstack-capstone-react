import React from 'react';

//import './search-page.css';

export default function SearchPage(props) {
  return (
      <main role="main">
      <section>
      <h1>Search Workouts</h1>
      <form className="searchForm">

      <fieldset className="search-input-wrapper">
      <h2 id="search-page-quote">Search Workouts</h2>

      <input id="searchInput" type="text" placeholder="Workouts" value="HIIT, Strength, Endurance"/>

      </fieldset>
      <button id="searchButton" type="submit">Search</button>

      </form>
      <li className="result-items">
      <div className="result-item-image">
      <form action="class=" addToFavoritesList>
      <input type="hidden"/>
      <input type="hidden"/>
      <button type="submit" class="addToFavoritesListButton">Save Workout</button>
      </form>
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
}
