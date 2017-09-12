document.addEventListener('DOMContentLoaded', function (event) {
	
	var operand = 0;
	var display = document.getElementsByClassName('display');
	
	var oneButton = document.getElementsByName('one')[0];
	oneButton.onclick = function() {
		operand  = 1;
		document.getElementsByClassName('display')[0].value = operand;
	}

	var twoButton = document.getElementsByName('two')[0];
	twoButton.onclick = function() {
		operand = 2;
		document.getElementsByClassName('display')[0].value = operand;
	}

	var threeButton = document.getElementsByName('three')[0];
	threeButton.onclick = function() {
		operand = 3;
		document.getElementsByClassName('display')[0].value = operand;
	}

	var fourButton = document.getElementsByName('four')[0];
	fourButton.onclick = function() {
		operand = 4;
		document.getElementsByClassName('display')[0].value = operand;
	}

	var fiveButton = document.getElementsByName('five')[0];
	fiveButton.onclick = function() {
		operand = 5;
		document.getElementsByClassName('display')[0].value = operand;
	}

	var sixButton = document.getElementsByName('six')[0];
	sixButton.onclick = function() {
		operand = 6;
		document.getElementsByClassName('display')[0].value = operand;
	}

	var sevenButton = document.getElementsByName('seven')[0];
	sevenButton.onclick = function() {
		operand = 7;
		document.getElementsByClassName('display')[0].value = operand;
	}

	var eightButton = document.getElementsByName('eight')[0];
	eightButton.onclick = function() {
		operand = 8;
		document.getElementsByClassName('display')[0].value = operand;
	}

	var nineButton = document.getElementsByName('nine')[0];
	nineButton.onclick = function() {
		operand = 9;
		document.getElementsByClassName('display')[0].value = operand;
	}


	});







// var numButtons = document.querySelectorAll(‘.number’);
// for (var i = 0; i < numButtons.length; i++) {
//     numButtons[i].addEventListener(‘click’, function(event){
//         console.log(‘clicked’);
//         number = this.value;
//         console.log(number);
//     });
// }







	// var myButton = document.getElementById('my-button');

// 	myButton.addEventListener('click', function(event){
// 		console.log('Help me! Ive been clicked!');















// function displayNum () {

// 	if PLUS IS CLICKED 

// 	var dNum document.getElementByClass('display');
// 	dNum.innerHTML = 'THE RESULT ONE OF THE FOUR FUNCTIONS AS VARIABLES' 

// }


// function calculate () {
// 	if  

// }






// ul class="calc">

//     <!-- Display box -->
//     <li>
//       <input type="text"  class="display"  name="input">
//     </li>








// function addNum (numOne, numTwo) {

// 	var digitOne = document.getElementById


// }

// addNumbers(numOne, numTwo);

// var numOne = 




// q5 = document.querySelectorAll('nav li')

// for (var i = 0; i < q5.length; i++) {
//     q5.classAdd(' bold');
// 		// .addClass('bold')
// 	}


// var q5 = document.querySelectorAll('nav li');

// for (var i = 0; i < q5.length; i++) {
// 	if (q5[i].classList.contains('green')){
// 		q5[i].classlist.add(' bold')
// 				// q5[i].className += ' bold'
// 	}
// }