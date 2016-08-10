
// Business logic

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

// Everything below this line is user interface logic
$(function(){
	$("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());

		alert("The sum is " + add(number1, number2));
	});



});

// var difference = subtract(number1, number2);
// alert("The difference is " + difference);
//
// var product = multiply(number1, number2);
// alert("The product is " + product);
//
// var quotient = divide(number1, number2);
// alert("The quotient is " + quotient);
