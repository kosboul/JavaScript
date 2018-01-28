var p1Button = document.getElementById("p1Button");
var p2Button = document.getElementById("p2Button");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");


var p1Score = 0;
var p2Score = 0;
var maxScore = 5;

var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var maxScoreDisplay = document.querySelector("p span");

var gameOver = false;


p1Button.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		p1Display.textContent = p1Score;
		if (p1Score === maxScore){
		p1Display.classList.add("green");
		gameOver = true;
		}
	}
});


p2Button.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		p2Display.textContent = p2Score;
		if (p2Score === maxScore){
		p2Display.classList.add("green");
		gameOver = true;
		}
	}
});


resetButton.addEventListener("click", function(){
	reset();
});


function reset (){
	p1Score - 0;
	p2Score = 0;
	p1Display.textContent = "0";
	p2Display.textContent = "0";
	p1Display.classList.remove("green");
	p2Display.classList.remove("green");
	gameOver = false;
}


numInput.addEventListener("change", function(){
	maxScoreDisplay.textContent = this.value;
	maxScore = Number(this.value);
	reset();
});


