import React from 'react';

//import GuessList from './guess-list';
//import GuessCount from './guess-count';
//import AuralStatus from './aural-status';

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
      <div id="userDataDiv">
      <ul className="user-data-labels">
      <li className="user-info">Name</li>
      <li className="user-info">Miles Ran</li>
      <li className="user-info">Time</li>
      <li className="user-info">Average Time</li>
      </ul>
      </div>
      <div className="row">
      <ul className="user-input">
      <li className="name">Player3</li>
      <li className="milesRan">3</li>
      <li className="Time">Time</li>
      <li className="avgTime">Average Time</li>
      </ul>
      </div>

      <div className="row">
      <ul className="user-input">
      <li className="name">Player3</li>
      <li className="milesRan">3</li>
      <li className="Time">Time</li>
      <li className="avgTime">Average Time</li>
      </ul>
      </div>

      <div className="row">
      <ul className="user-input">
      <li className="name">Player3</li>
      <li className="milesRan">3</li>
      <li className="Time">Time</li>
      <li className="avgTime">Average Time</li>
      </ul>
      </div>
      </div>

      <section className="workout-information">
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

      </section>
      </section>


      </main>
  );
}
