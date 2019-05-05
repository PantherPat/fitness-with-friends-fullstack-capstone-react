import React from 'react';

import TimeCalculator from './time-calculator';
import TrackedInformation from './tracked-information';


// need to take user input of time and distance and caluclate them on the leaderboard
export default class InputPage extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          time: 0,
          distance: 0,
          average: 0
      }
      // this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(time,distance){
    // console.log(time,distance)
    // e.preventDefault();
    const timeCalculator = {
        time,
        distance,
        average: distance/time
    }
  
    this.setState ({
        time: time,
        distance: distance,
        average: distance/time
    })
}

// displayLeaderBoardScores(time,distance,average)


  render(){
    console.log(this.state.distance, this.state.time)

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
            <TrackedInformation userName = { this.state.userName} distance ={this.state.distance} time ={this.state.time} average = {this.state.average} />
          </div>

          <section className="workout-information">
            <TimeCalculator onHandleSubmit={(time,distance) => this.handleSubmit(time,distance)} />
          </section>

        </section>
      </main>
  )}
}

