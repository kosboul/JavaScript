// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

if(age < 0){
    console.log("You have entered a negative number!");
}


if(age === 21){
    console.log("Happy 21st birthday!!");
}


if(age % 2 !== 0){
    console.log("Your age is odd!");
}


if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}