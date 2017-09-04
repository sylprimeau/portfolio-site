var navLinks = document.querySelectorAll(".nav-link");
var headline = document.querySelector(".headline");
var container = document.querySelectorAll(".container");
var body = document.querySelector("body");
var project = document.querySelectorAll(".project");
var projectInfoClose = document.querySelectorAll(".project-info > .close");
var isBoxExpanded = false;

window.addEventListener("load", init);
/* note: You could also do "window.onload = init;" instead */

function init() {
	fadeInOnLoad();
	addListeners();
}

function fadeInOnLoad() {
	body.classList.add("loaded");
}

function addListeners() {
	/* listen for clicks on nav links */
	navLinks.forEach(function(elem) {
		elem.addEventListener("click", function() {
			spinHeadline();
			highlightNavLink(this);
			showHideContainer(this);
		});
	});
	/* listen for clicks on project thumbnails */
	project.forEach(function(elem) {
		elem.addEventListener("click", function() {
			expandProjectBox(this);
		});
	});
}

function spinHeadline() {
	if (headline.classList.contains("vertical")) {
		return;
	} else {
		headline.classList.add("vertical");
	}
}

function highlightNavLink(elem) {
	navLinks.forEach(function(elem) {
		if (elem.classList.contains("highlighted")) {
			elem.classList.remove("highlighted");
		}
	});
	elem.classList.add("highlighted");
}

function showHideContainer(elem) {
	var divId = elem.id + "-div";
	var div = document.querySelector("#" + divId);
	container.forEach(function(item) {
		if (item.classList.contains("hide")) {
			return;
		} else {
			item.classList.add("hide");
		}
	});
	div.classList.remove("hide");
}

function expandProjectBox(elem) {
	if (isBoxExpanded === false) {
		isBoxExpanded = true;
		project.forEach(function(div) {
			if (div.classList.contains("hide")) {
				return;
			} else {
				div.classList.add("hide");
			}
		});
		elem.classList.remove("hide");
	} else {
		isBoxExpanded = false;
		project.forEach(function(div) {
			if (div.classList.contains("hide")) {
				div.classList.remove("hide");
			} else {
				return;
			}
		});
	}
	elem.classList.toggle("expanded");
}






