// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var firstNetflixer = [
  {
    name: "Talia",
    number: "310.740.6668",
    genre: "comedy",
    location: "couch",
    popcorn: "kettle"

  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = firstNetflixer;
