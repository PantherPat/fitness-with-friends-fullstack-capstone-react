import React from 'react';
import {tCalculator} from '../actions';
import { connect } from "react-redux";


//here the user puts in their distance and time everytime they complete a workout. This needs to be exported to the leadership where we calculate the average of all runs
export class TimeCalculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: 0,
            distance: 0,
            average: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        event.preventDefault();
        
        let inputTime = event.target['time'].value;
        let inputDistance = event.target['distance'].value;
       

        this.setState = {
            time: inputTime,
            distance: inputDistance,
        }
        console.log(inputTime,inputDistance);
        this.props.dispatch(tCalculator(inputTime, inputDistance));
        // console.log(state.time, state.distance)
        this.props.onHandleSubmit(inputTime, inputDistance)
    }

    render(){
        return (
            <form className="user-input-form" onSubmit={this.handleChange}>
                <fieldset>
                    <label htmlFor="distance"></label>
                    <input distance = {this.state.distance} 
                            type="number" 
                            name = "distance"
                            id="runningDistance" 
                            placeholder="Distance"/>
                </fieldset>

                <fieldset>
                    <label htmlFor="time"></label>
                    <input time={this.state.time} 
                            type="number" 
                            name = "time"
                            id="runningTime" 
                            placeholder="Time"/>
                </fieldset>
                <button>Submit</button>
            </form>
            )};
}

export const mapStateToProps = state => ({
    loggedIn: state.user,
    error: state.error,
    distance: state.distance,
    time: state.time,
})
export default connect(mapStateToProps)(TimeCalculator);