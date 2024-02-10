
// Define actors data
const actorsData = [
   {
       name: "Shahrukh Khan",
       movies: ["Pathaan", "Jawaan", "Karan Arjun", "Bazzigar"]
   },
   {
       name: "Salman Khan",
       movies: ["Pathaan", "Karan Arjun", "Bodyguard", "Tiger","Mujhse Shadi karogi"]
   },
   {
       name: "Aamir Khan",
       movies: ["Dhoom3", "Lagaan", "Dangal", "Raja Hindustani"]
   },
   {
       name: "Akshay Kumar",
       movies: ["AirLift", "Bell Bottom", "Tashaan", "Brothers","Mujhse Shadi karogi"]
   },
   {
       name: "Ranbir Kapoor",
       movies: ["Animal", "Bramashastra", "Tamasha", "Sanju"]
   }
];

// Function to find actors by movie name

function findActorByMoviesName(movieName) {
   // For checking validation whether the input is string
   if (!movieName || typeof movieName !== 'string') {
       throw new Error('Invalid input. Please provide a valid movie name.');
   }
// Filters the actor name through the data and maps only the name which is matchedactors
   const matchedActors = actorsData.filter(actor => actor.movies.includes(movieName)).map(actor => actor.name);

   if (matchedActors.length === 0) {
       return "No actors found for this movie.";
   }

   return matchedActors;
}

// Function to find movies by actor name

function findMoviesByActorName(actorName) {
   //For checking validation whether the input is string
   if (!actorName || typeof actorName !== 'string') {
       throw new Error('Invalid input. Please provide a valid actor name.');
   }

   const actor = actorsData.find(actor => actor.name === actorName);

   if (!actor) {
       return "No movies found for this actor.";
   }

   return actor.movies;
}
// for exporting the models to run in node
module.exports = { findActorByMoviesName, findMoviesByActorName };
