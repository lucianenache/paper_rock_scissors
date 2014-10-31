'use strict';
	
	var MAX_ITEMS = 3;

	var computerScore = 0;
	var yourScore = 0;
	var drawScore = 0;

	var yourChoice = 0;
	var computerChoice = 0;
	

	var yourWeapon = '';
	var computerWeapon = '';

	//divs
	var rock = document.getElementById('rock-div');
	var paper = document.getElementById('paper-div');
	var scissors = document.getElementById('scissors-div');

	// scores
	var youSpan = document.getElementById('you-span');
	var drawSpan = document.getElementById('draw-span');
	var computerSpan = document.getElementById('computer-span');

	// picks
	var youLastPick = document.getElementById('you-pick');
	var computerLastPick = document.getElementById('computer-pick');
	
	youSpan.innerHTML = yourScore;
	drawSpan.innerHTML = drawScore;
	computerSpan.innerHTML = computerScore;
	
	var playerChoice = document.getElementById('playerChoice');
	var computerChoice = document.getElementById('computerChoice')

	//assign the element and trigger the game

	rock.onclick = function() {
   	  	console.log("clicked rock");
   	   	yourChoice = 0;
   	   	start(yourChoice);
	};
	paper.onclick = function(){
		yourChoice = 1;
		start(yourChoice);
		console.log("clicked paper");
	};
	scissors.onclick = function(){
		yourChoice = 2;
		start(yourChoice);
		console.log("clicked clicked scissors");
	};


	function start(yourChoice) {
	
		computerChoice = generateRandom();
		console.log(generateRandom());
		compare(yourChoice,computerChoice);
		
		//playerChoice.innerHTML = choice1;
		//computerChoice.innerHTML = choice2;
	}	

	function determineWeapon(choice){
		console.log("nside det",choice);
		switch (choice) {
			case 0:
				return 'Rock';
			case 1:
				return 'Paper';
			case 2:
				return 'Scissors';
			default:
				console.err("invalid choice");
				return;
		}
	}


	function compare(c1,c2){
		if(c1==c2){
			 drawScore++;		
		} else if ((c1 == 0 && c2 ==2) || (c1 == 1 && c2 == 0) || (c1 == 2 && c2 ==1) ){
			yourScore++;
		} else {
			computerScore++;
		}
		updateScores();	
	};	
	
	function updateScores() {
		youSpan.innerHTML = yourScore;
		drawSpan.innerHTML = drawScore;
		computerSpan.innerHTML = computerScore;
		youLastPick.innerHTML = determineWeapon(yourChoice);
		computerLastPick.innerHTML= determineWeapon(computerChoice);
	};

	function generateRandom(){
		return Math.floor((Math.random() * MAX_ITEMS));
	};