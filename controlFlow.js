// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(x, y){
  if ( x > y ){
    console.log(x + " is greater than  " + y);
  }else{
    console.log(x + " is less than  " + y);
  }
}

greaterNum(10, 9)
greaterNum(9, 10)
greaterNum(15, 111)
// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(langauge){
  if (langauge === "en")
    console.log("Hello World");
  else if (langauge === "de")
    console.log("danke");
  else (langauge === "es")
    console.log("ola!");
}

helloWorld("en")
helloWorld("de")
helloWorld("es")

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.



function assignGrade(score){
  if (score <= 50)
    console.log("grade is F");
  else if (score > 50 && score < 59)
    console.log("grade is D");
  else if (score > 60 && score < 69)
    console.log("grade is C");
  else if (score > 70 && score < 79)
    console.log("grade is B");
  else if (score > 80 && score < 99)
    console.log("grade is A");
}

assignGrade(44)
assignGrade(55)
assignGrade(65)
assignGrade(76)
assignGrade(87)


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
function pluralize(noun, number){
  if (number === 1)
    console.log(number + " " + noun);
  else
    console.log(number + " " + noun + "s");
}

pluralize("kay", 1)
pluralize('fish', 5)
pluralize('bart', 234)
pluralize('superman', 234)
pluralize('hatchet', 1)
pluralize('rod', -1123)
