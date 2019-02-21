# Recipe Search Node Capstone

Fitness with Friends is a fitness application designed to motivate the user to not only exercise continuously, but also builds a competitive place amongst the friends to better their run times over a designated time period. It gamifies exercising alone by wanting to beat your previous times for that workout and by climbing the leaderboards by better your times.

## Screenshots

Home/Sign-in Page
![Home/Sign-In Page](https://github.com/PantherPat/recipe-search-node-captstone/blob/master/github-images/sign-in-page.jpg)
Sign-Up Page
![Sign-Up Page](https://github.com/PantherPat/recipe-search-node-captstone/blob/master/github-images/Sign-up-page.jpg)
User Dashboard to search
![Search Page](https://github.com/PantherPat/recipe-search-node-captstone/blob/master/github-images/search-page.jpg)
Search Results Page|
![Search Results ](https://github.com/PantherPat/recipe-search-node-captstone/blob/master/github-images/SearchResults.jpg)
Delete Recipe |
![Favorited Recipe](https://github.com/PantherPat/recipe-search-node-captstone/blob/master/github-images/DeletePage.jpg)

## User Cases
As a visitor you should be able to securely log in to my applications. In order to properly/securly navigate the application.
As a visitor after you have logged in you should be forwarded to the home/main page. In order to access the main page.
As a user, you should be able to upload workout times. In order for your "friends" to see them.
As a user, you should be able to upload your time for certain workouts. In order for your friends to see and climb the leaderboard.
As a user you should be able to search various workouts by keyword on the search page.
As a user you should be able to save your uploaded workouts and times.
As a user you should be able to save workout URL to your saved workout section, in order to be able to visit them as you please when want.




### UI Flow
![UI Flow handwritten draft](https://github.com/PantherPat/recipe-search-node-captstone/blob/master/github-images/UI-flow.jpg)

### Wireframe _main
![Wireframe _Main](https://github.com/PantherPat/recipe-search-node-captstone/blob/master/github-images/Wireframe.jpg)

## Working Prototype
You can access a working prototype with node of the app here: https://fitness-with-friends-node.herokuapp.com/ & with react here: https://fitness-with-friends-react.herokuapp.com/


## Functionality
The app's functionality is fairly straight forward. The app populates recipes through an API call, that searches the database for keywords set by the user.


## Technology
* Front-End: HTML5 | CSS3 | JavaScript ES6 | jQuery
* Back-End: Node.js | Express.js | Mocha | Chai | RESTful API Endpoints | MongoDB | Mongoose



## Responsive
App is strongly built to be usuable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

#  The typical command lines for capstone projects

## Node command lines
* npm install ==> install all node modules
* npm install --save bcryptjs body-parser cors express mongodb mongoose passport passport-http unirest
* npm install --save-dev chai chai-http mocha faker
* nodemon server.js ==> run node server
* npm test ==> run the tests

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Google Maps integrated to view all entries by location
* Featured Theaters of the World Section
