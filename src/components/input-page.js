import React from 'react';

import TimeCalculator from './time-calculator';
import TrackedInformation from './tracked-information';
import Menu from './menu';


// need to take user input of time and distance and caluclate them on the leaderboard
export default function InputPage(props) {

  return (
      <main role="main">
        <div id="introSection">
          <h1 id="secondPageWelcome">Hello,Name</h1>
        </div>

        <section id="topSectionSecondPage">
          <div id="secondPageQuote">
            <h2> Your journey starts here! Start working out by competing with your friends </h2>
          </div>

          <div className="leader-board">
            <h1 id="leaderBoardTitle">LeaderBoard</h1>
            <TrackedInformation userName = {props.userName} distance ={props.distance} time ={props.time} average = {props.average} />
          </div>

          <section className="workout-information">
            <TimeCalculator />
          </section>

        </section>
      </main>
  );
}

