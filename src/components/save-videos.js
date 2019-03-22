import React from 'react'
import { connect } from 'react-redux'




export default function SaveVideos() {

  return (

      <form className="addToFavoritesList">
      <input id="videoId" type="hidden"/>
      <input id="title" type="hidden"/>
      <input id="thumbnail" type="hidden"/>
      <button type="submit" className="addToFavoritesListButton">Save Workout</button>
      </form>
  );
}

