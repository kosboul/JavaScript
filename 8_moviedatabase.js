//Create an array of movie objects. Each movie should have a title, rating, and hasWatched properties

//You will need an array called movies, inside the array you have some movie objects, need a title that is a string, a rating that is a number
//, and hasWatched that is a boolean. Then loop through the array and print out something like this:

// You have watched “In Bruges” - 5 stars
// You have not seen “Frozen” - 4.5 stars
// You have seen “Mad Max Fury Road” - 5 stars
// You have not seen “Les Miserables” - 3.5 stars


var movies = [
	{
		title: "Forest Gump",
		rating: 10,
		hasWatched: true
	},

	{
		title: "Star Trek II: The Wrath of Khan",
		rating: 8,
		hasWatched: true
	},

	{
		title: "Eat Pray Love",
		rating: 2,
		hasWatched: true
	},

	{
		title: "Star Wars: The Last Jedi",
		rating: 9,
		hasWatched: false
	}
];


function printMovies(el,i,array){
	if(array[i].hasWatched === true) {
		console.log("You have watched " + array[i].title + " - " + array[i].rating);
	} else {
		console.log("You have not watched " + array[i].title + " - " + array[i].rating);
	}
}


movies.forEach(printMovies);

