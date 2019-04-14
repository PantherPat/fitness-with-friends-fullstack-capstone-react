import React from 'react';


// need to put the user name here
// need to import and caluclate their time and average time
// need to dispatch from action for the output
export default function TrackedInformaion(props) {
    return (
        <div className = "row">
            <ul className = "user-input">
                <li className = "name">
                    {/* {props.username} */}
                </li>
                <li className = "milesRan">
                    {props.distance}
                </li>
                <li className = "Time">
                    {props.time}
                </li>
                <li className = "avgTime">
                    {props.average}
                </li>
            </ul>
        </div>
    );
}
