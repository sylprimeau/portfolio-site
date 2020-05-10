function setFocus() {
	document.getElementById('inputbox').focus();
	document.getElementById('inputbox').setSelectionRange(0, 10); // the only way it works on mobile (but need to lower keyboard first and it also shows the context menu)
}

function convert() {
//	alert("convert called");
	var i=0;
	var length = document.querySelectorAll("div.inner").length;
	for (i=0;i<length;i++) {
		number = document.getElementById("inputbox").value;
		var e1 = document.getElementById("fromUnits" + i);
		var src = e1.options[e1.selectedIndex].value;
		var srctxt = e1.options[e1.selectedIndex].innerHTML;
//		alert(srctxt);
		var e2 = document.getElementById("toUnits" + i);
		var trg = e2.options[e2.selectedIndex].value;
		var trgtxt = e2.options[e2.selectedIndex].innerHTML;
//		alert(trgtxt);

		////////////////////// LENGTH/DISTANCE ///////////////////
		// convert to meters first "how many meters in one unit?"
		if (src == "kilometer") {
			x = number * 1000;
		} else if (src == "meter") {
			x = number * 1;
		} else if (src == "centimeter") {
			x = number * 0.01;
		} else if (src == "millimeter") {
			x = number * 0.001;
		} else if (src == "mile") {
			x = number * 1609.344;
		} else if (src == "yard") {
			x = number * 0.9144;
		} else if (src == "foot") {
			x = number * 0.3048;
		} else if (src == "inch") {
			x = number * 0.0254;
		} else if (src == "nauticalmile") {
			x = number * 1852;
		}
		// then convert to target unit "one meter is how many units?"
		if (trg == "kilometer") {
			y = x * 0.001;
		} else if (trg == "meter") {
			y = x * 1;
		} else if (trg == "centimeter") {
			y = x * 100;
		} else if (trg == "millimeter") {
			y = x * 1000;
		} else if (trg == "mile") {
			y = x * 0.000621371;
		} else if (trg == "yard") {
			y = x * 1.093613;
		} else if (trg == "foot") {
			y = x * 3.28084;
		} else if (trg == "inch") {
			y = x * 39.3701;
		} else if (trg == "nauticalmile") {
			y = x * 0.000539957;
		}
		////////////////////// AREA ///////////////////
		// convert to meters first "how many square meters in one unit?"
		if (src == "sqkilometer") {
			x = number * 1000000;
		} else if (src == "sqmeter") {
			x = number * 1;
		} else if (src == "sqcentimeter") {
			x = number * 0.0001;
		} else if (src == "sqmillimeter") {
			x = number * 0.000001;
		} else if (src == "sqmile") {
			x = number * 2589988.11;
		} else if (src == "sqyard") {
			x = number * 0.836127;
		} else if (src == "sqfoot") {
			x = number * 0.092903;
		} else if (src == "sqinch") {
			x = number * 0.00064516;
		} else if (src == "nauticalmile") {
			x = number * 3430000;
		} else if (src == "acre") {
			x = number * 4046.86;
		} else if (src == "hectare") {
			x = number * 10000;
		}
		// then convert to target unit "one square meter is how many units?"
		if (trg == "sqkilometer") {
			y = x * 0.000001;
		} else if (trg == "sqmeter") {
			y = x * 1;
		} else if (trg == "sqcentimeter") {
			y = x * 10000;
		} else if (trg == "sqmillimeter") {
			y = x * 1000000;
		} else if (trg == "sqmile") {
			y = x * 0.000000386102;
		} else if (trg == "sqyard") {
			y = x * 1.19599;
		} else if (trg == "sqfoot") {
			y = x * 10.7639;
		} else if (trg == "sqinch") {
			y = x * 1550;
		} else if (trg == "sqnauticalmile") {
			y = x * 0.000000291553;
		} else if (trg == "acre") {
			y = x * 0.000247105;
		} else if (trg == "hectare") {
			y = x * 0.0001;
		}
		////////////////////// MASS/WEIGHT ///////////////////
		// convert to grams first "how many grams in one unit?"
		if (src == "kilogram") {
			x = number * 1000;
		} else if (src == "gram") {
			x = number * 1;
		} else if (src == "milligram") {
			x = number * 0.001;
		} else if (src == "microgram") {
			x = number * 0.000001;
		} else if (src == "tonUS") {
			x = number * 907184.74;
		} else if (src == "tonUK") {
			x = number * 1016046.9088;
		} else if (src == "tonne") {
			x = number * 1000000;
		} else if (src == "pound") {
			x = number * 453.59237;
		} else if (src == "ounce") {
			x = number * 28.349523;
		} else if (src == "stone") {
			x = number * 6350.29318;
		}
		// then convert to target unit "how many x units are in one gram?"
		if (trg == "kilogram") {
			y = x * 0.001;
		} else if (trg == "gram") {
			y = x * 1;
		} else if (trg == "milligram") {
			y = x * 1000;
		} else if (trg == "microgram") {
			y = x * 1000000;
		} else if (trg == "tonUS") {
			y = x * 0.00000110231;
		} else if (trg == "tonUK") {
			y = x * 0.000000984207;
		} else if (trg == "tonne") {
			y = x * 0.000001;
		} else if (trg == "pound") {
			y = x * 0.00220462;
		} else if (trg == "ounce") {
			y = x * 0.035274;
		} else if (trg == "stone") {
			y = x * 0.000157473;
		}
		////////////////////// VOLUME ///////////////////
		// convert to liters first "how many liters in one unit?"
		if (src == "gallonUS") {
			x = number * 3.78541;
		} else if (src == "quartUS") {
			x = number * 0.946353;
		} else if (src == "pintUS") {
			x = number * 0.473176;
		} else if (src == "cupUS") {
			x = number * 0.236588;
		} else if (src == "ounceUS") {
			x = number * 0.0295735;
		} else if (src == "tablespoonUS") {
			x = number * 0.0147868;
		} else if (src == "teaspoonUS") {
			x = number * 0.00492892;
		} else if (src == "meter3") {
			x = number * 1000;
		} else if (src == "liter") {
			x = number * 1;
		} else if (src == "milliliter") {
			x = number * .001;
		} else if (src == "gallonImp") {
			x = number * 4.54609;
		} else if (src == "quartImp") {
			x = number * 1.13652;
		} else if (src == "pintImp") {
			x = number * 0.568261;
		} else if (src == "ounceImp") {
			x = number * 0.0284131;
		} else if (src == "tablespoonImp") {
			x = number * 0.0177582;
		} else if (src == "teaspoonImp") {
			x = number * 0.00591939;
		} else if (src == "foot3") {
			x = number * 28.3168;
		} else if (src == "inch3") {
			x = number * 0.0163871;
		} else if (src == "cupJP") {
			x = number * .2;
		}
		// then convert to target unit "how many x units are in one liter?"
		if (trg == "gallonUS") {
			y = x * 0.264172;
		} else if (trg == "quartUS") {
			y = x * 1.05669;
		} else if (trg == "pintUS") {
			y = x * 2.11338;
		} else if (trg == "cupUS") {
			y = x * 4.22675;
		} else if (trg == "ounceUS") {
			y = x * 33.814;
		} else if (trg == "tablespoonUS") {
			y = x * 67.628;
		} else if (trg == "teaspoonUS") {
			y = x * 202.884;
		} else if (trg == "meter3") {
			y = x * 0.001;
		} else if (trg == "liter") {
			y = x * 1;
		} else if (trg == "milliliter") {
			y = x * 1000;
		} else if (trg == "gallonImp") {
			y = x * 0.219969;
		} else if (trg == "quartImp") {
			y = x * 0.879877;
		} else if (trg == "pintImp") {
			y = x * 1.75975;
		} else if (trg == "ounceImp") {
			y = x * 35.1951;
		} else if (trg == "tablespoonImp") {
			y = x * 56.3121;
		} else if (trg == "teaspoonImp") {
			y = x * 168.936;
		} else if (trg == "foot3") {
			y = x * 0.0353147;
		} else if (trg == "inch3") {
			y = x * 61.0237;
		} else if (trg == "cupJP") {
			y = x * 5;
		}
		////////////////////// TEMPERATURE ///////////////////
		// convert to Celcius first
		if (src == "celcius") {
			x = number * 1;
		} else if (src == "fahrenheit") {
			x = (number-32)/9*5;
		} else if (src == "kelvin") {
			x = number - 273.15;
		}
		// then convert to target unit from Celcius
		if (trg == "celcius") {
			y = x * 1;
		} else if (trg == "fahrenheit") {
			y = (x/5*9) + 32;
		} else if (trg == "kelvin") {
			y = x + 273.15;
		}

		z = Math.round((y + 0.00001) * 100) / 100;
		
		var mq = window.matchMedia("(max-width: 320px)"); //media query for iphone 5S
		if (mq.matches) {

//			document.getElementById("customButton").style.visibility = "hidden";
//			document.getElementById("defaultButton").style.visibility = "hidden";

			document.getElementById("inner" + i).style.fontSize = "13vw";
			if (z > 9999) {
				document.getElementById("inner" + i).style.fontSize = "12vw";
			}
			if (z > 99999) {
				document.getElementById("inner" + i).style.fontSize = "11vw";
			}
			if (z > 999999) {
				document.getElementById("inner" + i).style.fontSize = "10vw";
			}
			if (z > 9999999) {
				document.getElementById("inner" + i).style.fontSize = "9vw";
			}
			if (z > 99999999) {
				document.getElementById("inner" + i).style.fontSize = "8vw";
			}
			if (z > 999999999) {
				document.getElementById("inner" + i).style.fontSize = "7vw";
			}
		} else { // for normal sized PC screens
			document.getElementById("inner" + i).style.fontSize = "4.2vw";
			if (z > 9999) {
				document.getElementById("inner" + i).style.fontSize = "3.7vw";
			}
			if (z > 99999) {
				document.getElementById("inner" + i).style.fontSize = "3.2vw";
			}
			if (z > 999999) {
				document.getElementById("inner" + i).style.fontSize = "2.9vw";
			}
			if (z > 9999999) {
				document.getElementById("inner" + i).style.fontSize = "2.6vw";
			}
			if (z > 99999999) {
				document.getElementById("inner" + i).style.fontSize = "2.4vw";
			}
			if (z > 999999999) {
				document.getElementById("inner" + i).style.fontSize = "2.2vw";
			}
		}
		if (srctxt == trgtxt) {
			document.getElementById("outer" + i).style.visibility = "hidden";
		} else {
			document.getElementById("outer" + i).style.visibility = "visible";
			document.getElementById("inner" + i).innerHTML = z;
			document.getElementById("unitLabel" + i).innerHTML = srctxt + " &#10132; " + trgtxt;
		}
	}
}

function showCustMenu() {
	custButton = document.getElementById("custButton");
	var length = document.querySelectorAll("div.inner").length;
	if (custButton.innerHTML == "Customize Your Home Screen") {
		document.getElementById("custButton").innerHTML = "Cancel";
		for (i=0;i<length;i++) {
			document.getElementById("custMenu" + i).style.visibility = "visible";
		}
		document.getElementById("saveButton").style.visibility = "visible";
		document.getElementById("customButton").style.display = "none";
		document.getElementById("defaultButton").style.display = "none";
		document.getElementById("toUSButton").style.display = "none";
		document.getElementById("toMetricButton").style.display = "none";
	} else if (custButton.innerHTML == "Cancel") {
		document.getElementById("custButton").innerHTML = "Customize Your Home Screen";
		for (i=0;i<length;i++) {
			document.getElementById("custMenu" + i).style.visibility = "hidden";
			document.getElementById("menu").style.height = "20px";
		}
		document.getElementById("saveButton").style.visibility = "hidden";
		document.getElementById("customButton").style.display = "block";
		document.getElementById("defaultButton").style.display = "block";
		document.getElementById("toUSButton").style.display = "block";
		document.getElementById("toMetricButton").style.display = "block";
	}
}

function saveCustom() {
	var colorcookie = "";
	var fromcookie = "";
	var tocookie = "";
	var length = document.querySelectorAll("div.inner").length;
	for (i=0;i<length;i++) {
		color = document.getElementById("color" + i).value;
		from = document.getElementById("fromUnits" + i).value;
		to = document.getElementById("toUnits" + i).value;
		if (i < length-1) { //only add comma after value if not last! (breaks iOS Chrome if present)
			colorcookie = colorcookie + color + ",";
			fromcookie = fromcookie + from + ",";
			tocookie = tocookie + to + ",";
		} else {
			colorcookie = colorcookie + color;
			fromcookie = fromcookie + from;
			tocookie = tocookie + to;
		}

		document.getElementById("outer" + i).style.backgroundColor = color;
	}
	setCookie("colorcustom", colorcookie, 2000);
	setCookie("fromcustom", fromcookie, 2000);
	setCookie("tocustom", tocookie, 2000);
	convert();
	//hide custom screen when done
	document.getElementById("custButton").innerHTML = "Customize Your Home Screen";
	document.getElementById("customButton").style.display = "block";
	document.getElementById("defaultButton").style.display = "block";
	document.getElementById("toUSButton").style.display = "block";
	document.getElementById("toMetricButton").style.display = "block";
	document.getElementById("menu").style.height = "20px";
	for (i=0;i<length;i++) {
		document.getElementById("custMenu" + i).style.visibility = "hidden";
	}
	document.getElementById("saveButton").style.visibility = "hidden";
}

function setCookie(cname, cvalue, exdays) {
//	alert("setCookie called");
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
//	alert("getCookie called");
    var name = cname + "=";
    var ca = document.cookie.split(';');
	var i=0;
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function checkCookie() {
//	alert("checkCookie called");
	color = getCookie("colorcustom"); // check if custom cookie exists
	if (color == "") { //if no custom cookie, try to get default cookies
		color = getCookie("colordefault");
		from = getCookie("fromdefault");
		to = getCookie("todefault");
	} else { // if colorcustom exists, fetch fromcustom and tocustom
		from = getCookie("fromcustom");
		to = getCookie("tocustom");
	}
	color = color.split(","); // split cookie data and put into arrays
	from = from.split(",");
	to = to.split(",");
	if (color != "") { //if a cookie was loaded, fill presets
		length = color.length;
		var i=0;
		for (i=0;i<length;i++) { // to length-1 because of the hanging comma
			document.getElementById("outer" + i).style.backgroundColor = color[i];
			document.getElementById("color" + i).value = color[i];
//			z = document.getElementById("color" + i).value;
			document.getElementById("fromUnits" + i).value = from[i];
			document.getElementById("toUnits" + i).value = to[i];
		}
	} else { // if no cookie, set cookie presets (first-time visitors)
		// set the default values for useful conversions
		color = "#ff8000,#ff8000,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#2dd25f,#2dd25f,#2dd25f,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000";
		from = "celcius,fahrenheit,mile,mile,yard,yard,yard,inch,inch,tonUS,pound,pound,gallonUS,gallonUS,gallonUS,quartUS,quartUS,quartUS,quartUS,pintUS,pintUS,pintUS,pintUS,cupUS,cupUS,cupUS,ounceUS,ounceUS,ounceUS,foot3";
		to = "fahrenheit,celcius,yard,foot,mile,foot,inch,yard,foot,pound,tonUS,ounce,quartUS,pintUS,cupUS,gallonUS,pintUS,cupUS,ounceUS,gallonUS,quartUS,cupUS,ounceUS,quartUS,pintUS,ounceUS,cupUS,tablespoonUS,teaspoonUS,inch3";
		setCookie("colordefault", color, 2000);
		setCookie("fromdefault", from, 2000);
		setCookie("todefault", to, 2000);
		// set the default values for toUS conversions
		color = "#ff8000,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#2dd25f,#2dd25f,#2dd25f,#2dd25f,#2dd25f,#2dd25f,#2dd25f,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000";
		from = "celcius,kilometer,kilometer,kilometer,meter,meter,meter,centimeter,centimeter,centimeter,millimeter,tonne,tonne,kilogram,kilogram,kilogram,gram,gram,liter,liter,liter,liter,liter,milliliter,milliliter,milliliter,milliliter,meter3,meter3,liter";
		to = "fahrenheit,mile,yard,foot,yard,foot,inch,yard,foot,inch,inch,tonUS,pound,tonne,pound,ounce,pound,ounce,gallonUS,quartUS,pintUS,cupUS,ounceUS,cupUS,ounceUS,tablespoonUS,teaspoonUS,foot3,inch3,gallonImp";
		setCookie("colortoUS", color, 2000);
		setCookie("fromtoUS", from, 2000);
		setCookie("totoUS", to, 2000);
		// set the default values for toMetric conversions
		color = "#ff8000,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#0080ff,#2dd25f,#2dd25f,#2dd25f,#2dd25f,#2dd25f,#2dd25f,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000";
		from = "fahrenheit,mile,mile,yard,yard,yard,foot,foot,foot,inch,inch,inch,tonUS,tonUS,pound,pound,ounce,ounce,gallonUS,quartUS,quartUS,pintUS,pintUS,cupUS,cupUS,ounceUS,ounceUS,tablespoonUS,teaspoonUS,foot3";
		to = "celcius,kilometer,meter,kilometer,meter,centimeter,kilometer,meter,centimeter,meter,centimeter,millimeter,tonne,kilogram,kilogram,gram,kilogram,gram,liter,liter,milliliter,liter,milliliter,liter,milliliter,liter,milliliter,milliliter,milliliter,meter3";
		setCookie("colortoMetric", color, 2000);
		setCookie("fromtoMetric", from, 2000);
		setCookie("totoMetric", to, 2000);
	}
}

function showMenu() {
	if (document.getElementById("menu").style.height == "20px") {
		document.getElementById("menu").style.height = "auto";
	} else {
		document.getElementById("menu").style.height = "20px";
	}
}

function loadCustom() {
	color = getCookie("colorcustom");
	from = getCookie("fromcustom");
	to = getCookie("tocustom");
	populate();
	document.getElementById("menu").style.height = "20px";
}

function loadDefault() {
	color = getCookie("colordefault");
	from = getCookie("fromdefault");
	to = getCookie("todefault");
	populate();
	document.getElementById("menu").style.height = "20px";
}

function loadToUS() {
	color = getCookie("colortoUS");
	from = getCookie("fromtoUS");
	to = getCookie("totoUS");
	populate();
	document.getElementById("menu").style.height = "20px";
}

function loadToMetric() {
	color = getCookie("colortoMetric");
	from = getCookie("fromtoMetric");
	to = getCookie("totoMetric");
	populate();
	document.getElementById("menu").style.height = "20px";
}

function populate() {
//	alert("populate called");
//	alert(color + " " + from + " " + to);
	// split cookie data and put into arrays
	color = color.split(",");
	from = from.split(",");
	to = to.split(",");
	//fill presets
	length = color.length;
//	alert("length: " + length);
	for (i=0;i<length-1;i++) { // to length-1 because of the hanging comma
		document.getElementById("outer" + i).style.backgroundColor = color[i];
		document.getElementById("color" + i).value = color[i];
//		z = document.getElementById("color" + i).value; //don't need this?
		document.getElementById("fromUnits" + i).value = from[i];
		document.getElementById("toUnits" + i).value = to[i];
		convert();
	}
	if (color == "") {
		alert("You haven't set up a personal home screen yet. Click on PERSONALIZE to make and save your own customized home screen");
	}
}

window.onload = function() {
//	alert("window.onload called");
	setFocus(); // doesn't set focus in chrome if this is at the bottom of win.load function??? wtf?
	checkCookie();
	if (color[0] == "#") {
		checkCookie(); //recheck cookie in case a default needed to be set on first go round
	}
	convert();
}