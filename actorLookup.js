
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
   if (!movieName || typeof movieName !== 'string') {
       throw new Error('Invalid input. Please provide a valid movie name.');
   }

   const matchedActors = actorsData.filter(actor => actor.movies.includes(movieName)).map(actor => actor.name);

   if (matchedActors.length === 0) {
       return "No actors found for this movie.";
   }

   return matchedActors;
}

// Function to find movies by actor name

function findMoviesByActorName(actorName) {
   if (!actorName || typeof actorName !== 'string') {
       throw new Error('Invalid input. Please provide a valid actor name.');
   }

   const actor = actorsData.find(actor => actor.name === actorName);

   if (!actor) {
       return "No movies found for this actor.";
   }

   return actor.movies;
}

module.exports = { findActorByMoviesName, findMoviesByActorName };
