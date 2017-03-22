$(document).ready(function() {
var entry = '';  
var operators = ['+', '-', '*', '/'];
var decimal = false;

 $('button').click(function() {

    entry = $(this).attr("value");
		// Get the input and button values
		var input = document.querySelector('#answer');
		var inputVal = input.innerHTML;
    if(entry == 'ac') {
			input.innerHTML = '';
			decimal = false;
		}
		else if(entry == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = Math.round(eval(equation) * 100) / 100;
				
			decimal = false;
		}
    //specific cases where calculator should not append button value to screen
		else if(operators.indexOf(entry) > -1) {
			var lastChar = inputVal[inputVal.length - 1];
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += entry;
			else if(inputVal == '' && entry == '-') 
				input.innerHTML += entry;
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, entry);
			}
			
			decimal = false;
		}
		else if(entry == '.') {
			if(!decimal) {
				input.innerHTML += entry;
				decimal = true;
			}
		}
		else {
			input.innerHTML += entry;
		}
    e.preventDefault();
	}); 
});