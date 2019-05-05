import React from 'react';
import { connect } from "react-redux";
import {displayLeaderboard} from '../actions'


//do we need to import time calculator?
// need to put the user name here
// need to import and caluclate their time and average time
// need to dispatch from action for the output

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

        // takeAverage(time,distance,average){
        //     for(i )
        // }

            if (this.props.results == undefined){
                alert("No Results")
            }
            else{
                let resultsOutput = this.props.results
                console.log(this.props.results)
                console.log(resultsOutput.length)
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

    export const mapStateToProps = state => ({
       results: state.results
      });
      
      export default connect(mapStateToProps)(TrackedInformaion);
