// var xValues = [];
// var yValues = [];
let xValues = [];
let yValues = [];
let ctx;

window.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').textContent = e.x;
    document.getElementById('y-value').textContent = e.y;
    ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(xValues[0], yValues[0]);
    for(let i=1; i<xValues[length]; i++) {
        ctx.lineTo(xValues[i], yValues[i]);
    }
    ctx.stroke();
});

window.addEventListener('mousedown', function(e) {
    var rect = canvas.getBoundingClientRect();
    var x = (e.clientX - rect.left); // x == the location of the click in the document - the location (relative to the left) of the canvas in the document
    var y = (e.clientY - rect.top); // y == the location of the click in the document - the location (relative to the top) of the canvas in the document
    var prevX = x;
    var prevY = y;
    var pointSize = 5;
    // var canvasContext = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = "#00000"; // Red color

    //draw dot
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(x, y); 
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    ctx.fill();

    addPoint(x, y); 
});

function addPoint(xVal, yVal) {
    xValues.push(Math.floor(xVal));
    yValues.push(Math.floor(yVal));
    document.getElementById('arrayX').innerHTML = xValues[xValues.length-1];
    document.getElementById('arrayY').innerHTML = yValues[yValues.length-1];
}

function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let img = document.getElementById("field");
    ctx.drawImage(img, 0, 0);
    xValues = [];
    yValues = [];
}

function drawLines() {
    ctx.beginPath();
    ctx.moveTo(120, 800);
    ctx.lineTo(300, 600);
    ctx.fill();
}

