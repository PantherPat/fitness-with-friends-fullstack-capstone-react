import React from 'react';


// need to put the user name here
// need to import and caluclate their time and average time
// need to dispatch from action for the output
export default function TrackedInformation(props) {
    return (

        <div className = "row">
        <ul className = "user-input">
        <li className = "name">
        {this.props.username}
        </li>
        <li className = "milesRan">
        {this.props.distance}
        </li>
        <li className = "Time">
        {this.props.time}
        </li>
        <li className = "avgTime">
        {this.props.average}
        </li>
        </ul>
        </div>
    );
}
