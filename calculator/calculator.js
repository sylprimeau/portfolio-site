var expression = [];
var operator = "";
var num = "0";
var result = 0;
var digit = "0";
var addedNewNum = false;
var display = document.getElementById('display');

function displayResult(result) {
  result = result.toString();
  if (result.charAt(0) !== "-") {
    result = result.substring(0, 9);
  } else if (result.charAt(0) === "-") {
    result = result.substring(0, 10);
  }
  display.innerHTML = result;
}


document.body.addEventListener('click', doCalc, false);
document.body.addEventListener('touchstart', doCalc, false);

function doCalc(e) {
  e.preventDefault();

  if (e.target.id === "btn-ac") {
    expression = [];
    operator = "";
    num = "0";
    result = 0;
    digit = "0";
    display.innerHTML = 0;
  }

  if (e.target.id === "btn-ce") {
    display.innerHTML = "0";
    num = "0";
  }

  // add or remove the leading minus
  if (e.target.id === "btn-plusminus" && display.innerHTML.charAt(0) != "-") {
    result = Number(display.innerHTML) - Number(display.innerHTML) * 2;
    displayResult(result);
  } else if (e.target.id === "btn-plusminus") {
    result = display.innerHTML.substr(1);
    displayResult(result);
  }

  if (e.target.classList.contains('decimal') && !num.includes(".")) {
    digit = e.target.innerHTML;
    addedNewNum = true;
    if (num === "0") {
      num = "0.";
      display.innerHTML = num;
    } else if (num !== "0") {
      num += digit;
      display.innerHTML = num;
    }
  }

  // add digits to displayed number
  if (e.target.classList.contains('number') && Number(num) < 100000000 && Number(num) > -100000000) { // each digit should just add to the end of the existing number
    digit = e.target.innerHTML;
    addedNewNum = true;
    if (num === "0") {
      num = digit;
      display.innerHTML = num;
    } else if (num !== "0") {
      num += digit;
      display.innerHTML = num;
    }
  }

  if (e.target.id === "btn-equal") {
    if (addedNewNum) {
      expression.push(display.innerHTML);
    } else {
      expression[expression.length - 1] = "";
    }
    expression = expression.join("");
    expression = expression.replace("--", "+");
    result = eval(expression);
    if (result == "Infinity" || result > 999999999 || result < -999999999) {
      display.innerHTML = "E";
    } else {
      displayResult(result);
      num = "0";
      expression = [];
      result = 0;
    }
  }

  if (e.target.classList.contains('operator') && addedNewNum == true) {
    expression.push(display.innerHTML);
    if (e.target.id === "btn-multiply") {
      operator = "*";
      expression.push(operator);
    } else if (e.target.id === "btn-divide") {
      operator = "/";
      expression.push(operator);
    } else if (e.target.id === "btn-minus") {
      operator = "-";
      expression.push(operator);
    } else if (e.target.id === "btn-plus") {
      operator = "+";
      expression.push(operator);
    }
    num = "0";
    addedNewNum = false;
  } else {
    if (e.target.id === "btn-multiply") {
      operator = "*";
    } else if (e.target.id === "btn-divide") {
      operator = "/";
    } else if (e.target.id === "btn-minus") {
      operator = "-";
    } else if (e.target.id === "btn-plus") {
      operator = "+";
    }
    expression[expression.length - 1] = operator;
  }
}