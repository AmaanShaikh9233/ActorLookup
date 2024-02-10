I have solved it Two ways, first one have the solution with frontend excluding the styling, First way is stored in solution 1 folder.
first way contains the an HTML file which connected with the js file 
Second way which compatible with the node js to run second way first install the node js ,select the proper directory in which this files are stored .Once you at the right directory 
just type the command node (file name) 
for my case whhich is node search js 
This file provides two main functionalities as requested:
<br>
findActorByMoviesName(): This function takes a movie name as input and returns an array of actor names who have appeared in that movie. It first validates the input and then filters through the actorsData array to find actors who have the specified movie in their list of movies. It returns an array of matched actor names or a message if no actors are found for the given movie.
<br>
findMoviesByActorName(): This function takes an actor or actress name as input and returns an array of movies in which the specified actor has appeared. Similar to the previous function, it first validates the input and then searches for the actor in the actorsData array. If the actor is found, it returns their list of movies; otherwise, it returns a message indicating that no movies are found for the given actor.
<br>
The code includes error handling to manage cases of invalid inputs and provides appropriate error messages. Additionally, it utilizes appropriate data structures and algorithms to efficiently perform the required search operations.
