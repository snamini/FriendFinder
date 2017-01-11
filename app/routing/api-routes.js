// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate Javascript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    if (friendData) {
      friendData.push(req.body);
      res.json(true);
    }
    else {
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    tableData = [];
    waitListData = [];

    console.log(tableData);
  });
};



//
// var path = require("path");
//
//
// module.exports = function(app){
//
//
// var chillpeople = '';
//
//     app.get("/api/friends", function(req, res){
//         res.send("friends!");
//     });
//
//     // Create New Characters - takes in JSON input
//     app.post("/api/survey", function(req, res) {
//       var netflixScore = req.body;
//
//
//         // add user to list of people who want to netflix and chill
//
//         // chillpeople.push(netflixScore);
//
//         // look up who the perfect person to nfc with is
//
//         //compare the 3 types and find a match
//
//         //return the perfect NFC buddy
//
//       res.json(netflixScore);
//     });
//
// };
//
//
// // function matchingNetflixer () {
// //
// // loop through all users and all users score. figure out the current user and the difference between their scores and other users. match the user with min difference between scores.)
// //
// // find stock picker example => {})
// //
// // if newUser > users[i] {
// // }
// //
// // var netflixers = [
// //
// // {name:
// //   scores: [1, 3, 2, 5,3,]
// // },
// //
// // {
// //
// // }
// //
// // ];
// //
// //
// // var newUser = {
// //   name: talia
// //   scores [1,2,3, 4,5,]
// //
// // }
// //
// // sumScores = (newUsers.score)
// //
// // for i=0; i< netflixers.length; i++
