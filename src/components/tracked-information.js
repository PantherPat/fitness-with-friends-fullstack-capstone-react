import React from 'react';
import {TimeCalculator} from './time-calculator';



// need to put the user name here
// need to import and caluclate their time and average time
export default function TrackedInformation(props) {
  return (
      <div className="row">
      <ul className="user-input">
      <li className="name">Player3</li>
      <li className="milesRan">{this.props.distance}</li>
      <li className="Time">{this.props.time}</li>
      <li className="avgTime">{this.props.average}</li>
      </ul>
      </div>
  );
}
