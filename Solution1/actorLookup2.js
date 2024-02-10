// Define data for actors including their names and movies
const actorsData = [
    {
        name: "Shahrukh Khan",
        movies: ["Pathaan", "Jawaan", "Karan Arjun", "Bazzigar"]
    },
    {
        name: "Salman Khan",
        movies: ["Pathaan", "Karan Arjun", "Bodyguard", "Tiger", "Mujhse Shadi karogi"]
    },
    {
        name: "Aamir Khan",
        movies: ["Dhoom3", "Lagaan", "Dangal", "Raja Hindustani"]
    },
    {
        name: "Akshay Kumar",
        movies: ["AirLift", "Bell Bottom", "Tashaan", "Brothers", "Mujhse Shadi karogi"]
    },
    {
        name: "Ranbir Kapoor",
        movies: ["Animal", "Bramashastra", "Tamasha", "Sanju"]
    }
];

// Function to find actors by movie name
function findActorsByMovie() {
    const movieName = document.getElementById("movieInput").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "";

    // Check if movie name is provided
    if (!movieName) {
        resultDiv.textContent = "Please enter a valid movie name ";
        return;
    }

    // Filter actors based on whether they have appeared in the given movie and is coverted into lowecase for case sentivity and map 
    const matchedActors = actorsData
        .filter(actor => actor.movies.map(movie => movie.toLowerCase()).includes(movieName.toLowerCase()))
        .map(actor => actor.name);

    // Display the result
    if (matchedActors.length === 0) {
        resultDiv.textContent = "No actors found for this movie.";
    } else {
        resultDiv.textContent = "Actors found for movie '" + movieName + "': " + matchedActors.join(", ");
    }
}

// Function to find movies by actor name
function findMoviesByActor() {
    const actorName = document.getElementById("actorInput").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "";

    // Check if actor name is provided and contains only letters
    if (/[^A-Za-z\s]/.test(actorName) || actorName.trim() === '') {
        resultDiv.textContent = "Actor name should contain only letters";
        return;
    }

    // Find the actor in the data based on the input name (case-insensitive)
    const actor = actorsData.find(actor => actor.name.toLowerCase() === actorName.toLowerCase());

    // Display the result
    if (!actor) {
        resultDiv.textContent = "No movies found for this actor.";
    } else {
        resultDiv.textContent = "Movies found for actor '" + actorName + "': " + actor.movies.join(", ");
    }
}
