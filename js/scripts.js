$(function(){
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


	var tempFFinal = tempF(celsius);
	alert(tempFFinal + "F");
	var tempCFinal = tempC(fahrenheit);
	alert(tempCFinal + "C");


});
