import React from 'react';


//do we need to import time calculator?
// need to put the user name here
// need to import and caluclate their time and average time
// need to dispatch from action for the output
export default function TrackedInformaion(props) {
    return (
        <div className = "row">
            <ul className = "user-input">
                <li className = "name">

                </li>
                <li className = "milesRan">
                  {props.distance}
                </li>
                <li className = "Time">
                    {props.time}
                </li>
                <li className = "avgTime">
                    {props.distance/props.time}
                </li>
            </ul>
        </div>
    );
}
