//Toggle the body's background color between purple and white, when a button is clicked


var button = document.getElementById("button");

var body = document.getElementsByTagName("body");


//var isPurple = false;



button.addEventListener("click", function() {

	body[0].classList.toggle("purple");

	// if(isPurple) {
	// 		body.classList.remove("purple");
	// } else {
	// 		body.classList.add("white");
	// }

	// isBlue = !isBlue;
});

