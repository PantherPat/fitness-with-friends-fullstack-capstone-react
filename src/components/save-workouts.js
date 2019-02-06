import React from 'react'
//import { connect } from 'react-redux';

//import './feedback.css';

export default function SavedWorkouts(props) {

  return (

      <form className="addToFavoritesList">
      <input type="hidden"/>
      <input type="hidden"/>
      <button type="submit" className="addToFavoritesListButton">Save Workout</button>
      </form>
  );
}

