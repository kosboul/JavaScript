//While Loops Problem Set

// 1--Print all numbers between -10 and 19
// 2--Print all even numbers between 10 and 40
// 3--Print all odd numbers between 300 and 333
// 4--Print all numbers divisible by 5 AND 3 between 5 and 50


var num = -10;

while(num < 20) {
	console.log(num)
	num++;
}


//---------------------------------

var num = 10;

while(num < 41){
	console.log(num)
	num+=2;
} 

// OR

var num = 10;

while(num < 41) {
	if(num % 2 === 0) {
	console.log(num);
	}

	num++;
}


//---------------------------------

var num = 300;

while(num <= 333) {
	if(num % 2 !== 0) {
	console.log(num)
	}

	num++;
}

//---------------------------------

var num = 5;

while(num <= 50) {
	if(num % 5 === 0 && num % 3 === 0) {
		console.log(num);
	}
	num++;
}