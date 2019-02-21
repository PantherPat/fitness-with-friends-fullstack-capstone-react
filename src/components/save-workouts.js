import React from 'react'
//import { connect } from 'react-redux';

//import './feedback.css';

export default function SaveWorkouts(props) {

  return (

      <form className="addToFavoritesList">
      <input id="videoId" type="hidden"/>
      <input id="title" type="hidden"/>
      <input id="thumbnail" type="hidden"/>
      <input id="user" type="hidden"/>
      <button type="submit" className="addToFavoritesListButton">Save Workout</button>
      </form>
  );
}

