$(function(){
// Arithmetic practice
var add = function(number1,number2){
return number1 + number2;
};

var subtract = function(number1,number2){
return number1 - number2;
};

var multiply = function(number1,number2){
return number1 * number2;
};

var divide = function(number1,number2){
return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: "));

var sum = add(number1, number2);
alert("The sum is " + sum);

var difference = subtract(number1, number2);
alert("The difference is " + difference);

var product = multiply(number1, number2);
alert("The product is " + product);

var quotient = divide(number1, number2);
alert("The quotient is " + quotient);

});
