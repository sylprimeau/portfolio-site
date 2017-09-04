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

					// Not shown. Add it back in when you add the choice to learn
					function chooseMode(mode) {
						document.getElementById('wrapperMode').style.display = "none";
						document.getElementById('wrapperRange').style.display = "block";
						setMode = mode;
						if (setMode == "learn") {
							document.getElementById('headerRange').innerHTML = "Choose the range that you would like to learn.";
						} else {
							document.getElementById('headerRange').innerHTML = "Choose the range that you would like to test.";
						}
						//	alert(setLanguage + " " + setMode);
					}

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

					function start() {
						document.getElementById('wrapperStart').style.display = "none";
						//	if(setMode=="learn") {
						//		document.getElementById('wrapperLearn').style.display = "block";
						//		learn();
						//	} else if(setMode=="test") {
						trial = 0;
						inarow = 0;
						test();
						//	}
					}

					// Use this when you add learning option
					//function learn() {
					//	alert("You have entered learning mode. Code will go here to do something.");
					//}

					function updateScoreboard() {
						document.getElementById('levelLabel').innerHTML = "Level: " + levelName + "&nbsp;&nbsp;&nbsp;&nbsp;Trial #: " + trial;
						document.getElementById("scoreboard").innerHTML = "Score: " + score + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Correct in a row: " + inarow;
					}

					function test() {
						trial++;
						document.getElementById('wrapperTest').style.display = "block";
						updateScoreboard();
						randomnumber = getNum(min, max); // generate random number
						playAudio(randomnumber);
						document.getElementById("guess").style.color = "white";
						document.getElementById("guess").style.fontSize = "40px";
						document.getElementById("guess").innerHTML = "Listen to number...";
					}

					function getNum(min, max) {
						//alert("getNum called");
						var min = parseInt(min);
						var max = parseInt(max);
						if (max < min) {
							alert("Minimum value must be less than maximum value!");
							return 0;
						} else {
							return Math.floor(Math.random() * (max - min + 1) + min);
						}
					}

					function playAudio(number) {
						if (number > 0 && number < 999) {
							sounds = new Array(new Audio("numbers/en/" + number + ".mp3"));
							i = -1;
							playSnd();
						}
						if (number > 999 && number < 1000000) {
							var quotient = Math.floor(number / 1000);
							var remainder = number % 1000;
							sounds = new Array(new Audio("numbers/en/" + quotient + ".mp3"), new Audio("numbers/en/thousand.mp3"), new Audio("numbers/en/" + remainder + ".mp3"));
							i = -1;
							playSnd();
						}
						if (number > 999999 && number < 1000000000) {
							var millionquotient = Math.floor(number / 1000000);
							var millionremainder = number % 1000000;
							var quotient = Math.floor(millionremainder / 1000);
							var remainder = millionremainder % 1000;
							sounds = new Array(new Audio("numbers/en/" + millionquotient + ".mp3"), new Audio("numbers/en/million.mp3"), new Audio("numbers/en/" + quotient + ".mp3"), new Audio("numbers/en/thousand.mp3"), new Audio("numbers/en/" + remainder + ".mp3"));
							i = -1;
							playSnd();
						}
						if (number > 999999999 && number < 1000000000000) {
							var billionquotient = Math.floor(number / 1000000000);
							var billionremainder = number % 1000000000;
							var millionquotient = Math.floor(billionremainder / 1000000);
							var millionremainder = billionremainder % 1000000;
							var quotient = Math.floor(millionremainder / 1000);
							var remainder = millionremainder % 1000;
							sounds = new Array(new Audio("numbers/en/" + billionquotient + ".mp3"), new Audio("numbers/en/billion.mp3"), new Audio("numbers/en/" + millionquotient + ".mp3"), new Audio("numbers/en/million.mp3"), new Audio("numbers/en/" + quotient + ".mp3"), new Audio("numbers/en/thousand.mp3"), new Audio("numbers/en/" + remainder + ".mp3"));
							i = -1;
							playSnd();
						}
					}

					function playSnd() {
						i++;
						if (i == sounds.length) {
							document.getElementById("guess").style.fontSize = "80px";
							document.getElementById("guess").style.color = "yellow";
							document.getElementById('guess').innerHTML = "";
							playing = 0;
							return;
						}
						sounds[i].addEventListener('ended', playSnd);
						sounds[i].play();
					}

					function checknumber() {
						if (playing == 0) {
							playing = 1;
							var inputnumber = document.getElementById("guess").innerHTML;
							if (inputnumber == randomnumber) {
								document.getElementById("guess").style.color = "limegreen";
								document.getElementById("guess").innerHTML = "Correct!";
								score = score + 10;
								inarow++;
							} else {
								document.getElementById("guess").style.color = "red";
								document.getElementById("guess").innerHTML = "Nope!";
								inarow = 0; // reset inarow on wrong answer
							}
							if (inarow > 2) {
								updateScoreboard();
								alert("You just finished level: " + xlevel);
								xlevel++;
								trial = 1;
								alert("Let's go to level: " + xlevel);
								chooseLevel(xlevel);
								start();
							} else {
								setTimeout(function () {
									test();
								}, 1000);
							}
						}
					}

					// This confirms before leaving game. Disabled while I'm testing...
					//	window.onbeforeunload = function() {return "Do you really want to leave the game in progress?"};

					// Lets you enter numbers with the keyboard
					document.addEventListener("keydown", function (event) {
						if (playing == 0) {
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
								checknumber();
							}
						}
					}, true);

					//Enter numbers by clicking or tapping
					function tap1() {
						if (playing == 0) {
							enterednumber = document.getElementById("guess").innerHTML + 1;
							document.getElementById("btn1").blur();
							document.getElementById("guess").innerHTML = enterednumber;
						}
					}

					function tap2() {
						if (playing == 0) {
							enterednumber = document.getElementById("guess").innerHTML + 2;
							document.getElementById("btn2").blur();
							document.getElementById("guess").innerHTML = enterednumber;
						}
					}

					function tap3() {
						if (playing == 0) {
							enterednumber = document.getElementById("guess").innerHTML + 3;
							document.getElementById("btn3").blur();
							document.getElementById("guess").innerHTML = enterednumber;
						}
					}

					function tap4() {
						if (playing == 0) {
							enterednumber = document.getElementById("guess").innerHTML + 4;
							document.getElementById("btn4").blur();
							document.getElementById("guess").innerHTML = enterednumber;
						}
					}

					function tap5() {
						if (playing == 0) {
							enterednumber = document.getElementById("guess").innerHTML + 5;
							document.getElementById("btn5").blur();
							document.getElementById("guess").innerHTML = enterednumber;
						}
					}

					function tap6() {
						if (playing == 0) {
							enterednumber = document.getElementById("guess").innerHTML + 6;
							document.getElementById("btn6").blur();
							document.getElementById("guess").innerHTML = enterednumber;
						}
					}

					function tap7() {
						if (playing == 0) {
							enterednumber = document.getElementById("guess").innerHTML + 7;
							document.getElementById("btn7").blur();
							document.getElementById("guess").innerHTML = enterednumber;
						}
					}

					function tap8() {
						if (playing == 0) {
							enterednumber = document.getElementById("guess").innerHTML + 8;
							document.getElementById("btn8").blur();
							document.getElementById("guess").innerHTML = enterednumber;
						}
					}

					function tap9() {
						if (playing == 0) {
							enterednumber = document.getElementById("guess").innerHTML + 9;
							document.getElementById("btn9").blur();
							document.getElementById("guess").innerHTML = enterednumber;
						}
					}

					function tap0() {
						if (playing == 0) {
							enterednumber = document.getElementById("guess").innerHTML + 0;
							document.getElementById("btn0").blur();
							document.getElementById("guess").innerHTML = enterednumber;
						}
					}

					function clearinput() {
						if (playing == 0) {
							document.getElementById("guess").innerHTML = "";
						}
					}

					//alert("Language: " + setLanguage + "\nMin: " + min + "\nMax: " + max + "\nScore = " + score);
