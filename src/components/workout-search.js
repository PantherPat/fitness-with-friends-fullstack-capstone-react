import React from 'react'



export default class WorkoutSearch extends React.Component {

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        e.preventDefault();
        const input = this.textInput.value.trim();
        if (input && this.props.onSearch) {
            this.props.onSearch(this.textInput.value);
        }
        this.textInput.value = "";
    }

    render(){
    return (

      <form className="searchForm">

      <fieldset className="search-input-wrapper">
      <h2 id="search-page-quote">Search Workouts</h2>

      <input
        id="searchInput"
        type="text"
        placeholder="Workouts"
        ref= {input => (this.textInput = input)}
        value="HIIT, Strength, Endurance"/>

      </fieldset>
      <button id="searchButton" type="submit">Search</button>

      </form>
  )
}
}

