import React from 'react'
//import { connect } from 'react-redux';

//import './feedback.css';

export class WorkoutSearch extends React.Component {
//    onSubmit(event) {
//        event.preventDefault();
//
//        const value = this.input.value;
////        this.props.dispatch(makeGuess(value));
//        this.input.value = '';
//        this.input.focus();


render(){
  return (

      <form className="searchForm">

      <fieldset className="search-input-wrapper">
      <h2 id="search-page-quote">Search Workouts</h2>

      <input id="searchInput" type="text" placeholder="Workouts" value="HIIT, Strength, Endurance"/>

      </fieldset>
      <button id="searchButton" type="submit">Search</button>

      </form>
  );
}
}

