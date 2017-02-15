// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: job title, geographic location, partner's name, number of children.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
/*
var jobTitle = "Rock Star";
var geographicLocation = "Toronto";
var partnersName = "Kay";
var numberOfChildren = "No";
console.log("You will be a " + jobTitle + "in " + geographicLocation + ", and married to" + partnersName + "with " + numberOfChildren + " kids.");
*/

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their age based on the stored values.
// Output them to the screen like so: "They are NN years old.", substituting the values.
/*
var currentYear = 2017;
var birthYear = 1989;
var age = currentYear - birthYear;
console.log("Your age is " + age );
*/
// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
/*
var currentAge = 27
var maximumAge = 110
var eatPerDay = 2250
*/
//console.log([maximumAge - currentAge] * eatPerDay);
// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
/*
var radius = 360

console.log("the circumference = " + 2 * (3.14) * radius)
*/
// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

/*var celsius = 200
var fahrenheit = 392
console.log(celsius + "°C is" + [celsius * [9/5] + 32] + " °F");
console.log(fahrenheit + " °F " + [[fahrenheit - 32] * [5/9]] + " is °C ");
