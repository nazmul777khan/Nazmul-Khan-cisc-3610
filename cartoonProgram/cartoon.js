// get the canvas element
var canvas;
var ctx;

function start(){
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");

	
// set background color
ctx.fillStyle = "#87CEFA";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// draw a sun
ctx.fillStyle = "#FDB813";
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fill();

// draw a cloud
ctx.fillStyle = "#FFFFFF";
ctx.beginPath();
ctx.arc(200, 150, 30, 0, 2 * Math.PI);
ctx.arc(240, 150, 30, 0, 2 * Math.PI);
ctx.arc(280, 150, 30, 0, 2 * Math.PI);
ctx.arc(320, 150, 30, 0, 2 * Math.PI);
ctx.fill();

// draw mountains
ctx.fillStyle = "#A9A9A9";
ctx.beginPath();
ctx.moveTo(0, 300);
ctx.lineTo(200, 100);
ctx.lineTo(400, 300);
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(400, 100);
ctx.lineTo(600, 300);
ctx.fill();

// draw a lake
ctx.fillStyle = "#00BFFF";
ctx.fillRect(0, 400, canvas.width, 200);

// draw trees
ctx.fillStyle = "#006400";
ctx.fillRect(50, 250, 20, 100);
ctx.fillStyle = "#228B22";
ctx.beginPath();
ctx.arc(60, 230, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "#006400";
ctx.fillRect(150, 300, 20, 100);
ctx.fillStyle = "#228B22";
ctx.beginPath();
ctx.arc(160, 280, 50, 0, 2 * Math.PI);
ctx.fill();

// draw a house
ctx.fillStyle = "#FFA07A";
ctx.fillRect(500, 300, 200, 100);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(550, 330, 30, 20);
ctx.fillRect(590, 330, 30, 20);
ctx.beginPath();
ctx.moveTo(500, 300);
ctx.lineTo(600, 250);
ctx.lineTo(700, 300);
ctx.fill();

// draw grass using a for loop
ctx.fillStyle = "#00FF00";
for (var i = 0; i < canvas.width; i += 20) {
	ctx.beginPath();
	ctx.moveTo(i, 400);
	ctx.lineTo(i + 10, 380);
	ctx.lineTo(i + 20, 400);
	ctx.fill();
}

// add some caption text
ctx.font = "30px Arial";
ctx.fillStyle = "#FFFFFF";
ctx.fillText("My Cartoon", 350, 50);
	
}

document.addEventListener('DOMContentLoaded', start);

