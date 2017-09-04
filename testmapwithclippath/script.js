
var photo = document.querySelector(".photo");

photo.addEventListener("click", playSound);

function playSound(e) {
	alert(e.target.dataset.item);
}