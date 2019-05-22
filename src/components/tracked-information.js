import React from 'react';
import { connect } from "react-redux";
import {displayLeaderboard} from '../actions'


//do we need to import time calculator?
// need to put the user name here
// need to import and caluclate their time and average time
// need to dispatch from action for the output

// HOW WOULD I START BREAKING THIS PROBLEM DOWN? IT LOADS ON BACKEND BUT NOT ON FRONT END. WHAT STEPS WOULD I NEED TO TAKE?

    export class TrackedInformaion extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                time: 0,
                distance: 0,
                average: 0
            }
        }
    render(){
        let displayLeaderboardResults = ""
        //props are not being sent properly (no data)

        

            if (this.props.results == undefined){
                alert("No Results")
            }
            else{
                let resultsOutput = this.props.results
                 displayLeaderboardResults = this.props.results.map((data, index) => (
                   
                    <ul key={index} className = "user-input">
                        <li className = "name">
        
                        </li>
                        <li className = "milesRan">
                            <p>Total Distance</p>
                            {data.distance}
                        </li>
                        <li className = "Time">
                        <p>Total Time</p>
                            {data.time}
                        </li>
                        <li className = "avgTime" >
                        <p>Average Time</p>
                            {data.distance/data.time}
                        </li>
                    </ul>
            
                ));

            }
    return (
        <div className = "row">
        {displayLeaderboardResults}
        </div>
        );
    }
}

    const mapStateToProps = state => {
    console.log(state)
    return {   results: state.results,
        displayLeaderboard}
      };
      
      export default connect(mapStateToProps)(TrackedInformaion);
