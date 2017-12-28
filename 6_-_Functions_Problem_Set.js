//Functions Problem Set

// 1--Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise
// 2--Write a function factorial() which takes a single numeric argument and returns the factorial of that number (consider 0! Is 1)
// 3--Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version
// Basically, replace -s with _s. Consider kebabToSnake(“blah”); returns blah


function isEven(num) {
	if(num % 2 === 0) {
		return true;
	}

	else {
		return false;
	}
}

isEven(2);


//---------------------------------------------------------------


function factorial(i) {
	if (i <= 1) {
		return 1;
	}

	return i * factorial (i-1);
}

factorial(4);


//---------------------------------------------------------------

function kebabToSnake(str) {
    //replace all dashes with
    var myString = str.replace(/-/g, "_");
    //return str
    return myString;
    //try with: "this - is -a - ---test";
}

kebabToSnake("ill-fated");