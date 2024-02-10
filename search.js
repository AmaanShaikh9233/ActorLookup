const { findActorByMoviesName, findMoviesByActorName } = require('./actorLookup.js');

console.log("Actors worked in movie:",findActorByMoviesName("Pathaan"));

console.log("Movies of the searched Actor is:",findMoviesByActorName("Salman Khan"));

// Check the values of Movies and Actors according to your choice
