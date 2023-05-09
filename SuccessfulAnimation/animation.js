let canvas;
let context;

function canvasColor() {
    canvas = document.getElementById('mycanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
}

document.addEventListener('DOMContentLoaded', canvasColor);

// "Mouse" object created to store the x and y position
// of the mouse and use it in the below eventListener.
var mouse = {
    x: undefined,
    y: undefined
}

/**
 * Event listener to keep track of the mouse movement on
 * the windows in order to animate the spinning squares.
 */
window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

// An object Square
function Square(x, y, speed, size) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;
    this.rotation = 0;

    this.draw = function () {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.fillStyle = 'black';
        context.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        context.restore();
    }

    this.update = function () {
        this.rotation += this.speed;

        // Interaction
        if (mouse.x + 50 > this.x && mouse.x - 50 < this.x &&
            mouse.y + 50 > this.y && mouse.y - 50 < this.y) {
            this.speed = 0.1;
        } else {
            this.speed = speed;
        }

        this.draw();
    }
}

// Creates one square
let square1 = new Square(200, 200, 0.05, 50);

let squareArr = [];
const sp = 0.01; // Speed for all the squares

/** 
 * Creates 50 squares with randomized characteristics.
 * Size: 20 - 60 pixels
 * Location: x and y - inside the window (following the diameter)
 */
for (let i = 0; i < 200; i++) {
    let size = (Math.random() * 40) + 20;
    let x = Math.random() * (window.innerWidth - size * 2) + size;
    let y = Math.random() * (window.innerHeight - size * 2) + size;
    let speed = sp;
    squareArr.push(new Square(x, y, speed, size));
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    square1.update();

    for (let i = 0; i < squareArr.length; i++) {
        squareArr[i].update();
    }
}

animate();