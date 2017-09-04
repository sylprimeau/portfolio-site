    var timerOn = false;
    var breakTime = 5;
    var sessionTime = 25;
    var sessionSeconds = sessionTime * 60;
    var breakSeconds = breakTime * 60;
    var sessionTimer;
    var breakTimer;
    var blink;
    var status = "session";
    var audio = document.getElementById("audio");
    document.getElementById("time-break").innerHTML = breakTime;
    document.getElementById("time-session").innerHTML = sessionTime;
    document.getElementById("time-remaining").innerHTML = formatSeconds(sessionSeconds);

    function reset() {
        timerOn = false;
        breakTime = 5;
        sessionTime = 25;
        sessionSeconds = sessionTime * 60;
        breakSeconds = breakTime * 60;
        status = "session";
        clearInterval(sessionTimer);
        clearInterval(breakTimer);
        clearInterval(blink);
        document.getElementById("time-break").innerHTML = breakTime;
        document.getElementById("time-session").innerHTML = sessionTime;
        document.getElementById("time-remaining").innerHTML = formatSeconds(sessionSeconds);
        document.getElementById("time-remaining").style.visibility = "visible";
        document.getElementById("time-remaining").style.opacity = "1";
        document.getElementById("timer-border").style.color = "aqua";
        document.getElementById("timer-border").style.borderColor = "aqua";
        enableSettings();
    }

    function decreaseBreakTime() {
        if (breakTime > 1) {
            breakTime -= 1;
            document.getElementById("time-break").innerHTML = breakTime;
            breakSeconds = breakTime * 60;
//            document.getElementById("time-remaining").innerHTML = formatSeconds(breakSeconds);
        }
    }

    function increaseBreakTime() {
        breakTime += 1;
        document.getElementById("time-break").innerHTML = breakTime;
        breakSeconds = breakTime * 60;
//        document.getElementById("time-remaining").innerHTML = formatSeconds(breakSeconds);
    }

    function decreaseSessionTime() {
        if (sessionTime > 1) {
            sessionTime -= 1;
            document.getElementById("time-session").innerHTML = sessionTime;
            sessionSeconds = sessionTime * 60;
            document.getElementById("time-remaining").innerHTML = formatSeconds(sessionSeconds);
        }
    }

    function increaseSessionTime() {
        sessionTime += 1;
        document.getElementById("time-session").innerHTML = sessionTime;
        sessionSeconds = sessionTime * 60;
        document.getElementById("time-remaining").innerHTML = formatSeconds(sessionSeconds);
    }

    function startSessionTimer() {
        status = "session";
        console.log("session timer started");
        console.log("there are this many seconds: " + sessionSeconds);
        sessionTimer = setInterval(function () {
            if (sessionSeconds > 0) {
                sessionSeconds -= 1;
                document.getElementById("time-remaining").innerHTML = formatSeconds(sessionSeconds);
            } else {
                // session finished, take a break
                clearInterval(sessionTimer);
                document.getElementById("timer-border").style.color = "pink"; // had to do border for clicks to work
                document.getElementById("timer-border").style.borderColor = "pink"; // had to do border for clicks to work
                audio.play();
                startBreakTimer();
                sessionSeconds = sessionTime * 60;
                document.getElementById("time-remaining").innerHTML = formatSeconds(breakSeconds);
            }
        }, 1000);
    }

    function startBreakTimer() {
        status = "break";
        console.log("break timer started");
        breakTimer = setInterval(function () {
            if (breakSeconds > 0) {
                breakSeconds -= 1;
                document.getElementById("time-remaining").innerHTML = formatSeconds(breakSeconds);
            } else {
                // break finished
                clearInterval(breakTimer);
                document.getElementById("timer-border").style.color = "aqua";
                document.getElementById("timer-border").style.borderColor = "aqua";
                audio.play();
                startSessionTimer();
                breakSeconds = breakTime * 60;
                document.getElementById("time-remaining").innerHTML = formatSeconds(sessionSeconds);
            }
        }, 1000);
    }

    function disableSettings() {
        document.getElementById("dec-session").style.pointerEvents = "none";
        document.getElementById("inc-session").style.pointerEvents = "none";
        document.getElementById("dec-break").style.pointerEvents = "none";
        document.getElementById("inc-break").style.pointerEvents = "none";
    }

    function enableSettings() {
        document.getElementById("dec-session").style.pointerEvents = "auto";
        document.getElementById("inc-session").style.pointerEvents = "auto";
        document.getElementById("dec-break").style.pointerEvents = "auto";
        document.getElementById("inc-break").style.pointerEvents = "auto";
    }

    function formatSeconds(seconds) {
        var date = new Date(1970, 0, 1);
        date.setSeconds(seconds);
        return date.toTimeString().replace(/.*(\d{2}:\d{2}).*/, "$1");
    }

    function startStopTimer() {
        audio.play(); // without calling this here, audio won't play in other functions!
        audio.pause(); // this stops the sound from playing here but not elsewhere! Yay!
        document.getElementById("time-remaining").style.visibility = "visible";
        clearInterval(blink);
        disableSettings();
        console.log("timer started");
        if (!timerOn && status == "session") {
            timerOn = true;
            startSessionTimer();
        } else if (!timerOn && status == "break") {
            timerOn = true;
            startBreakTimer();
        } else {
            timerOn = false;
            clearInterval(sessionTimer);
            clearInterval(breakTimer);
            blink = setInterval(function () {
                if (document.getElementById("time-remaining").style.visibility == "hidden") {
                    document.getElementById("time-remaining").style.visibility = "visible";
                } else {
                    document.getElementById("time-remaining").style.visibility = "hidden";
                }
            }, 700);
        }
    }



    document.getElementById("dec-break").addEventListener("click", decreaseBreakTime, false);
    document.getElementById("inc-break").addEventListener("click", increaseBreakTime, false);
    document.getElementById("dec-session").addEventListener("click", decreaseSessionTime, false);
    document.getElementById("inc-session").addEventListener("click", increaseSessionTime, false);
    document.getElementById("timer-border").addEventListener("click", startStopTimer, false);
    document.getElementById("reset").addEventListener("click", reset, false);
/*    document.getElementById("dec-break").addEventListener("touchend", decreaseBreakTime, false);
    document.getElementById("inc-break").addEventListener("touchend", increaseBreakTime, false);
    document.getElementById("dec-session").addEventListener("touchend", decreaseSessionTime, false);
    document.getElementById("inc-session").addEventListener("touchend", increaseSessionTime, false);
    document.getElementById("timer-border").addEventListener("touchend", startStopTimer, false);
    document.getElementById("reset").addEventListener("touchend", reset, false);
*/