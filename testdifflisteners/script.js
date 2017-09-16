var first = document.querySelector(".first");
var second = document.querySelector(".second");

first.addEventListener("click", wooHoo);
first.addEventListener("click", heyThere);

second.onclick = wooHoo;
second.onclick = heyThere;

function wooHoo() {
	alert("woo hoo!");
}

function heyThere() {
	alert("hey there!");
}