// Pseudocode
//
// app says random number
//   - get random number
//   - play number
// user enters what he heard
// if correct
//   add points to score
//   say new number
// if incorrect
//   deduct points from score
//   say new number

var levelRanges = {
	1: {min: 1,	max: 20},
	2: {min: 21, max: 99},
	3: {min: 100,	max: 999},
	4: {min: 1000, max: 9999},
	5: {min: 10000, max: 99999},
	6: {min: 100000, max: 999999},
	7: {min: 1000000, max: 9999999},
	8: {min: 10000000, max: 99999999},
	9: {min: 100000000, max: 999999999},
	10: {min: 1000000000, max: 9999999999},
	11: {min: 10000000000, max: 99999999999},
	12: {min: 100000000000, max: 999999999999}
}

var currLevel = 4;
var trialNum = 0;
var streak = 0;
var score = 0;
var points = 0;
var minRange = 0;
var maxRange = 0;
var rndNum = 0;
var userGuess = "";
var filesToPlay = [];
var i = 0;

var currLevelLabel = 	document.querySelector(".curr-level");
var streakLabel = document.querySelector(".streak");
var scoreLabel = document.querySelector(".score");
var numberPad = document.querySelector(".number-pad");
var numberButton = document.querySelectorAll(".number-btn");
var display = document.querySelector(".number-display");
var audio = document.querySelector(".audio");
var startBtn = document.querySelector(".start-btn");

window.onload = init;

function init() {
	updateScoreboard(currLevel, streak, score);
	setListeners();
}

function startGame() {
	updateScoreboard(currLevel, streak, score);
	clearDisplay();
	sayRndNumber();
}

function updateScoreboard() {
	currLevelLabel.innerHTML = "Level: " + currLevel;
	streakLabel.innerHTML = "Streak: " + streak;
	scoreLabel.innerHTML = "Score: " + score;
}

function setListeners() {
	numberButton.forEach(function(elem) {
		elem.addEventListener("click", getUserInput);
	});
	startBtn.addEventListener("click", startGame);
}

function getUserInput() {
	if (this.value === "check") {
		checkNumber();
	} else if (this.value === "clear") {
		clearDisplay();
	} else {
		userGuess += this.value;
		updateDisplay(userGuess);
	}
}

function checkNumber() {
	if (isMatch(userGuess, rndNum)) {
		calculatePoints();
		addPoints();
		display.innerHTML = "Correct!";
		streak += 1;
		if (streak > 4) {
			currLevel += 1;
			streak = 0;
		}
	} else {
		calculatePoints();
		deductPoints();
//		display.innerHTML = "Incorrect";
		reviewIncorrect();
		streak = 0;
	}
	updateScoreboard();
	setTimeout(function() {
		clearDisplay();
		sayRndNumber();
	}, 1500);
}

function reviewIncorrect() {
	display.classList.add("incorrect");
	display.innerHTML = rndNum;
}

function isMatch(a, b) {
	if (parseInt(a) === parseInt(b)) {
		return true;
	} else {
		return false;
	}
}

function calculatePoints() {
	points = 10;
}

function addPoints() {
	score += points;
}

function deductPoints() {
	score -= points;
}

function clearDisplay() {
	userGuess = "";
	display.classList.remove("incorrect");
	updateDisplay(userGuess);
}

function updateDisplay(value) {
	display.innerHTML = value;
}

function sayRndNumber() {
	rndNum = getRndNum(levelRanges[currLevel].min, levelRanges[currLevel].max);
	playNumber(rndNum);
}

function getRndNum(min, max) {
	if (min < max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}

function playNumber(number) {
	numberPad.classList.add("disabled");
	if (number > 0 && number < 999) {
		filesToPlay = ["numbers/en/" + number + ".mp3"];
	}
	if (number > 999 && number < 1000000) {
		var quotient = Math.floor(number / 1000);
		var remainder = number % 1000;
		filesToPlay = ["numbers/en/" + quotient + ".mp3", "numbers/en/thousand.mp3", "numbers/en/" + remainder + ".mp3"];
	}
	if (number > 999999 && number < 1000000000) {
		var millionquotient = Math.floor(number / 1000000);
		var millionremainder = number % 1000000;
		var quotient = Math.floor(millionremainder / 1000);
		var remainder = millionremainder % 1000;
		filesToPlay = new Array(new Audio("numbers/en/" + millionquotient + ".mp3"), new Audio("numbers/en/million.mp3"), new Audio("numbers/en/" + quotient + ".mp3"), new Audio("numbers/en/thousand.mp3"), new Audio("numbers/en/" + remainder + ".mp3"));
	}
	if (number > 999999999 && number < 1000000000000) {
		var billionquotient = Math.floor(number / 1000000000);
		var billionremainder = number % 1000000000;
		var millionquotient = Math.floor(billionremainder / 1000000);
		var millionremainder = billionremainder % 1000000;
		var quotient = Math.floor(millionremainder / 1000);
		var remainder = millionremainder % 1000;
		filesToPlay = new Array(new Audio("numbers/en/" + billionquotient + ".mp3"), new Audio("numbers/en/billion.mp3"), new Audio("numbers/en/" + millionquotient + ".mp3"), new Audio("numbers/en/million.mp3"), new Audio("numbers/en/" + quotient + ".mp3"), new Audio("numbers/en/thousand.mp3"), new Audio("numbers/en/" + remainder + ".mp3"));
	}
	i = 0;
	playSnd();
}


function playSnd() {
	audio.src = filesToPlay[i];
	audio.play();
	if (i < filesToPlay.length - 1) {
		i += 1;
		audio.addEventListener("ended", playSnd);
	} else {
		audio.removeEventListener("ended", playSnd);
		audio.addEventListener("ended", activateNumPad);
	}
}

function activateNumPad() {
	numberPad.classList.remove("disabled");
	audio.removeEventListener("ended", activateNumPad);
}


//function playSnd() {
//	audio.src = filesToPlay[i];
//	audio.play();
////	audio.addEventListener('ended', function() {
////		i += 1;
////		playFile();
////	});
//	for (i = 1; i < filesToPlay.length; i++) {
//		audio.addEventListener("ended", function() {
//			playFile(filesToPlay[i]);
//		});
//	}
//}
//
//function playFile(soundFile) {
//	audio.src = soundFile;
//	audio.play();
//	if (i == filesToPlay.length) {
//		numberPad.classList.remove("disabled");
//		filesToPlay = [];
//		return;
//	}
//}
	






// Lets you enter numbers with the keyboard
document.addEventListener("keydown", function (event) {
		if (event.keyCode == 49) {
			enterednumber = document.getElementById("guess").innerHTML + 1;
			document.getElementById("guess").innerHTML = enterednumber;
		} else if (event.keyCode == 50) {
			enterednumber = document.getElementById("guess").innerHTML + 2;
			document.getElementById("guess").innerHTML = enterednumber;
		} else if (event.keyCode == 51) {
			enterednumber = document.getElementById("guess").innerHTML + 3;
			document.getElementById("guess").innerHTML = enterednumber;
		} else if (event.keyCode == 52) {
			enterednumber = document.getElementById("guess").innerHTML + 4;
			document.getElementById("guess").innerHTML = enterednumber;
		} else if (event.keyCode == 53) {
			enterednumber = document.getElementById("guess").innerHTML + 5;
			document.getElementById("guess").innerHTML = enterednumber;
		} else if (event.keyCode == 54) {
			enterednumber = document.getElementById("guess").innerHTML + 6;
			document.getElementById("guess").innerHTML = enterednumber;
		} else if (event.keyCode == 55) {
			enterednumber = document.getElementById("guess").innerHTML + 7;
			document.getElementById("guess").innerHTML = enterednumber;
		} else if (event.keyCode == 56) {
			enterednumber = document.getElementById("guess").innerHTML + 8;
			document.getElementById("guess").innerHTML = enterednumber;
		} else if (event.keyCode == 57) {
			enterednumber = document.getElementById("guess").innerHTML + 9;
			document.getElementById("guess").innerHTML = enterednumber;
		} else if (event.keyCode == 48) {
			enterednumber = document.getElementById("guess").innerHTML + 0;
			document.getElementById("guess").innerHTML = enterednumber;
		} else if (event.keyCode == 13) {
			isMatch();
		}
}, true);



function chooseLevel(level) {
	document.getElementById('wrapperRange').style.display = "none";
	document.getElementById('wrapperTest').style.display = "none";
	document.getElementById('wrapperStart').style.display = "block";
	if (level == 1) {
		min = 1;
		max = 20;
		levelName = "Super Duper Easy";
	} else if (level == 2) {
		min = 1;
		max = 100;
		levelName = "Super Easy";
	} else if (level == 3) {
		min = 100;
		max = 999;
		levelName = "Pretty Easy";
	} else if (level == 4) {
		min = 1000;
		max = 9999;
		levelName = "Easy";
	} else if (level == 5) {
		min = 10000;
		max = 99999;
		levelName = "Slightly Challenging";
	} else if (level == 6) {
		min = 100000;
		max = 999999;
		levelName = "Challenging";
	} else if (level == 7) {
		min = 1000000;
		max = 9999999;
		levelName = "Very Challenging";
	} else if (level == 8) {
		min = 10000000;
		max = 99999999;
		levelName = "Kinda Hard";
	} else if (level == 9) {
		min = 100000000;
		max = 999999999;
		levelName = "Hard";
	} else if (level == 10) {
		min = 1000000000;
		max = 9999999999;
		levelName = "Really Hard";
	} else if (level == 11) {
		min = 10000000000;
		max = 99999999999;
		levelName = "Insane";
	} else if (level == 12) {
		min = 100000000000;
		max = 999999999999;
		levelName = "Impossible";
	}
	xlevel = level;
}

function startOver() {
	location.reload();
}

function chooseLanguage(language) {
	document.getElementById('wrapperLanguage').style.display = "none";
	//	document.getElementById('wrapperMode').style.display = "block";
	document.getElementById('wrapperRange').style.display = "block";
	document.getElementById('wrapperRange').style.height = "1300px";
	setLanguage = language;
	score = 0;
}