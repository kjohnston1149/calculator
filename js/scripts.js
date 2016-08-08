// Arithmetic practice

// var add = function(number1,number2){
// return number1 + number2;
// };
//
// var subtract = function(number1,number2){
// return number1 - number2;
// };
//
// var multiply = function(number1,number2){
// return number1 * number2;
// };
//
// var divide = function(number1,number2){
// return number1 / number2;
//};
//
// var number1 = parseInt(prompt("Enter a number: "));
// var number2 = parseInt(prompt("Enter another number: "));
//
// var sum = add(number1, number2);
// alert("The sum is " + sum);
//
// var difference = subtract(number1, number2);
// alert("The difference is " + difference);
//
// var product = multiply(number1, number2);
// alert("The product is " + product);
//
// var quotient = divide(number1, number2);
// alert("The quotient is " + quotient);

// BMI Calculator

var weight = parseInt(prompt("Enter your weight in pounds: "));
var height = parseInt(prompt("Enter your height in inches: "));

var calculate = function(weight, height) {
	return (703 * weight) / Math.pow(height, 2);
};

var bmi = calculate(weight, height);
alert("Your bmi is " + bmi);

// Temperature converter
var celsius = parseInt(prompt("Enter the Temperature in Celsius:"));
var fahrenheit = parseInt(prompt("Enter the Temperature in Fahrenheit:"));

var tempF = function(celsius){
  return (celsius * 1.8) + 32;
};

var tempC = function(fahrenheit){
  return (fahrenheit - 32) / 1.8;
};

var tempCFinal = tempC(fahrenheit);
alert(tempCFinal + "C");

var tempFFinal = tempF(celsius);
alert(tempFFinal + "F");
