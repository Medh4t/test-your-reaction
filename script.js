
// Set the starting point
var start = new Date().getTime();

function getRandomColor() {
	var letters = "0123456789ABCDEF".split(""),
		color = "#";
	for (i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random()*16)];
	}
	return color;
}

function makeShapeAppear() {

	// Set random position and dimensions
	var top = Math.random() * 400;
	var left = Math.random() * 700;
	var dimensions = (Math.random() * 40) + 10;

	// The probability that the shape will appear as a circle by 50% 
	if (Math.random() > .5) {
		document.getElementById("shape").style.borderRadius = "50%";
	} else {
		document.getElementById("shape").style.borderRadius = "0";
	}

	document.getElementById("shape").style.backgroundColor = getRandomColor();
	document.getElementById("shape").style.top = top + "px";
	document.getElementById("shape").style.left = left + "px";
	document.getElementById("shape").style.width = dimensions + "px";
	document.getElementById("shape").style.height = dimensions + "px";

	// Make the shape appears
	document.getElementById("shape").style.display = "block";

	// Set The Starting Point
	start = new Date().getTime();
}


function appearAfterDelay() {
	// Invoke makeShapeAppear function after 1000 millisecond
	setTimeout(makeShapeAppear, 1000);
}

appearAfterDelay();



document.getElementById("shape").onclick = function () {
	document.getElementById("shape").style.display = "none";

	// Set the ending point
	var end = new Date().getTime();

	// Calculate time taken
	document.getElementById("timeTaken").innerHTML = (end - start) / 1000 + " s";

	// Encourage the player to click as fast as possible
	if (end - start > 1100) {
		alert("You can do it faster than that!");
	}

	// Invoke appearAfterDelay function
	appearAfterDelay();

	
}