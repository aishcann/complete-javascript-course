//VALUES AND VARIABLES

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

// declaring a variable
// type _ name = value of variable
let firstName = "Jonas"

// variables are a way to store data!
// variables use camelCase
// variable names should be descriptive! by reading the variable name, people should know what value the variable holds

//descriptive variable names
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
//variable names that aren't too descriptive
let job1 = "Programmer";
let job2 = "Teacher";


//console.log = outputs our code to the console

console.log(firstName)

//PRACTICE

let country = "USA";
let continent = "North America";
let population = 328000000

console.log(country, continent, population)

//DATA TYPES

//values are either an object or primitive value.

//Primitive data types:
//  Number = used for decimals and integers
//  String = sequence of characters used for text, always in quotes
//  Boolean = logical type that can only be true or false, used to take decisions
//  Undefined = value taken by a varialbe that is not yet defined('empty value') ex: let children
//  Null = also means 'empty value' but is used in different circumstances
//  Symbol = defines a value that is unique and cannot be changed
//  BigInt = large integars than what Number can hold

//JS authomatically determines the value of a data type when it's stored in a variable (called dynamic typing)

//Can find the type of value by console.logging with typeof


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas')

//changing the value of a variable
// you don't need the 'let' keyword to do this, only the varialbe name
// this only works with let and var, not with const
javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun)

//because I have defined a variable but have not assigned it a value, it will console.log as a value of undefined and be a data type of undefined

let year
console.log(year)
console.log(typeof year);

//assigned a value to 'year'
year = 1991
console.log(year);

console.log(null)

// LET, CONST, VAR

//var = the old way to declare variables

//let & const = introduced in ES6 and are new ways of declaring variables

//let = we use let variables to declare variables that will change later

let age = 30
age = 31

//const = we use const to declare variables that will not change later and values will remain constant

const birthYear = 1991
// attempting to change the birthYear (like below) will result in 'uncaught TypeError'
// birthYear = 1990
// attempting to declare a const variable with no initial value will also result in an error
// const job

//when to use const, let, or var?
// var is out of style so don't use it
// let ONLY when you are SURE you have to change a variable in the future
// const majority of the time because changing variables create a higher possibility of introducing bugs into the code

//BASIC OPERATORS

//subtraction
const ageJonas = 2037 - 1991
const ageSarah = 2037 - 2018
console.log(ageJonas, ageSarah);
// also note the descriptive, specific variable names!
console.log(ageJonas * 2, ageJonas / 10, 2 **3)
