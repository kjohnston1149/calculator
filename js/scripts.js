
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
		var result = add(number1, number2);
		$("#addOutput").text("The sum is " + result);

	});
	$("form#subtract").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#subtract1").val());
		var number2 = parseInt($("#subtract2").val());
		var result = subtract(number1, number2);
		$("#subtractOutput").text("The difference is " + result);
	});
	$("form#multiply").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#multiply1").val());
		var number2 = parseInt($("#multiply2").val());
		var result = multiply(number1, number2);
		$("#multiplyOutput").text("The product is " + result);
	});
	$("form#divide").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#divide1").val());
		var number2 = parseInt($("#divide2").val());
		var result = divide(number1, number2);
		$("#divideOutput").text("The quotient is " + result);
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
