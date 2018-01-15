//printReverse()
//Write a function printReverse() that takes an array as an argument and print out the elements in the array in reverse order (don’t actually reverse the array itself)
//4
//3
//2
//1
//printReverse(["a","b","c"]);
//”c”
//”b”
//”a”



//isUniform()
//Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical
//isUniform([1,1,1,1]);        //true
//isUniform([2,1,1,1]);        //false



//sumArray()
//Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array
//sumArray([1,2,3]);        //6
//sumArray([10,3,10,4]);    //27
//sumArray([-5,100]);        //95
//Hint: Use a loop and also use a variable called result where you will store the answer and constantly add into it each time through the loop



//max()
//Write a function max() that accepts an array of numbers and returns the maximum number in the array
//max([1,2,3]);        //3
//max([10,3,10,4]);    //10
//max([-5,100]);        //100
//Hint: Use a loop and use a variable that will be storing your maximum number, and every time through the loop you’ll need to update that variable (if the number in the loop is greater



var nums = [1,2,3,4];
var letters = ["a","b","c"];



function printReverse(array) {

	for (var i = array.length -1; i >= 0; i--) {

	console.log(array[i]);

	}
};


console.log(printReverse(nums));
console.log(printReverse(letters));


//************************************************************************************************


function isUniform(array) {

	var temp = array[0];

	var uniform = true;

	array.forEach (function (num) {
		
		if (num !== temp) {
			uniform = false;
			return;
		}
	});

	return uniform;
};

console.log(isUniform([1,1,1,1]));
console.log(isUniform([1,2,1,1]));


//************************************************************************************************


// var nums = [1,2,3,4];

// result = 0;

// for (var i = 0; i<nums.length; i++) {

// 	result += nums[i];

// }

// console.log(result);


var nums = [1,2,3,4,5];

var result = 0;

function sumArray(el,i,array) {


	result = result + array[i];


};


nums.forEach(sumArray);

console.log(result);


//************************************************************************************************


var nums = [2,1,-500];


var maximum = 0;


function max(el,i,array) {


	if (array[i] > maximum) {

		maximum = array[i];
	}


};


nums.forEach(max);

console.log(maximum);