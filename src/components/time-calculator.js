import React from 'react';
//import { connect } from 'react-redux';

//import './feedback.css';



//here the user puts in their distance and time everytime they complete a workout. This needs to be exported to the leadership where we calculate the average of all runs
export class TimeCalculator extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e){
        e.preventDefault();
        const inputs = [this.distance, this.time]

        const timeCalculator = {
            time: this.time.value,
            distance: this.distance.value,
            average: (this.time.value / this.distance.value)
        }
        console.log(timeCalculator)
        if(timeCalculator.time == ""){
            console.log("please insert ")
        }
    }

    render(){
  return (

      <form className="user-input-form" onSubmit={this.onSubmit}>
      <fieldset>
      <label htmlFor="distance"></label>
      <input ref={input =>(this.distance = input)}type="number" id="runningDistance" placeholder="Distance"/>
      </fieldset>
      <fieldset>
      <label htmlFor="time"></label>
        <input ref={input =>(this.time = input)}type="number" id="runningTime" placeholder="Time"/>
      </fieldset>
      <button>Submit</button>
      </form>
  );
}
}
