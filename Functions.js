// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so:
// Call that function 3 times with 3 different values for the arguments.

/*
function tellFortune(children, partners_name, location, job){
  console.log("You will be a " + job + " in " + location + "and married to" + partners_name + "with" + children + "kids.");
}

tellFortune(3, "Sally", "Toronto", "Axe-Murderer");

tellFortune(4, "Sally", "Toronto", "Axe-Murderer");
tellFortune(35, "Sally", "Toronto", "Axe-Murderer");
*/
/*
function tellFortune(children) {
  console.log("You will be a " + job[0] + " in " + location + "and married to" + partners_name + "with" + children + "kids.");
  console.log("You will be a " + job[1] + " in " + location + "and married to" + partners_name + "with" + children + "kids.");
  console.log("You will be a " + job[2] + " in " + location + "and married to" + partners_name + "with" + children + "kids.");
}
*/


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

/*
function calculateAge(birth_year, current_year){
  console.log("You are  " + birth_year + " years old in " + current_year);
}

calculateAge([2017-1989], [2017]);
calculateAge([2017-1979], [2017]);
calculateAge([2017-1969], [2017]);
*/


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amount_per_day){
  var maxAge = (age * [amount_per_day * 365]);
  console.log("You will need " + maxAge + " calories to last you until the ripe old age of " + age);
}

calculateSupply(99, 2000);
calculateSupply(8, 2000);
calculateSupply(27, 2000);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
/*
function calcCircumfrence(radius){
  var circumference = 2 * 3.14 * radius;
  console.log("The circumference of the radius " + circumference);
}

function calcArea(radius){
  var area = 3.14 * (radius * radius);
  console.log("The area of the radius is " + area);

}

calcCircumfrence(22)
calcArea(22)
*/

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celsius){
  var fahrenheit = celsius * 1.8 + 32;
  console.log(celsius + " celsius is " + fahrenheit + " fahrenheit");
}

function fahrenheitToCelsius(fahrenheit){
  var celsius = [fahrenheit - 32] / 1.8;
  console.log(fahrenheit + " fahrenheit is " + celsius + " celsius");
}
celsiusToFahrenheit(20);
fahrenheitToCelsius(20);
