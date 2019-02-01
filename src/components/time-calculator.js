import React from 'react'
//import { connect } from 'react-redux';

//import './feedback.css';

export default function TimeCalculator(props) {

  return (

      <form className="user-input-form">
      <fieldset>
      <label for="distance"></label>
      <input type="text" id="runningDistance" placeholder="Distance"/>
      </fieldset>
      <fieldset>
      <label for="time"></label>
      <input type="text" id="runningTime" placeholder="Time"/>
      </fieldset>
      <button>Submit</button>
      </form>
  );
}

